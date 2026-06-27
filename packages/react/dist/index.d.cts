import * as react from 'react';
import { ReactNode, CSSProperties, ElementType, ComponentPropsWithoutRef, ButtonHTMLAttributes, HTMLAttributes } from 'react';

declare const colors: {
    readonly transparent: "transparent";
    readonly white: "#ffffff";
    readonly black: "#000000";
    readonly primary: {
        readonly 50: "#eff6ff";
        readonly 100: "#dbeafe";
        readonly 200: "#bfdbfe";
        readonly 300: "#93c5fd";
        readonly 400: "#60a5fa";
        readonly 500: "#3b82f6";
        readonly 600: "#2563eb";
        readonly 700: "#1d4ed8";
        readonly 800: "#1e40af";
        readonly 900: "#1e3a8a";
    };
    readonly gray: {
        readonly 50: "#f9fafb";
        readonly 100: "#f3f4f6";
        readonly 200: "#e5e7eb";
        readonly 300: "#d1d5db";
        readonly 400: "#9ca3af";
        readonly 500: "#6b7280";
        readonly 600: "#4b5563";
        readonly 700: "#374151";
        readonly 800: "#1f2937";
        readonly 900: "#111827";
    };
    readonly success: "#22c55e";
    readonly warning: "#f59e0b";
    readonly danger: "#ef4444";
    readonly info: "#06b6d4";
};

declare const spacing: {
    readonly 0: "0px";
    readonly 1: "4px";
    readonly 2: "8px";
    readonly 3: "12px";
    readonly 4: "16px";
    readonly 5: "20px";
    readonly 6: "24px";
    readonly 7: "28px";
    readonly 8: "32px";
    readonly 9: "36px";
    readonly 10: "40px";
    readonly 12: "48px";
    readonly 14: "56px";
    readonly 16: "64px";
    readonly 20: "80px";
    readonly 24: "96px";
    readonly 32: "128px";
};

declare const radius: {
    readonly none: "0px";
    readonly xs: "2px";
    readonly sm: "4px";
    readonly md: "8px";
    readonly lg: "12px";
    readonly xl: "16px";
    readonly "2xl": "24px";
    readonly full: "9999px";
};

declare const shadows: {
    readonly none: "none";
    readonly sm: "0 1px 2px rgba(0,0,0,.08)";
    readonly md: "0 4px 8px rgba(0,0,0,.12)";
    readonly lg: "0 8px 20px rgba(0,0,0,.15)";
    readonly xl: "0 20px 40px rgba(0,0,0,.18)";
};

declare const typography: {
    readonly fontFamily: {
        readonly sans: "\"Inter\", sans-serif";
        readonly mono: "\"JetBrains Mono\", monospace";
    };
    readonly fontWeight: {
        readonly regular: 400;
        readonly medium: 500;
        readonly semibold: 600;
        readonly bold: 700;
    };
    readonly fontSize: {
        readonly xs: "12px";
        readonly sm: "14px";
        readonly md: "16px";
        readonly lg: "18px";
        readonly xl: "20px";
        readonly "2xl": "24px";
        readonly "3xl": "30px";
        readonly "4xl": "36px";
    };
};

declare const breakpoints: {
    readonly xs: "480px";
    readonly sm: "640px";
    readonly md: "768px";
    readonly lg: "1024px";
    readonly xl: "1280px";
    readonly "2xl": "1536px";
};

declare const sizes: {
    readonly xs: "320px";
    readonly sm: "640px";
    readonly md: "768px";
    readonly lg: "1024px";
    readonly xl: "1280px";
    readonly "2xl": "1536px";
    readonly full: "100%";
    readonly screen: "100vw";
};

declare const zIndex: {
    readonly hide: -1;
    readonly auto: "auto";
    readonly base: 0;
    readonly dropdown: 1000;
    readonly sticky: 1100;
    readonly fixed: 1200;
    readonly drawer: 1300;
    readonly modal: 1400;
    readonly popover: 1500;
    readonly tooltip: 1600;
    readonly toast: 1700;
};

