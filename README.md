<div align="center">

# 🚀 Sansu UI

### Modern React UI Component Library

**Beautiful • Fast • Accessible • TypeScript First**

Build modern React applications faster with reusable, fully typed UI components.

[![npm version](https://img.shields.io/npm/v/@sansu-ui/react.svg)](https://www.npmjs.com/package/@sansu-ui/react)
[![npm downloads](https://img.shields.io/npm/dm/@sansu-ui/react.svg)](https://www.npmjs.com/package/@sansu-ui/react)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/sanskar-commits/sansu-ui?style=social)](https://github.com/sanskar-commits/sansu-ui)

</div>

---

# ✨ Overview

Sansu UI is a modern React component library built with **React 19**, **TypeScript**, and a scalable **Design System** architecture.

The goal of Sansu UI is to provide elegant, accessible, and composable components that are simple to use while remaining highly customizable.

---

# ✨ Features

* ⚛️ React 19 Ready
* 🟦 TypeScript First
* 📦 Tree Shakeable
* 🎨 Design Tokens
* ♿ Accessibility Focused
* 🚀 Lightweight
* 📱 Responsive
* 🧩 Composable Components
* 🎯 Developer Friendly APIs
* 🌙 Theme Ready (Upcoming)

---

# 📦 Installation

## npm

```bash
npm install @sansu-ui/react
```

## pnpm

```bash
pnpm add @sansu-ui/react
```

## yarn

```bash
yarn add @sansu-ui/react
```

---

# Peer Dependencies

```bash
npm install react react-dom
```

Recommended versions:

* React 19+
* React DOM 19+

---

# 🚀 Quick Start

```tsx
import { Button } from "@sansu-ui/react";

export default function App() {
  return (
    <Button>
      Hello Sansu UI 🚀
    </Button>
  );
}
```

---

# 📚 Available Components

## Layout

| Component | Status |
| --------- | :----: |
| Box       |    ✅   |
| Flex      |    ✅   |
| Stack     |    ✅   |
| Spacer    |    ✅   |
| Divider   |    ✅   |
| Container |    ✅   |

---

## Forms

| Component | Status |
| --------- | :----: |
| Button    |    ✅   |

---

# 🎨 Design Tokens

Sansu UI includes reusable design tokens.

* Colors
* Spacing
* Radius
* Typography
* Shadows
* Breakpoints
* Sizes
* Opacity
* Z-Index
* Durations
* Easings
* Transitions

Example:

```tsx
import { colors, spacing } from "@sansu-ui/react";

<Box
  style={{
    background: colors.primary[500],
    padding: spacing[6],
  }}
/>
```

---

# 💻 Example

```tsx
import {
  Box,
  Stack,
  Flex,
  Button,
} from "@sansu-ui/react";

export default function Example() {
  return (
    <Box style={{ padding: 32 }}>
      <Stack gap={24}>
        <h1>Welcome to Sansu UI</h1>

        <Flex gap={16}>
          <Button>Primary</Button>

          <Button variant="outline">
            Secondary
          </Button>
        </Flex>
      </Stack>
    </Box>
  );
}
```

---

# 🎯 Design Principles

Sansu UI is built around a few core principles.

* Developer First
* Accessibility by Default
* Beautiful APIs
* Fully Typed Components
* Performance Focused
* Minimal Dependencies
* Composable Architecture
* Consistent Design Tokens

---

# 🏗️ Project Structure

```text
sansu-ui
│
├── apps
│   ├── playground
│   └── docs
│
├── packages
│   └── react
│
├── .github
│
├── turbo.json
├── pnpm-workspace.yaml
└── package.json
```

---

# 🛠️ Local Development

Clone the repository

```bash
git clone https://github.com/sanskar-commits/sansu-ui.git
```

Install dependencies

```bash
pnpm install
```

Run Playground

```bash
pnpm dev
```

Build the library

```bash
pnpm --filter @sansu-ui/react build
```

Run TypeScript

```bash
pnpm --filter @sansu-ui/react typecheck
```

---

# 🧱 Tech Stack

* React 19
* TypeScript
* Vite
* TSUP
* PNPM Workspaces
* Turborepo
* ESLint

---

# 📊 Current Progress

| Category              | Progress       |
| --------------------- | -------------- |
| Foundation            | ✅ Complete     |
| Design Tokens         | ✅ Complete     |
| Theme                 | ✅ Complete     |
| Layout Components     | 🚧 In Progress |
| Form Components       | 🚧 In Progress |
| Feedback Components   | ⏳ Planned      |
| Overlay Components    | ⏳ Planned      |
| Documentation Website | 🚧 In Progress |

---

# 🗺️ Roadmap

## v0.1.x

* ✅ Button
* ✅ Box
* ✅ Flex
* ✅ Stack
* ✅ Spacer
* ✅ Divider
* ✅ Container

---

## v0.2.x

* Center
* Grid
* GridItem
* Wrap
* WrapItem
* SimpleGrid
* AspectRatio

---

## v0.3.x

* Typography Components
* Input
* Textarea
* Select
* Checkbox
* Radio
* Switch

---

## v0.4.x

* Modal
* Drawer
* Tooltip
* Toast
* Popover
* Alert

---

## v1.0

* Stable Release
* Complete Documentation
* Theme System
* Dark Mode
* CLI
* Figma Design Kit

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature/my-component
```

3. Commit using Conventional Commits.

```bash
git commit -m "feat(button): add loading state"
```

4. Push your branch.

```bash
git push origin feature/my-component
```

5. Open a Pull Request.

---

# 💬 Support

If you discover a bug or have a feature request:

* Open a GitHub Issue
* Start a GitHub Discussion
* Submit a Pull Request

If you enjoy using Sansu UI, consider starring the repository ⭐.

---

# 📜 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Sanskar Amle**

* GitHub: https://github.com/sanskar-commits
* npm: https://www.npmjs.com/~sanskaramle

---

<div align="center">

### ⭐ If you find Sansu UI helpful, please consider starring the repository.

Made with ❤️ using React, TypeScript, and lots of coffee.

</div>
