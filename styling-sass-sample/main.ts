import { Renderer } from "@k8slens/extensions";

export default class SassStylingExtensionMain extends Renderer.LensExtension {
  onActivate() {
    console.log('styling-sass-sample activated');
  }

  onDeactivate() {
    console.log('styling-sass-sample de-activated');
  }
}
