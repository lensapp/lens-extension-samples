import { LensRendererExtension } from "@k8slens/extensions";
import { ExampleIcon, ExamplePage } from "./src/example-page"
import { PodDetails } from "./src/pod-details"
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
        Details: (props: any) => <PodDetails pod={props.object} />
      }
    }
  ]
}
