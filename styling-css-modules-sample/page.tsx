import styles from "./styles.module.scss";
import React from "react";
import path from "path";
import { Renderer } from "@k8slens/extensions";
import { CoffeeDoodle } from "react-open-doodles";

export function ExampleIcon(props:Renderer.Component.IconProps) {
  return <Renderer.Component.Icon {...props} material="pages" tooltip={path.basename(__filename)}/>
}

export class ExamplePage extends React.Component<{ extension: Renderer.LensExtension }> {
  render() {
    return (
      <div className={styles.HelloWorld}>
        <div className={styles["doodle-style"]}><CoffeeDoodle accent="#3d90ce" /></div>
        <p>Hello world with CSS Modules!</p>
        <p>File: <i>{__filename}</i></p>
      </div>
    );
  }
}
