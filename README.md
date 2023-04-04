# TW Component Library

[NPM Package](https://www.npmjs.com/package/@weaverwhale/tw-components)

This is a component library for the TripleWhale app. It is built using [Mantine](https://mantine.dev/).

By default, we export the Mantine `core`, `hooks`, and `carousel` packages.

We then add our own components/modifications to the library where needed.

## Installation

```bash
npm install @weaverwhale/tw-components
```

## Usage

```tsx
import { Button } from "@weaverwhale/tw-components";

export default function NewButton() {
  return (
    <Button radius="md" style={{ flex: 1 }}>
      New Button
    </Button>
  );
}
```
