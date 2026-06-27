import { CSSProperties, ElementType, ReactNode } from "react";

export interface BoxProps {
  as?: ElementType;

  children?: ReactNode;

  className?: string;

  style?: CSSProperties;
}