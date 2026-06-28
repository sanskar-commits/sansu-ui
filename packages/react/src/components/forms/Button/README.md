# Button

The `Button` component is the primary interactive element used to trigger actions.

## Import

```tsx
import { Button } from "@sansu-ui/react";
```

---

## Basic Usage

```tsx
<Button>Click Me</Button>
```

---

## Variants

```tsx
<Button variant="solid">Solid</Button>

<Button variant="outline">Outline</Button>

<Button variant="ghost">Ghost</Button>
```

---

## Sizes

```tsx
<Button size="sm">Small</Button>

<Button size="md">Medium</Button>

<Button size="lg">Large</Button>
```

---

## Loading State

```tsx
<Button loading>
Saving...
</Button>
```

---

## Icons

```tsx
<Button leftIcon={<Icon />}>
Dashboard
</Button>

<Button rightIcon={<ArrowRight />}>
Continue
</Button>
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `"solid" \| "outline" \| "ghost"` | `"solid"` | Button style |
| size | `"sm" \| "md" \| "lg"` | `"md"` | Button size |
| loading | `boolean` | `false` | Loading state |
| leftIcon | `ReactNode` | - | Icon before text |
| rightIcon | `ReactNode` | - | Icon after text |
| disabled | `boolean` | `false` | Disable button |

---

## Accessibility

- Supports keyboard navigation
- Supports screen readers
- Uses native `<button>`
- Proper disabled behavior

---

## Future Improvements

- Ripple animation
- Icon only mode
- Loading spinner
- Full width
- Color schemes
- Rounded variants