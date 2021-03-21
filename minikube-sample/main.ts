import { LensMainExtension, Store } from "@k8slens/extensions"
import { KubeConfig } from "@kubernetes/client-node"
import { homedir } from "os"
import * as path from "path"

const clusterStore = Store.clusterStore
const workspaceStore = Store.workspaceStore

export default class MinikubeExtension extends LensMainExtension {

  syncTimer: NodeJS.Timeout

  async onActivate(): Promise<void> {
    console.log("minikube extension activated")

    this.syncMinikube()
  }

  async onDeactivate(): Promise<void> {
    console.log("minikube extension deactivated")

    if (this.syncTimer) {
      clearTimeout(this.syncTimer);
    }

    const workspace = workspaceStore.getByName("minikube");
    if (!workspace) {
      return;
    }

    if (workspaceStore.currentWorkspaceId === workspace.id) {
      workspaceStore.setActive(workspaceStore.enabledWorkspacesList[0].id);
    }

    workspace.enabled = false
    const clusters = clusterStore.getByWorkspaceId(workspace.id);
    clusters.forEach(cluster => cluster.enabled = false);
  }

  async syncMinikube(): Promise<void> {
    const workspace = this.ensureWorkspace()

    const kc = new KubeConfig()
    kc.loadFromDefault()

    const minikube = kc.contexts.find((c) => c.name === "minikube")
    if (minikube) {
      this.ensureCluster("minikube", workspace)
    } else {
      workspace.enabled = false
      const cluster = this.findClusterById("minikube")
      if (cluster) {
        cluster.enabled = false
      }
    }

    this.syncTimer = setTimeout(() => {
      this.syncMinikube()
    }, 5000)
  }

  ensureCluster(id: string, workspace: Store.Workspace): Store.Cluster {
    let cluster = this.findClusterById("minikube")
    if (!cluster) {
      cluster = clusterStore.addCluster({
        id: id,
        kubeConfigPath: path.join(homedir(), ".kube", "config"),
        contextName: id,
        ownerRef: "minikube",
        workspace: workspace.id
      })
    }
    if (cluster) {
      cluster.enabled = true
      workspace.enabled = true
    }

    return cluster
  }

  ensureWorkspace(): Store.Workspace {
    let workspace = workspaceStore.workspacesList.find((w) => w.id === "minikube" && w.ownerRef === "minikube")
    if (!workspace) {
      workspace = workspaceStore.addWorkspace(new Store.Workspace({
        id: "minikube",
        name: "minikube",
        ownerRef: "minikube"
      }))
    }

    return workspace
  }

  findClusterById(id: string): Store.Cluster {
    return clusterStore.clustersList.find((c) => c.ownerRef === id && c.contextName === id)
  }
}
