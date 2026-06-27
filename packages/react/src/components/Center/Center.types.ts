import {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

export interface CenterProps
  extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;

  className?: string;

  style?: CSSProperties;

  /**
   * Width of the Center container.
   */
  width?: string | number;

  /**
   * Height of the Center container.
   */
  height?: string | number;

  /**
   * Display inline-flex instead of flex.
   */
  inline?: boolean;
}