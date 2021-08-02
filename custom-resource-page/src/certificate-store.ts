import { Renderer} from "@k8slens/extensions";
import { Certificate } from "./certificate";

export class CertificatesApi extends Renderer.K8sApi.KubeApi<Certificate> {
}

export const certificatesApi = new CertificatesApi({
  objectConstructor: Certificate
});

export class CertificatesStore extends Renderer.K8sApi.KubeObjectStore<Certificate> {
  api = certificatesApi
}

export const certificatesStore = new CertificatesStore();
Renderer.K8sApi.apiManager.registerStore(certificatesStore);
