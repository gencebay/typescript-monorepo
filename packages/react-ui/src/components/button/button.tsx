import React from "react";
import { Alignment } from "@gencebay/contracts";

export interface ButtonProps {
  loading?: boolean;
  active?: boolean;
  alignText?: Alignment;
}

export interface ButtonState {
  isActive: boolean;
}

type MyCustomButtonProps = ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

export class MyCustomButton extends React.PureComponent<
  MyCustomButtonProps,
  ButtonState
> {
  constructor(props: MyCustomButtonProps) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  private alignmentClass = (alignment?: Alignment): string | undefined => {
    switch (alignment) {
      case Alignment.LEFT:
        return "btn-align-left";
      case Alignment.RIGHT:
        return "btn-align-right";
      default:
        return "";
    }
  };

  public render(): JSX.Element {
    const { isActive } = this.state;
    const { children, onClick, alignText, className } = this.props;
    const classes = [`my-btn ${this.alignmentClass(alignText)}`, className].join("");
    return (
      <button
        type="button"
        {...this.props}
        className={classes}
        onClick={isActive ? undefined : onClick}
      >
        {children}
      </button>
    );
  }
}
