# Contributing to Sansu UI

First of all, thank you for your interest in contributing to **Sansu UI**! 🎉

Whether you're fixing a bug, improving documentation, adding a new component, or suggesting an idea, your contribution is appreciated.

This guide will help you get started with contributing to the project.

---

# Table of Contents

* Getting Started
* Development Setup
* Project Structure
* Branch Naming
* Commit Message Convention
* Pull Requests
* Coding Standards
* Adding Components
* Reporting Bugs
* Suggesting Features
* Community Guidelines

---

# Getting Started

1. Fork the repository.

2. Clone your fork.

```bash
git clone https://github.com/YOUR_USERNAME/sansu-ui.git
```

3. Navigate to the project.

```bash
cd sansu-ui
```

4. Install dependencies.

```bash
pnpm install
```

---

# Development Setup

Run the playground.

```bash
pnpm dev
```

Build the React package.

```bash
pnpm --filter @sansu-ui/react build
```

Run TypeScript checks.

```bash
pnpm --filter @sansu-ui/react typecheck
```

Run linting.

```bash
pnpm --filter @sansu-ui/react lint
```

---

# Project Structure

```text
sansu-ui
│
├── apps
│   ├── docs
│   └── playground
│
├── packages
│   └── react
│       ├── src
│       │   ├── components
│       │   ├── tokens
│       │   ├── theme
│       │   ├── hooks
│       │   ├── utils
│       │   └── index.ts
│       └── package.json
│
├── .github
├── README.md
└── CONTRIBUTING.md
```

---

# Branch Naming

Please use descriptive branch names.

Examples:

```text
feature/button-loading
feature/grid-component
feature/theme-provider

fix/button-disabled-state
fix/container-padding

docs/readme-update
docs/button-documentation

refactor/flex-component
```

---

# Commit Message Convention

This project follows the Conventional Commits specification.

Examples:

```text
feat(button): add loading state

feat(grid): add responsive grid

fix(stack): correct spacing calculation

docs(readme): improve installation guide

refactor(tokens): simplify spacing tokens

test(button): add accessibility tests

chore(deps): update dependencies
```

---

# Pull Requests

Before opening a Pull Request, please ensure:

* The project builds successfully.
* TypeScript passes without errors.
* Linting passes.
* New components include documentation.
* New components include playground demos.
* README files are updated where necessary.

Please provide:

* A clear description.
* Screenshots or GIFs for UI changes.
* Any breaking changes.
* Related issue number (if applicable).

---

# Coding Standards

## General

* Use TypeScript.
* Prefer functional components.
* Keep components small and composable.
* Avoid unnecessary dependencies.
* Write readable and maintainable code.

---

## Component Guidelines

Every new component should include:

```text
Component.tsx
Component.types.ts
Component.css
index.ts
README.md
```

Each component should also include:

* Accessibility support
* TypeScript types
* Design token usage
* Playground demo
* Documentation

---

## Design Tokens

Avoid hardcoded values whenever possible.

Preferred:

```tsx
padding: spacing[4]

color: colors.primary[500]
```

Avoid:

```tsx
padding: "16px"

color: "#2563eb"
```

---

# Testing Components

Before submitting a PR:

* Verify the component in the Playground.
* Test different prop combinations.
* Check keyboard accessibility where applicable.
* Ensure TypeScript types are correct.

---

# Adding a New Component

When adding a new component:

1. Create the component folder.

2. Add:

* Component.tsx
* Component.types.ts
* Component.css
* README.md
* index.ts

3. Export it from the package.

4. Add a playground demo.

5. Update documentation.

6. Ensure the project builds successfully.

---

# Reporting Bugs

When reporting a bug, please include:

* Operating System
* Browser
* React Version
* Package Version
* Steps to Reproduce
* Expected Behavior
* Actual Behavior
* Screenshots (if applicable)

---

# Feature Requests

Feature requests are welcome.

Please include:

* The problem you're trying to solve.
* Your proposed solution.
* Alternative approaches you've considered.
* Example code or mockups if possible.

---

# Accessibility

Accessibility is a core goal of Sansu UI.

Please consider:

* Keyboard navigation
* Screen reader compatibility
* Semantic HTML
* Focus management
* ARIA attributes where appropriate

---

# Documentation

Good documentation is just as valuable as good code.

Contributors are encouraged to improve:

* README files
* Component documentation
* Examples
* API references
* Tutorials

---

# Community

Please read and follow our:

* CODE_OF_CONDUCT.md

We are committed to creating a welcoming and inclusive community.

---

# Questions?

If you have any questions:

* Open a GitHub Discussion
* Open an Issue
* Reach out through GitHub

---

# Thank You ❤️

Every contribution—whether it's code, documentation, bug reports, or ideas—helps make Sansu UI better.

Thank you for being part of the Sansu UI community!
