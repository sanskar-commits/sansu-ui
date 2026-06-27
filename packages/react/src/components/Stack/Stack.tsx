import { Flex } from "../Flex";
import { StackProps } from "./Stack.types";

export function Stack({
  children,
  spacing = 0,
  align = "stretch",
  justify = "flex-start",
  wrap = "nowrap",
  className = "",
  style,
}: StackProps) {
  return (
    <Flex
      direction="column"
      gap={spacing}
      align={align}
      justify={justify}
      wrap={wrap}
      className={className}
      style={style}
    >
      {children}
    </Flex>
  );
}