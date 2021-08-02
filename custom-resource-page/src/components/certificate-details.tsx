import { Renderer } from "@k8slens/extensions";
import React from "react";
import { Certificate } from "../certificate";

const {
  Component: {
    Badge,
    DrawerItem
  },
} = Renderer; 
export interface CertificateDetailsProps extends Renderer.Component.KubeObjectDetailsProps<Certificate>{
}

export class CertificateDetails extends React.Component<CertificateDetailsProps> {

  render() {
    const { object: certificate } = this.props;
    if (!certificate) return null;
    return (
      <div className="Certificate">
        <DrawerItem name="Created">
          {certificate.getAge(true, false)} ago ({certificate.metadata.creationTimestamp })
        </DrawerItem>
        <DrawerItem name="DNS Names">
          {certificate.spec.dnsNames.join(",")}
        </DrawerItem>
        <DrawerItem name="Secret">
          {certificate.spec.secretName}
        </DrawerItem>
        <DrawerItem name="Status" className="status" labelsOnly>
          {certificate.status.conditions.map((condition, index) => {
            const { type, reason, message, status } = condition;
            const kind = type || reason;
            if (!kind) return null;
            return (
              <Badge
                key={kind + index} label={kind}
                className={"success "+kind.toLowerCase()}
                tooltip={message}
              />
            );
          })}
        </DrawerItem>
      </div>
    )
  }
}
