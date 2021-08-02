import { Renderer } from "@k8slens/extensions";
import React from "react";

const {
  Component: {
    DrawerItem,
    DrawerTitle,
  }
} = Renderer;


export class ExamplePodDetails extends React.Component<Renderer.Component.KubeObjectDetailsProps<Renderer.K8sApi.Pod>> {
  render() {
    return (
      <div>
        <DrawerTitle title="Hello" />
        <DrawerItem name="Message">
          Hello { this.props.object.getName() }!
        </DrawerItem>
      </div>
    )
  }
}
