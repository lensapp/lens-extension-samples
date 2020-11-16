import { LensRendererExtension, Component, K8sApi } from "@k8slens/extensions";
import { ExampleIcon, ExamplePage } from "./src/example-page"
import { ExamplePodDetails } from "./src/example-pod-details"
import React from "react"

export default class ExampleExtension extends LensRendererExtension {
  clusterPages = [
    {
      id: "extension-example",
      components: {
        Page: () => <ExamplePage extension={this}/>,
      }
    }
  ]

  clusterPageMenus = [
    {
      id: this.clusterPages[0].id, // must be the same as in page registration to be visible in sidebar
      url: `/${this.clusterPages[0].id}`,
      title: "Hello World",
      components: {
        Icon: ExampleIcon
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
}
