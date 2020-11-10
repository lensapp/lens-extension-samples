import { Component, K8sApi, LensRendererExtension } from "@k8slens/extensions";
import React from "react";
import { certificatesStore } from "../certificate-store";
import { Certificate } from "../certificate"

enum sortBy {
  name = "name",
  namespace = "namespace",
  issuer = "issuer"
}

export class CertificatePage extends React.Component<{ extension: LensRendererExtension }> {

  async componentDidMount() {
    await certificatesStore.loadAll()
  }

  render() {
    return (
      <Component.KubeObjectListLayout
        className="Certicates" store={certificatesStore}
        sortingCallbacks={{
          [sortBy.name]: (certificate: Certificate) => certificate.getName(),
          [sortBy.namespace]: (certificate: Certificate) => certificate.metadata.namespace,
          [sortBy.issuer]: (certificate: Certificate) => certificate.spec.issuerRef.name
        }}
        searchFilters={[
          (certificate: Certificate) => certificate.getSearchFields()
        ]}
        renderHeaderTitle="Certificates"
        renderTableHeader={[
          { title: "Name", className: "name", sortBy: sortBy.name },
          { title: "Namespace", className: "namespace", sortBy: sortBy.namespace },
          { title: "Issuer", className: "issuer", sortBy: sortBy.namespace },
        ]}
        renderTableContents={(certificate: Certificate) => [
          certificate.getName(),
          certificate.metadata.namespace,
          certificate.spec.issuerRef.name
        ]}
      />
    )
  }
}