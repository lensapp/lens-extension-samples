import { Main } from "@k8slens/extensions";

export default class ModulesStylingExtensionMain extends Main.LensExtension {
  onActivate() {
    console.log('styling-css-modules-sample activated');
  }

  onDeactivate() {
    console.log('styling-css-modules-sample de-activated');
  }
}
