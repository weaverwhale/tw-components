# TW Component Library

[NPM Package](https://www.npmjs.com/package/@weaverwhale/tw-components)

This is a component library for the TripleWhale app. It is built using [Mantine](https://mantine.dev/).

By default, we export the Mantine `core`, `hooks`, and `carousel` packages.

We then add our own components/modifications to the library where needed.

## Installation Into Your Project

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

## Local Development

To locally link this library in your project, run the following commands:

```bash
# In this project
npm link && npm run dev
# In your project
npm link @weaverwhale/tw-components && npm run dev
```

This project leverages the `tsc` compiler (similar to other `@tw` package), and is fully compatible with [Vite](https://vitejs.dev/) and it's Hot Module Reloading feature.

Meaning, you can make changes to this library and see them reflected in your project without having to restart the dev server or reload your browser - your changes here will be directly injected into your browser.

Any other `ESM/esbuild`-based bundlers should work as well (e.g. Webpack, Parcel, etc.), but they have not been tested.
