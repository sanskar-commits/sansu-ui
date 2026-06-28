import "./Center.css";

import { forwardRef } from "react";

import { cx } from "../../../system";

import type { CenterProps } from "./Center.types";

export const Center = forwardRef<
  HTMLDivElement,
  CenterProps
>(
  (
    {
      inline = false,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cx(
          "sansu-center",
          inline && "sansu-center--inline",
          className
        )}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

Center.displayName = "Center";