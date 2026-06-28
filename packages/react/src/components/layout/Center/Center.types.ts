import type { HTMLAttributes } from "react";

export interface CenterProps
  extends HTMLAttributes<HTMLDivElement> {
  /**
   * Render as inline-flex instead of flex.
   *
   * @default false
   */
  inline?: boolean;
}