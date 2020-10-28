import { LensMainExtension } from "@k8slens/extensions";

export default class ExampleExtensionMain extends LensMainExtension {
  onActivate() {
    console.log('hello-world activated');
  }

  onDeactivate() {
    console.log('hello-world de-activated');
  }
}
