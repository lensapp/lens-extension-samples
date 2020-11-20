import { K8sApi} from "@k8slens/extensions";

export class Certificate extends K8sApi.KubeObject {
  static kind = "Certificate"
  static namespaced = true
  static apiBase = "/apis/cert-manager.io/v1alpha2/certificates"

  kind: string
  apiVersion: string
  metadata: {
    name: string;
    namespace: string;
    selfLink: string;
    uid: string;
    resourceVersion: string;
    creationTimestamp: string;
    labels: {
      [key: string]: string;
    };
    annotations: {
      [key: string]: string;
    };
  }
  spec: {
    dnsNames: string[];
    issuerRef: {
      group: string;
      kind: string;
      name: string;
    }
    secretName: string
  }
  status: {
    conditions: {
      lastTransitionTime: string;
      message: string;
      reason: string;
      status: string;
      type?: string;
    }[];
  }
}