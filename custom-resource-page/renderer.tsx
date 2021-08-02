import { Renderer } from "@k8slens/extensions";
import React from "react";
import { CertificateDetails, CertificateDetailsProps } from "./src/components/certificate-details";
import { CertificatePage } from "./src/components/certificate-page";
import { Certificate} from "./src/certificate"

export function CertificateIcon(props: Renderer.Component.IconProps) {
  return <Renderer.Component.Icon {...props} material="security" tooltip="Certificates"/>
}

export default class CrdSampleExtension extends Renderer.LensExtension {
  clusterPages = [{
    id: "certificates",
    components: {
      Page: () => <CertificatePage extension={this} />,
      MenuIcon: CertificateIcon,
    }
  }]

  clusterPageMenus = [
    {
      target: { pageId: "certificates" },
      title: "Certificates",
      components: {
        Icon: CertificateIcon,
      }
    },
  ];

  kubeObjectDetailItems = [{
    kind: Certificate.kind,
    apiVersions: ["cert-manager.io/v1alpha2", "cert-manager.io/v1"],
    components: {
      Details: (props: CertificateDetailsProps) => <CertificateDetails {...props} />
    }
  }]
}
