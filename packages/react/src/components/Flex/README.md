# Flex

> A flexible layout component for building one-dimensional layouts using CSS Flexbox.

The `Flex` component is built on top of CSS Flexbox and provides an intuitive API for creating responsive horizontal and vertical layouts. It is one of the core layout primitives in **Sansu UI**.

---

## Features

- 🚀 Built on native CSS Flexbox
- 🎯 Fully typed with TypeScript
- ♿ Accessibility friendly
- 🎨 Easy alignment and spacing
- 📦 Lightweight
- 🌳 Tree-shakeable
- ⚡ Zero runtime dependencies

---

## Import

```tsx
import { Flex } from "@sansu-ui/react";
```

---

# Basic Usage

```tsx
import { Flex } from "@sansu-ui/react";

function Example() {
  return (
    <Flex>
      <div>Item 1</div>
      <div>Item 2</div>
    </Flex>
  );
}
```

---

# Direction

Arrange children horizontally or vertically.

```tsx
<Flex direction="column">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</Flex>
```

Available values:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

Default:

```tsx
direction="row"
```

---

# Justify Content

Control horizontal alignment.

```tsx
<Flex justify="space-between">
  <Button>Save</Button>
  <Button>Cancel</Button>
</Flex>
```

Supported values:

| Value |
|--------|
| flex-start |
| center |
| flex-end |
| space-between |
| space-around |
| space-evenly |

---

# Align Items

Control vertical alignment.

```tsx
<Flex align="center">
  <Avatar />
  <Text>Sansu UI</Text>
</Flex>
```

Supported values:

| Value |
|--------|
| stretch |
| flex-start |
| center |
| flex-end |
| baseline |

---

# Gap

Create spacing between children.

```tsx
<Flex gap={20}>
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</Flex>
```

Supports:

- number
- string

Examples

```tsx
gap={16}

gap="2rem"

gap="10%"
```

---

# Wrap

Allow items to wrap.

```tsx
<Flex wrap="wrap">
```

Available values

- nowrap
- wrap
- wrap-reverse

---

# Inline Flex

Render an inline flex container.

```tsx
<Flex inline>
```

Internally

```css
display:inline-flex;
```

---

# Combining Props

```tsx
<Flex
  direction="column"
  justify="center"
  align="center"
  gap={24}
>
  <Avatar />
  <Text>Sansu UI</Text>
  <Button>Continue</Button>
</Flex>
```

---

# API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| direction | FlexDirection | row | Flex direction |
| justify | JustifyContent | flex-start | Horizontal alignment |
| align | AlignItems | stretch | Vertical alignment |
| wrap | FlexWrap | nowrap | Wrap items |
| gap | number \| string | 0 | Space between children |
| inline | boolean | false | Uses inline-flex |
| className | string | - | Additional CSS classes |
| style | CSSProperties | - | Inline styles |
| children | ReactNode | - | Child elements |

---

# Accessibility

The `Flex` component does not introduce additional accessibility behavior.

It renders a standard HTML `<div>` using CSS Flexbox.

When semantic HTML is required, combine `Flex` with the `Box` component or use the appropriate HTML element.

Example:

```tsx
<Box as="nav">
  <Flex>
    ...
  </Flex>
</Box>
```

---

# Best Practices

✅ Use `gap` instead of margins between children.

✅ Prefer `justify` and `align` instead of custom CSS whenever possible.

✅ Use `wrap="wrap"` for responsive layouts.

---

# Performance

- No JavaScript layout calculations
- Uses native CSS Flexbox
- No external dependencies
- Tree-shakeable

---

# Browser Support

- Chrome
- Firefox
- Safari
- Edge

---

# Roadmap

Future improvements include:

- Responsive props

```tsx
<Flex
  direction={{
    base: "column",
    md: "row",
  }}
>
```

- Theme spacing tokens

```tsx
gap="lg"
```

- Design tokens

```tsx
justify="between"
```

- CSS Variables

- Animation support

---

# Related Components

- Box
- Stack
- HStack
- VStack
- Grid
- Container
- Center
- Spacer

---

# Changelog

## v0.1.0

- Initial Flex component
- Direction support
- Alignment support
- Gap support
- Wrap support
- Inline Flex support