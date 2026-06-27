import { ReactNode, CSSProperties } from "react";
import {
  AlignItems,
  JustifyContent,
  FlexWrap,
} from "../Flex/Flex.types";

export interface StackProps {
  children?: ReactNode;

  spacing?: number | string;

  align?: AlignItems;

  justify?: JustifyContent;

  wrap?: FlexWrap;

  className?: string;

  style?: CSSProperties;
}