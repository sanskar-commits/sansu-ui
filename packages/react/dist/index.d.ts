import * as react from 'react';
import { HTMLAttributes, CSSProperties, ReactNode, ElementType, ComponentPropsWithoutRef, ComponentPropsWithRef } from 'react';

interface CenterProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Render as inline-flex instead of flex.
     *
     * @default false
     */
    inline?: boolean;
}

declare const Center: react.ForwardRefExoticComponent<CenterProps & react.RefAttributes<HTMLDivElement>>;

declare const theme: {
    readonly colors: {
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
    readonly spacing: {
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
    readonly radius: {
        readonly none: "0px";
        readonly xs: "2px";
        readonly sm: "4px";
        readonly md: "8px";
        readonly lg: "12px";
        readonly xl: "16px";
        readonly "2xl": "24px";
        readonly full: "9999px";
    };
    readonly shadows: {
        readonly none: "none";
        readonly sm: "0 1px 2px rgba(0,0,0,.08)";
        readonly md: "0 4px 8px rgba(0,0,0,.12)";
        readonly lg: "0 8px 20px rgba(0,0,0,.15)";
        readonly xl: "0 20px 40px rgba(0,0,0,.18)";
    };
    readonly typography: {
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
    readonly breakpoints: {
        readonly xs: "480px";
        readonly sm: "640px";
        readonly md: "768px";
        readonly lg: "1024px";
        readonly xl: "1280px";
        readonly "2xl": "1536px";
    };
    readonly sizes: {
        readonly xs: "320px";
        readonly sm: "640px";
        readonly md: "768px";
        readonly lg: "1024px";
        readonly xl: "1280px";
        readonly "2xl": "1536px";
        readonly full: "100%";
        readonly screen: "100vw";
    };
    readonly opacity: {
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
    readonly zIndex: {
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
    readonly durations: {
        readonly fastest: "75ms";
        readonly faster: "100ms";
        readonly fast: "150ms";
        readonly normal: "250ms";
        readonly slow: "350ms";
        readonly slower: "500ms";
        readonly slowest: "700ms";
    };
    readonly easings: {
        readonly linear: "linear";
        readonly ease: "ease";
        readonly easeIn: "ease-in";
        readonly easeOut: "ease-out";
        readonly easeInOut: "ease-in-out";
    };
    readonly transitions: {
        readonly default: "all 250ms ease-in-out";
        readonly fast: "all 150ms ease-out";
        readonly slow: "all 350ms ease-in-out";
    };
};
type Theme = typeof theme;

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

type SpacingValue = number | string;
type SizeValue = number | string;
type RadiusValue = number | string;
type ShadowValue = string;
type ColorValue = string;
interface SansuProps {
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
type HTMLSansuProps<T extends HTMLElement> = HTMLAttributes<T> & SansuProps;

/**
 * The `as` prop.
 */
type AsProp<C extends ElementType> = {
    as?: C;
};
/**
 * Props inherited from another element.
 */
type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P);
/**
 * Polymorphic component props.
 */
type PolymorphicComponentProps<C extends ElementType, Props = {}> = Props & AsProp<C> & Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;
/**
 * Polymorphic ref.
 */
type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>["ref"];

export { type AsProp, Center, type CenterProps, type ColorValue, type HTMLSansuProps, type PolymorphicComponentProps, type PolymorphicRef, type PropsToOmit, type RadiusValue, type SansuProps, type ShadowValue, type SizeValue, type SpacingValue, type Theme, breakpoints, colors, durations, easings, opacity, radius, shadows, sizes, spacing, theme, transitions, typography, zIndex };
