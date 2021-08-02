import React from "react";
import { Renderer } from "@k8slens/extensions";
import { ExampleIcon, ExamplePage } from "./page";

export default class EmotionStylingExtension extends Renderer.LensExtension {
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
      target: { pageId: "emotion-styling-sample" },
      title: "Styling with Emotion",
      components: {
        Icon: ExampleIcon,
      }
    }
  ]
}
