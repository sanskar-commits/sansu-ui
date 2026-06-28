/**
 * Utility for composing class names.
 *
 * Example:
 *
 * cx(
 *   "button",
 *   isActive && "button--active",
 *   className
 * )
 *
 * Result:
 *
 * "button button--active custom-class"
 */

export type ClassValue =
  | string
  | number
  | false
  | null
  | undefined;

export function cx(
  ...classes: ClassValue[]
): string {
  return classes
    .filter(Boolean)
    .join(" ");
}