# Center

Center aligns its children horizontally and vertically using Flexbox.

---

## Import

```tsx
import { Center } from "@sansu-ui/react";
```

---

## Basic Usage

```tsx
<Center>
  <Button>Centered Button</Button>
</Center>
```

---

## Fixed Height

```tsx
<Center height={300}>
  <Spinner />
</Center>
```

---

## Props

| Prop | Type | Default |
|------|------|---------|
| width | string \| number | "100%" |
| height | string \| number | "auto" |
| inline | boolean | false |

---

## Accessibility

Uses a semantic `<div>`.

---

## Version

v0.2.0