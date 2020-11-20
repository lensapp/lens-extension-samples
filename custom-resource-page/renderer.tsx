import { Component, LensRendererExtension } from "@k8slens/extensions";
import React from "react";
import { CertificateDetails, CertificateDetailsProps } from "./src/components/certificate-details";
import { CertificatePage } from "./src/components/certificates-list";
import { Certificate} from "./src/certificate"

export function CertificateIcon(props: Component.IconProps) {
  return <Component.Icon {...props} material="security" tooltip="Certificates"/>
}

export default class CrdSampleExtension extends LensRendererExtension {
  clusterPages = [{
    path: "/certificates-page",
    title: "Cerfiticates",
    components: {
      Page: () => <CertificatePage extension={this} />,
      MenuIcon: CertificateIcon,
    }
  }]

  kubeObjectDetailItems = [{
    kind: Certificate.kind,
    apiVersions: ["cert-manager.io/v1alpha2"],
    components: {
      Details: (props: CertificateDetailsProps) => <CertificateDetails {...props} />
    }
  }]
}
