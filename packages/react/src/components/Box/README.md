# Box

`Box` is the foundational layout component of Sansu UI.

Almost every component in the library is built using `Box`.

---

## Import

```tsx
import { Box } from "@sansu-ui/react";
```

---

## Basic Usage

```tsx
<Box>
Hello World
</Box>
```

---

## Render Different Elements

```tsx
<Box as="section">

</Box>

<Box as="article">

</Box>

<Box as="header">

</Box>

<Box as="footer">

</Box>
```

---

## Styling

```tsx
<Box
style={{
padding:40,
background:"#2563eb",
color:"white"
}}
>
Content
</Box>
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| as | `ElementType` | `"div"` | HTML element |
| children | `ReactNode` | - | Content |
| className | `string` | - | CSS classes |
| style | `CSSProperties` | - | Inline styles |

---

## Accessibility

Box renders semantic HTML using the `as` prop.

Use the correct element whenever possible.

Examples:

```tsx
<Box as="main">

<Box as="nav">

<Box as="section">

<Box as="header">

<Box as="footer">
```

---

## Future Improvements

- Design tokens
- Margin props
- Padding props
- Responsive props
- Theme support
- CSS variables
- Animation props