import { LensMainExtension } from "@k8slens/extensions";

export default class EmotionStylingExtensionMain extends LensMainExtension {
  onActivate() {
    console.log('styling-emotion-sample activated');
  }

  onDeactivate() {
    console.log('styling-emotion-sample de-activated');
  }
}
