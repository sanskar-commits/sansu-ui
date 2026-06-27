import { CSSProperties, ReactNode } from "react";

/**
 * Common props shared by most Sansu UI components.
 */
export interface BaseProps {
  /**
   * Component content.
   */
  children?: ReactNode;

  /**
   * Additional CSS class.
   */
  className?: string;

  /**
   * Inline styles.
   */
  style?: CSSProperties;
}