import type {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

/* -------------------------------------------------------------------------- */
/*                                  Tokens                                    */
/* -------------------------------------------------------------------------- */

export type SpacingValue = number | string;

export type SizeValue = number | string;

export type RadiusValue = number | string;

export type ShadowValue = string;

export type ColorValue = string;

/* -------------------------------------------------------------------------- */
/*                                Base Props                                  */
/* -------------------------------------------------------------------------- */

export interface SansuProps {
  /**
   * Additional CSS classes.
   */
  className?: string;

  /**
   * Inline styles.
   */
  style?: CSSProperties;

  /**
   * Component children.
   */
  children?: ReactNode;
}

/* -------------------------------------------------------------------------- */
/*                               HTML Props                                   */
/* -------------------------------------------------------------------------- */

export type HTMLSansuProps<T extends HTMLElement> =
  HTMLAttributes<T> &
  SansuProps;