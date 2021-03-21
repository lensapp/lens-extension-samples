import { LensRendererExtension, Component, K8sApi } from "@k8slens/extensions";
import { ExampleIcon, ExamplePage } from "./src/example-page";
import { ExampleGlobalPage } from "./src/example-global-page";
import { ExamplePodDetails } from "./src/example-pod-details";
import React from "react";

export default class ExampleExtension extends LensRendererExtension {
  globalPages = [
    {
      id: "hello",
      components: {
        Page: () => <ExampleGlobalPage extension={this}/>,
      }
    }
  ]

  clusterPages = [
    {
      id: "hello",
      components: {
        Page: () => <ExamplePage extension={this}/>,
      }
    }
  ]

  clusterPageMenus = [
    {
      target: { pageId: "hello" },
      title: "Hello World",
      components: {
        Icon: ExampleIcon,
      }
    }
  ]

  kubeObjectDetailItems = [
    {
      kind: "Pod",
      apiVersions: ["v1"],
      priority: 10,
      components: {
        Details: (props: Component.KubeObjectDetailsProps<K8sApi.Pod>) => <ExamplePodDetails {...props} />
      }
    }
  ]

  statusBarItems = [
    {
      item: (
        <div className="flex align-center gaps" onClick={() => this.navigate("hello") } >
          <Component.Icon material="campaign" interactive /> Hello World!
        </div>
      )
    }
  ]

  async onActivate() {
    console.log("hello world")
  }
}
