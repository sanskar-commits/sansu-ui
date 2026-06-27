import "./Divider.css";

import { colors, spacing } from "../../tokens";
import { DividerProps } from "./Divider.types";

export function Divider({
  orientation = "horizontal",
  thickness = 1,
  color = colors.gray[200],
  margin = spacing[4],
  style,
  ...props
}: DividerProps) {
  const isNumber = typeof margin === "number";

  const normalizedMargin = isNumber
    ? `${margin}px`
    : margin;

  const dividerStyle =
    orientation === "horizontal"
      ? {
          height: thickness,
          margin: `${normalizedMargin} 0`,
        }
      : {
          width: thickness,
          margin: `0 ${normalizedMargin}`,
        };

  return (
    <hr
      role="separator"
      aria-orientation={orientation}
      className={`sansu-divider sansu-divider--${orientation}`}
      style={{
        color,
        ...dividerStyle,
        ...style,
      }}
      {...props}
    />
  );
}