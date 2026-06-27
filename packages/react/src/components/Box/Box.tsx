import { forwardRef } from "react";
import { BoxProps } from "./Box.types";

export const Box = forwardRef<HTMLElement, BoxProps>(
  (
    {
      as: Component = "div",
      children,
      className,
      style,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={className}
        style={style}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Box.displayName = "Box";