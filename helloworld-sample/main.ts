import { Main } from "@k8slens/extensions";

export default class ExampleExtensionMain extends Main.LensExtension {
  onActivate() {
    console.log('helloworld-sample activated');
  }

  onDeactivate() {
    console.log('helloworld-sample de-activated');
  }
}
