import { SpacerProps } from "./Spacer.types";

export function Spacer({
  style,
  ...props
}: SpacerProps) {
  return (
    <div
      style={{
        flex: 1,
        alignSelf: "stretch",
        ...style,
      }}
      {...props}
    />
  );
}