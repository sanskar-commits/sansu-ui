# Divider

A visual separator used to divide content into logical sections.

---

## Import

```tsx
import { Divider } from "@sansu-ui/react";
```

---

## Basic Usage

```tsx
<Divider />
```

---

## Vertical Divider

```tsx
<Flex align="center">
  <Button>Left</Button>

  <Divider orientation="vertical" />

  <Button>Right</Button>
</Flex>
```

---

## Props

| Prop | Type | Default |
|------|------|---------|
| orientation | horizontal \| vertical | horizontal |
| thickness | number \| string | 1 |
| color | string | gray |
| margin | number \| string | 16 |

---

## Accessibility

Uses the native `<hr>` element and sets:

- `role="separator"`
- `aria-orientation`

---

## Changelog

### v0.2.0

Initial release.