declare const opacity: {
    readonly 0: 0;
    readonly 5: 0.05;
    readonly 10: 0.1;
    readonly 20: 0.2;
    readonly 30: 0.3;
    readonly 40: 0.4;
    readonly 50: 0.5;
    readonly 60: 0.6;
    readonly 70: 0.7;
    readonly 80: 0.8;
    readonly 90: 0.9;
    readonly 100: 1;
};

declare const durations: {
    readonly fastest: "75ms";
    readonly faster: "100ms";
    readonly fast: "150ms";
    readonly normal: "250ms";
    readonly slow: "350ms";
    readonly slower: "500ms";
    readonly slowest: "700ms";
};

declare const easings: {
    readonly linear: "linear";
    readonly ease: "ease";
    readonly easeIn: "ease-in";
    readonly easeOut: "ease-out";
    readonly easeInOut: "ease-in-out";
};

declare const transitions: {
    readonly default: "all 250ms ease-in-out";
    readonly fast: "all 150ms ease-out";
    readonly slow: "all 350ms ease-in-out";
};

/**
 * Common props shared by most Sansu UI components.
 */
interface BaseProps {
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

type AsProp<C extends ElementType> = {
    as?: C;
};
type PolymorphicProps<C extends ElementType, Props = {}> = Props & AsProp<C> & Omit<ComponentPropsWithoutRef<C>, keyof Props | "as">;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "solid" | "outline" | "ghost" | "soft";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    loading?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
}

declare function Button({ children, variant, size, loading, leftIcon, rightIcon, ...props }: ButtonProps): react.JSX.Element;

interface BoxProps {
    as?: ElementType;
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
}

declare const Box: react.ForwardRefExoticComponent<BoxProps & react.RefAttributes<HTMLElement>>;

type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";
type JustifyContent = "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly";
type AlignItems = "stretch" | "flex-start" | "center" | "flex-end" | "baseline";
interface FlexProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    direction?: FlexDirection;
    wrap?: FlexWrap;
    justify?: JustifyContent;
    align?: AlignItems;
    gap?: number | string;
    inline?: boolean;
    style?: CSSProperties;
}

declare function Flex({ children, direction, wrap, justify, align, gap, inline, style, className, ...props }: FlexProps): react.JSX.Element;

interface StackProps {
    children?: ReactNode;
    spacing?: number | string;
    align?: AlignItems;
    justify?: JustifyContent;
    wrap?: FlexWrap;
    className?: string;
    style?: CSSProperties;
}

declare function Stack({ children, spacing, align, justify, wrap, className, style, }: StackProps): react.JSX.Element;

interface SpacerProps extends HTMLAttributes<HTMLDivElement> {
}

declare function Spacer({ style, ...props }: SpacerProps): react.JSX.Element;

type DividerOrientation = "horizontal" | "vertical";
interface DividerProps extends HTMLAttributes<HTMLHRElement> {
    orientation?: DividerOrientation;
    thickness?: number | string;
    color?: string;
    margin?: number | string;
    style?: CSSProperties;
}

declare function Divider({ orientation, thickness, color, margin, style, ...props }: DividerProps): react.JSX.Element;

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
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

declare function Container({ children, className, style, maxWidth, fluid, padding, ...props }: ContainerProps): react.JSX.Element;

export { type AlignItems, type AsProp, type BaseProps, Box, type BoxProps, Button, type ButtonProps, Container, type ContainerProps, Divider, type DividerOrientation, type DividerProps, Flex, type FlexDirection, type FlexProps, type FlexWrap, type JustifyContent, type PolymorphicProps, Spacer, type SpacerProps, Stack, type StackProps, breakpoints, colors, durations, easings, opacity, radius, shadows, sizes, spacing, transitions, typography, zIndex };
