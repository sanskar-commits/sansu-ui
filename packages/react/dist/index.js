// src/components/layout/Center/Center.tsx
import { forwardRef } from "react";

// src/system/cx.ts
function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/layout/Center/Center.tsx
import { jsx } from "react/jsx-runtime";
var Center = forwardRef(
  ({
    inline = false,
    className,
    children,
    ...rest
  }, ref) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cx(
          "sansu-center",
          inline && "sansu-center--inline",
          className
        ),
        ...rest,
        children
      }
    );
  }
);
Center.displayName = "Center";

// src/tokens/colors.ts
var colors = {
  transparent: "transparent",
  white: "#ffffff",
  black: "#000000",
  primary: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827"
  },
  success: "#22c55e",
  warning: "#f59e0b",
  danger: "#ef4444",
  info: "#06b6d4"
};

// src/tokens/spacing.ts
var spacing = {
  0: "0px",
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  7: "28px",
  8: "32px",
  9: "36px",
  10: "40px",
  12: "48px",
  14: "56px",
  16: "64px",
  20: "80px",
  24: "96px",
  32: "128px"
};

// src/tokens/radius.ts
var radius = {
  none: "0px",
  xs: "2px",
  sm: "4px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  "2xl": "24px",
  full: "9999px"
};

// src/tokens/shadows.ts
var shadows = {
  none: "none",
  sm: "0 1px 2px rgba(0,0,0,.08)",
  md: "0 4px 8px rgba(0,0,0,.12)",
  lg: "0 8px 20px rgba(0,0,0,.15)",
  xl: "0 20px 40px rgba(0,0,0,.18)"
};

// src/tokens/typography.ts
var typography = {
  fontFamily: {
    sans: `"Inter", sans-serif`,
    mono: `"JetBrains Mono", monospace`
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  },
  fontSize: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "30px",
    "4xl": "36px"
  }
};

// src/tokens/breakpoints.ts
var breakpoints = {
  xs: "480px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px"
};

// src/tokens/sizes.ts
var sizes = {
  xs: "320px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
  full: "100%",
  screen: "100vw"
};

// src/tokens/zIndex.ts
var zIndex = {
  hide: -1,
  auto: "auto",
  base: 0,
  dropdown: 1e3,
  sticky: 1100,
  fixed: 1200,
  drawer: 1300,
  modal: 1400,
  popover: 1500,
  tooltip: 1600,
  toast: 1700
};

// src/tokens/opacity.ts
var opacity = {
  0: 0,
  5: 0.05,
  10: 0.1,
  20: 0.2,
  30: 0.3,
  40: 0.4,
  50: 0.5,
  60: 0.6,
  70: 0.7,
  80: 0.8,
  90: 0.9,
  100: 1
};

// src/tokens/durations.ts
var durations = {
  fastest: "75ms",
  faster: "100ms",
  fast: "150ms",
  normal: "250ms",
  slow: "350ms",
  slower: "500ms",
  slowest: "700ms"
};

// src/tokens/easings.ts
var easings = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out"
};

// src/tokens/transitions.ts
var transitions = {
  default: `all ${durations.normal} ${easings.easeInOut}`,
  fast: `all ${durations.fast} ${easings.easeOut}`,
  slow: `all ${durations.slow} ${easings.easeInOut}`
};

// src/theme/theme.ts
var theme = {
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
  transitions
};
export {
  Center,
  breakpoints,
  colors,
  durations,
  easings,
  opacity,
  radius,
  shadows,
  sizes,
  spacing,
  theme,
  transitions,
  typography,
  zIndex
};
//# sourceMappingURL=index.js.map