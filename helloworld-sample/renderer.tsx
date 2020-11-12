import { LensRendererExtension, Component, K8sApi } from "@k8slens/extensions";
import { ExampleIcon, ExamplePage } from "./src/example-page"
import { ExamplePodDetails } from "./src/example-pod-details"
import React from "react"

export default class ExampleExtension extends LensRendererExtension {
  clusterPages = [
    {
      path: "/extension-example",
      title: "Hello World",
      components: {
        Page: () => <ExamplePage extension={this}/>,
        MenuIcon: ExampleIcon,
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
