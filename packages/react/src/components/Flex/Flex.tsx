import "./Flex.css";

import { FlexProps } from "./Flex.types";

export function Flex({
  children,

  direction = "row",
  wrap = "nowrap",

  justify = "flex-start",
  align = "stretch",

  gap = 0,

  inline = false,

  style,

  className = "",

  ...props
}: FlexProps) {
  return (
    <div
      className={`${
        inline ? "sansu-inline-flex" : "sansu-flex"
      } ${className}`}
      style={{
        flexDirection: direction,
        flexWrap: wrap,
        justifyContent: justify,
        alignItems: align,
        gap,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}