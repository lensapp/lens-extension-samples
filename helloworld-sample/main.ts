import { Renderer } from "@k8slens/extensions";

export default class ExampleExtensionMain extends Renderer.LensExtension {
  onActivate() {
    console.log('helloworld-sample activated');
  }

  onDeactivate() {
    console.log('helloworld-sample de-activated');
  }
}
