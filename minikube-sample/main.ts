import { LensMainExtension, Store } from "@k8slens/extensions"
import { KubeConfig } from "@kubernetes/client-node"
import { homedir } from "os"
import * as path from "path"

const clusterStore = Store.clusterStore
const workspaceStore = Store.workspaceStore

export default class MinikubeExtension extends LensMainExtension {

  async onActivate() {
    console.log("minikube extension activated")

    this.syncMinikube()
  }

  async syncMinikube() {
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

    setTimeout(() => {
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

  findClusterById(id: string) {
    return clusterStore.clustersList.find((c) => c.ownerRef === "minikube" && c.contextName === "minikube")
  }
}
