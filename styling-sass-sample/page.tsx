import "./styles.scss";
import { Renderer } from "@k8slens/extensions";
import { CoffeeDoodle } from "react-open-doodles";
import path from "path";
import React from "react"

export function ExampleIcon(props: Renderer.Component.IconProps) {
  return <Renderer.Component.Icon {...props} material="pages" tooltip={path.basename(__filename)}/>
}

export class ExamplePage extends React.Component<{ extension: Renderer.LensExtension }> {
  render() {
    return (
      <div className="SassStylingExtension">
        <div className="doodle-style"><CoffeeDoodle accent="#3d90ce" /></div>
        <p>Hello world with Sass!</p>
        <p>File: <i>{__filename}</i></p>
      </div>
    )
  }
}
