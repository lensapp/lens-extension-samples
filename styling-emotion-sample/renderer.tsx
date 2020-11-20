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
      target: { pageId: "emotion-styling-sample" },
      title: "Styling with Emotion",
      components: {
        Icon: ExampleIcon,
      }
    }
  ]
}
