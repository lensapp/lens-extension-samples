import React from "react";
import { LensRendererExtension } from "@k8slens/extensions";
import { ExampleIcon, ExamplePage } from "./page";

export default class ModulesStylingExtension extends LensRendererExtension {
  clusterPages = [
    {
      path: "/css-modules-styling-sample",
      title: "Styling with CSS Modules",
      components: {
        Page: () => <ExamplePage extension={this}/>,
        MenuIcon: ExampleIcon,
      }
    }
  ]
}
