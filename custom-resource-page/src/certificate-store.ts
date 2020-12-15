import { K8sApi} from "@k8slens/extensions";
import { Certificate } from "./certificate";

export class CertificatesApi extends K8sApi.KubeApi<Certificate> {
}
export const certificatesApi = new CertificatesApi({
  objectConstructor: Certificate
});

export class CertificatesStore extends K8sApi.KubeObjectStore<Certificate> {
  api = certificatesApi
}

export const certificatesStore = new CertificatesStore();
K8sApi.apiManager.registerStore(certificatesStore);
