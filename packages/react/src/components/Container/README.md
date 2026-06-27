# Container

Container centers content horizontally and limits its maximum width.

---

## Import

```tsx
import { Container } from "@sansu-ui/react";
```

---

## Usage

```tsx
<Container>
  Content
</Container>
```

---

## Fluid Container

```tsx
<Container fluid>
  Full width content
</Container>
```

---

## Custom Width

```tsx
<Container maxWidth={960}>
  Content
</Container>
```

---

## Props

| Prop | Type | Default |
|------|------|---------|
| maxWidth | string \| number | 1200px |
| fluid | boolean | false |
| padding | string \| number | spacing[6] |

---

## Accessibility

Uses a semantic `<div>`.

---

## Version

v0.2.0