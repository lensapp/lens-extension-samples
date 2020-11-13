import { LensRendererExtension } from "@k8slens/extensions";
import { ExampleIcon, ExamplePage } from "./page"
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
}
