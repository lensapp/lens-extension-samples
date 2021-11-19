import { Main } from "@k8slens/extensions";

export default class EmotionStylingExtensionMain extends Main.LensExtension {
  onActivate() {
    console.log('styling-emotion-sample activated');
  }

  onDeactivate() {
    console.log('styling-emotion-sample de-activated');
  }
}
