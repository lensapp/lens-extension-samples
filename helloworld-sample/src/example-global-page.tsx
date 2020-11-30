import { LensRendererExtension, Component } from "@k8slens/extensions";
import { MeditatingDoodle } from "react-open-doodles";
import React from "react"

export class ExampleGlobalPage extends React.Component<{ extension: LensRendererExtension }> {
  render() {
    const doodleStyle = {
      width: "200px"
    }
    return (
      <Component.PageLayout header={<h2>Hello</h2>} showOnTop={true}>
        <div style={doodleStyle}><MeditatingDoodle accent="#3d90ce" /></div>
        <p>Hello world!</p>
        <p>File: <i>{__filename}</i></p>
      </Component.PageLayout>
    )
  }
}
