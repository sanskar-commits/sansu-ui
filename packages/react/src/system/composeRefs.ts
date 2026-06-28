import type { MutableRefObject, Ref } from "react";

/**
 * Assigns a value to a React ref.
 */
function assignRef<T>(
  ref: Ref<T> | undefined,
  value: T
) {
  if (ref == null) return;

  if (typeof ref === "function") {
    ref(value);
    return;
  }

  (
    ref as MutableRefObject<T>
  ).current = value;
}

/**
 * Combines multiple refs into a single ref callback.
 *
 * Example:
 *
 * const mergedRef = composeRefs(
 *   internalRef,
 *   forwardedRef
 * );
 */
export function composeRefs<T>(
  ...refs: (Ref<T> | undefined)[]
) {
  return (node: T) => {
    refs.forEach((ref) =>
      assignRef(ref, node)
    );
  };
}