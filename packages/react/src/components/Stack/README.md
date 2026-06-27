# Stack

A vertical layout component built on top of the `Flex` component.

`Stack` automatically arranges children in a vertical column with configurable spacing.

---

## Features

- 🚀 Built on top of Flex
- 📦 Lightweight
- 🎯 TypeScript Support
- ♿ Accessibility Friendly
- 🌳 Tree-shakeable

---

## Import

```tsx
import { Stack } from "@sansu-ui/react";
```

---

## Basic Usage

```tsx
<Stack>
  <Button>Save</Button>
  <Button>Cancel</Button>
</Stack>
```

---

## Spacing

```tsx
<Stack spacing={20}>
  <Button>One</Button>
  <Button>Two</Button>
</Stack>
```

---

## Alignment

```tsx
<Stack align="center">
  <Avatar />
  <Text>Sansu UI</Text>
</Stack>
```

---

## Justify

```tsx
<Stack justify="center">
  <Button />
  <Button />
</Stack>
```

---

## Wrap

```tsx
<Stack wrap="wrap">
```

---

## API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| spacing | number \| string | 0 | Space between children |
| align | AlignItems | stretch | Align items |
| justify | JustifyContent | flex-start | Justify items |
| wrap | FlexWrap | nowrap | Wrap children |
| className | string | - | Custom CSS class |
| style | CSSProperties | - | Inline styles |

---

## Accessibility

`Stack` renders a standard flex container and does not add additional accessibility behavior.

---

## Best Practices

- Use `Stack` for vertical layouts.
- Prefer `spacing` over margins.
- Use `Flex` for more advanced layouts.

---

## Related Components

- Flex
- Box
- HStack *(Coming Soon)*
- VStack *(Coming Soon)*

---

## Changelog

### v0.1.0

- Initial Stack component
- Built on top of Flex
- Spacing support
- Alignment support