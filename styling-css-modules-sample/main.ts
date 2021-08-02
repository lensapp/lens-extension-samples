import { Renderer } from "@k8slens/extensions";

export default class ModulesStylingExtensionMain extends Renderer.LensExtension {
  onActivate() {
    console.log('styling-css-modules-sample activated');
  }

  onDeactivate() {
    console.log('styling-css-modules-sample de-activated');
  }
}
