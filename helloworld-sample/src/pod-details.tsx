import { Component, K8sApi } from "@k8slens/extensions";
import React from "react";

export class PodDetails extends React.Component<{ pod: K8sApi.Pod }> {
  render() {
    return (
      <div>
        <Component.DrawerTitle title="Hello" />
        <Component.DrawerItem name="Message">
          Hello { this.props.pod.getName()}!
        </Component.DrawerItem>
      </div>
    )
  }
}
