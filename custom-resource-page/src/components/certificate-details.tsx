import { Component, K8sApi } from "@k8slens/extensions";
import React from "react";
import { Certificate } from "../certificate";

export interface CertificateDetailsProps extends Component.KubeObjectDetailsProps<Certificate>{
}

export class CertificateDetails extends React.Component<CertificateDetailsProps> {

  render() {
    const { object: certificate } = this.props;
    if (!certificate) return null;
    return (
      <div className="Certificate">
        <Component.DrawerItem name="Created">
          {certificate.getAge(true, false)} ago ({certificate.metadata.creationTimestamp })
        </Component.DrawerItem>
        <Component.DrawerItem name="DNS Names">
          {certificate.spec.dnsNames.join(",")}
        </Component.DrawerItem>
        <Component.DrawerItem name="Secret">
          {certificate.spec.secretName}
        </Component.DrawerItem>
        <Component.DrawerItem name="Status" className="status" labelsOnly>
          {certificate.status.conditions.map((condition, index) => {
            const { type, reason, message, status } = condition;
            const kind = type || reason;
            if (!kind) return null;
            return (
              <Component.Badge
                key={kind + index} label={kind}
                className={"success "+kind.toLowerCase()}
                tooltip={message}
              />
            );
          })}
        </Component.DrawerItem>
      </div>
    )
  }
}
