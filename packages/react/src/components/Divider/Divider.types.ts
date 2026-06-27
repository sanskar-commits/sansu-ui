import {
  CSSProperties,
  HTMLAttributes,
} from "react";

export type DividerOrientation =
  | "horizontal"
  | "vertical";

export interface DividerProps
  extends HTMLAttributes<HTMLHRElement> {
  orientation?: DividerOrientation;

  thickness?: number | string;

  color?: string;

  margin?: number | string;

  style?: CSSProperties;
}