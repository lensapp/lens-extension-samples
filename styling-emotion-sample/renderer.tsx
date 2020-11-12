import React from "react";
import { LensRendererExtension } from "@k8slens/extensions";
import { ExampleIcon, ExamplePage } from "./page";

export default class EmotionStylingExtension extends LensRendererExtension {
  clusterPages = [
    {
      path: "/emotion-styling-sample",
      title: "Styling with Emotion",
      components: {
        Page: () => <ExamplePage extension={this}/>,
        MenuIcon: ExampleIcon,
      }
    }
  ]
}
