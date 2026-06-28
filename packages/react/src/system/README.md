# cx()

Compose class names.

## Example

```tsx
cx(
    "button",
    isActive && "button--active",
    className
)


---

# Usage Example

Later, Center becomes

```tsx
import { cx } from "../../system";

<div
    className={cx(
        "sansu-center",
        inline && "sansu-center--inline",
        className
    )}
/>

# Sansu System

Internal utilities used by every Sansu UI component.

## Utilities

- cx()
- composeRefs()
- polymorphicComponent()

These utilities are **internal** and are not intended for public use.