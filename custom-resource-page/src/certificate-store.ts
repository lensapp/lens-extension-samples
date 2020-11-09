import { K8sApi} from "@k8slens/extensions";
import { Certificate } from "./certificate";

export class CertifcatesApi extends K8sApi.KubeApi<Certificate> {
}
export const certificateApi = new CertifcatesApi({
  objectConstructor: Certificate
});

export class CertificateStore extends K8sApi.KubeObjectStore<Certificate> {
  api = certificateApi
}

export const certificateStore = new CertificateStore();
K8sApi.apiManager.registerStore(certificateStore);
