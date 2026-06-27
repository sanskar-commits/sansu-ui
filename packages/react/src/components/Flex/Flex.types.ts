import { CSSProperties, HTMLAttributes, ReactNode } from "react";

export type FlexDirection =
  | "row"
  | "row-reverse"
  | "column"
  | "column-reverse";

export type FlexWrap =
  | "nowrap"
  | "wrap"
  | "wrap-reverse";

export type JustifyContent =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";

export type AlignItems =
  | "stretch"
  | "flex-start"
  | "center"
  | "flex-end"
  | "baseline";

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;

  direction?: FlexDirection;
  wrap?: FlexWrap;

  justify?: JustifyContent;
  align?: AlignItems;

  gap?: number | string;

  inline?: boolean;

  style?: CSSProperties;
}