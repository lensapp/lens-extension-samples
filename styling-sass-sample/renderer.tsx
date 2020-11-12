import React from "react";
import { LensRendererExtension } from "@k8slens/extensions";
import { ExampleIcon, ExamplePage } from "./page";

export default class SassStylingExtension extends LensRendererExtension {
  clusterPages = [
    {
      path: "/sass-styling-sample",
      title: "Styling with Sass",
      components: {
        Page: () => <ExamplePage extension={this}/>,
        MenuIcon: ExampleIcon,
      }
    }
  ]
}
