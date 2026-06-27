# Theme

The Theme object combines every Sansu UI design token into a single export.

## Import

```ts
import { theme } from "@sansu-ui/react";
```

## Example

```ts
theme.colors.primary[500];

theme.spacing[4];

theme.radius.md;

theme.breakpoints.lg;

theme.sizes.xl;
```

The `theme` object is the foundation for future features such as:

- Dark Mode
- Custom Themes
- Theme Provider
- Runtime Theme Switching