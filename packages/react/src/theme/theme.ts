import {
  breakpoints,
  colors,
  durations,
  easings,
  opacity,
  radius,
  shadows,
  sizes,
  spacing,
  transitions,
  typography,
  zIndex,
} from "../tokens";

export const theme = {
  colors,
  spacing,
  radius,
  shadows,
  typography,
  breakpoints,
  sizes,
  opacity,
  zIndex,
  durations,
  easings,
  transitions,
} as const;

export type Theme = typeof theme;