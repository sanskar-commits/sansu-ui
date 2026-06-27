import "./Center.css";

import { CenterProps } from "./Center.types";

export function Center({
  children,

  className = "",

  style,

  width = "100%",

  height = "auto",

  inline = false,

  ...props
}: CenterProps) {
  const normalizedWidth =
    typeof width === "number"
      ? `${width}px`
      : width;

  const normalizedHeight =
    typeof height === "number"
      ? `${height}px`
      : height;

  return (
    <div
      className={`sansu-center ${
        inline ? "sansu-center--inline" : ""
      } ${className}`}
      style={{
        width: normalizedWidth,
        height: normalizedHeight,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}