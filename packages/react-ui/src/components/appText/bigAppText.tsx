import React from "react";
import { AppText, AppTextProps } from "./appText";

export class BigAppText extends React.PureComponent<AppTextProps> {
  render(): JSX.Element {
    const { children } = this.props;
    return <AppText style={{ fontSize: 16 }}>{children}</AppText>;
  }
}

export default BigAppText;
