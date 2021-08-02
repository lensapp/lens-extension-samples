import { Renderer } from "@k8slens/extensions";

export default class EmotionStylingExtensionMain extends Renderer.LensExtension {
  onActivate() {
    console.log('styling-emotion-sample activated');
  }

  onDeactivate() {
    console.log('styling-emotion-sample de-activated');
  }
}
