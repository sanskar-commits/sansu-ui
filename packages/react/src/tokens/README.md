# Design Tokens

Design Tokens are the visual foundation of Sansu UI.

They ensure that every component follows the same design language.

---

## Available Tokens

- Colors
- Spacing
- Radius
- Shadows
- Typography
- Breakpoints

---

## Example

```ts
import { colors, spacing } from "@sansu-ui/react";

const style = {
  background: colors.primary[600],
  padding: spacing[4],
};
```

---

## Philosophy

Never hardcode design values inside components.

❌ Bad

```ts
background: "#2563eb";
padding: "16px";
```

✅ Good

```ts
background: colors.primary[600];
padding: spacing[4];
```

This makes the entire design system consistent and easy to maintain.

---

# Additional Tokens

## Sizes

```ts
sizes.sm
sizes.md
sizes.lg
```

Used by:

- Container
- Modal
- Drawer
- Avatar

---

## zIndex

```ts
zIndex.modal
```

Used by:

- Modal
- Drawer
- Tooltip
- Popover

---

## Transitions

```ts
transitions.default
```

Used by:

- Button
- Card
- Menu
- Hover states

---

## Opacity

```ts
opacity[50]
```

Used by:

- Disabled state
- Skeleton
- Overlay