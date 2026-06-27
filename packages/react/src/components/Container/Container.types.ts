import {
  HTMLAttributes,
  CSSProperties,
  ReactNode,
} from "react";

export interface ContainerProps
  extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;

  className?: string;

  style?: CSSProperties;

  /**
   * Maximum width of the container.
   */
  maxWidth?: string | number;

  /**
   * Makes the container take full width.
   */
  fluid?: boolean;

  /**
   * Horizontal padding.
   */
  padding?: string | number;
}