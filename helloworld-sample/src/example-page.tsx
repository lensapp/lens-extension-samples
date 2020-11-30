import { LensRendererExtension, Component } from "@k8slens/extensions";
import { CoffeeDoodle } from "react-open-doodles";
import path from "path";
import React from "react"

export function ExampleIcon(props: Component.IconProps) {
  return <Component.Icon {...props} material="campaign" tooltip={path.basename(__filename)}/>
}

export class ExamplePage extends React.Component<{ extension: LensRendererExtension }> {
  render() {
    const doodleStyle = {
      width: "200px"
    }
    return (
      <Component.TabLayout>
        <div style={doodleStyle}><CoffeeDoodle accent="#3d90ce" /></div>
        <p>Hello world!</p>
        <p>File: <i>{__filename}</i></p>
      </Component.TabLayout>
    )
  }
}
