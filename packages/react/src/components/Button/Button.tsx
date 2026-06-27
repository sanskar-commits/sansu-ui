import { ButtonProps } from "./Button.types";
import "./Button.css";

export function Button({
  children,
  variant = "solid",
  size = "md",
  loading = false,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`sansu-btn sansu-btn-${variant} sansu-btn-${size}`}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? (
        "Loading..."
      ) : (
        <>
          {leftIcon}
          {children}
          {rightIcon}
        </>
      )}
    </button>
  );
}