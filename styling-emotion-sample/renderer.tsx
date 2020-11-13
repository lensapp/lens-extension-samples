import React from "react";
import { LensRendererExtension } from "@k8slens/extensions";
import { ExampleIcon, ExamplePage } from "./page";

export default class EmotionStylingExtension extends LensRendererExtension {
  clusterPages = [
    {
      id: "emotion-styling-sample",
      components: {
        Page: () => <ExamplePage extension={this}/>,
      }
    }
  ]

  clusterPageMenus = [
    {
      id: this.clusterPages[0].id, // must be the same as in page registration to be visible in sidebar
      url: `/${this.clusterPages[0].id}`,
      title: "Styling with Emotion",
      components: {
        Icon: ExampleIcon
      }
    }
  ]
}
