import React from "react";
import { Renderer } from "@k8slens/extensions";
import { ExampleIcon, ExamplePage } from "./page";

export default class SassStylingExtension extends Renderer.LensExtension {
  clusterPages = [
    {
      id: "sass-styling-sample",
      components: {
        Page: () => <ExamplePage extension={this}/>,
      }
    }
  ]

  clusterPageMenus = [
    {
      target: { pageId: "sass-styling-sample" },
      title: "Styling with Sass",
      components: {
        Icon: ExampleIcon,
      }
    }
  ]
}
