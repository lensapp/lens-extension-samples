import { LensMainExtension } from "@k8slens/extensions";

export default class SassStylingExtensionMain extends LensMainExtension {
  onActivate() {
    console.log('styling-sass-sample activated');
  }

  onDeactivate() {
    console.log('styling-sass-sample de-activated');
  }
}
