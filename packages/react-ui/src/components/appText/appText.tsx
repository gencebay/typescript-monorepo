import React from "react";

type AppTextProps = React.HTMLAttributes<HTMLSpanElement>;

class AppText extends React.PureComponent<AppTextProps> {
  render(): JSX.Element {
    const { children } = this.props;
    return (
      <span key="text" {...this.props}>
        {children}
      </span>
    );
  }
}

export { AppText, AppTextProps };
