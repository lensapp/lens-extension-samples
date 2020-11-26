import React from "react";
import path from "path";
import styled from "@emotion/styled";
import { observer } from "mobx-react";
import { LensRendererExtension, Component, Theme } from "@k8slens/extensions";
import { CoffeeDoodle } from "react-open-doodles";

const Wrapper = styled.div`
  background-color: var(--layoutBackground);
  font-size: 14px;
  color: var(--blue);
  font-weight: bold;
  padding: calc(var(--padding) * 2);

  &:hover {
    color: white;
  }

  .doodle-style {
    width: 200px;
  }
`

export function ExampleIcon(props: Component.IconProps) {
  return <Component.Icon {...props} material="pages" tooltip={path.basename(__filename)}/>
}

@observer
export class ExamplePage extends React.Component<{ extension: LensRendererExtension }> {
  render() {
    return (
      <Wrapper>
        <div className="doodle-style"><CoffeeDoodle accent="#3d90ce" /></div>
        <p>Hello world with Emotion!</p>
        <p>File: <i>{__filename}</i></p>
        <p>Active theme is {Theme.getActiveTheme().name}</p>
      </Wrapper>
    );
  }
}
