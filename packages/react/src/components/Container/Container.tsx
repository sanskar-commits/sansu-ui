import "./Container.css";

import { colors, spacing } from "../../tokens";
import { ContainerProps } from "./Container.types";

export function Container({
  children,
  className = "",
  style,

  maxWidth = "1200px",

  fluid = false,

  padding = spacing[6],

  ...props
}: ContainerProps) {
  const normalizedPadding =
    typeof padding === "number"
      ? `${padding}px`
      : padding;

  const normalizedMaxWidth =
    typeof maxWidth === "number"
      ? `${maxWidth}px`
      : maxWidth;

  return (
    <div
      className={`sansu-container ${className}`}
      style={{
        maxWidth: fluid
          ? "100%"
          : normalizedMaxWidth,

        paddingInline: normalizedPadding,

        background: colors.transparent,

        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}