import React from "react";
import { Renderer } from "@k8slens/extensions";
import { ExampleIcon, ExamplePage } from "./page";

export default class ModulesStylingExtension extends Renderer.LensExtension {
  clusterPages = [
    {
      id: "css-modules-styling-sample",
      components: {
        Page: () => <ExamplePage extension={this}/>,
      }
    }
  ]

  clusterPageMenus = [
    {
      target: { pageId: "css-modules-styling-sample" },
      title: "Styling with CSS Modules",
      components: {
        Icon: ExampleIcon,
      }
    }
  ]
}
