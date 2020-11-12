import { Component, K8sApi } from "@k8slens/extensions";
import React from "react";

export class ExamplePodDetails extends React.Component<Component.KubeObjectDetailsProps<K8sApi.Pod>> {
  render() {
    return (
      <div>
        <Component.DrawerTitle title="Hello" />
        <Component.DrawerItem name="Message">
          Hello { this.props.object.getName() }!
        </Component.DrawerItem>
      </div>
    )
  }
}
