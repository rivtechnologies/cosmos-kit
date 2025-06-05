# React 19 Upgrade Notes for Cosmos Kit

## Current Status

The `@cosmos-kit/react` and `@cosmos-kit/react-lite` packages are already set up to be compatible with React 19. The peer dependencies in both packages include:

```json
"peerDependencies": {
  "react": "^18.0.0 || ^19.0.0",
  "react-dom": "^18.0.0 || ^19.0.0"
}
```

## Changes Made for React 19 Compatibility

1. Updated `@testing-library/react` to version ^14.2.0 (from ^16.2.0)
2. Added proper TypeScript typing for children props in test utilities
3. Ensured all components use proper typing to avoid React 19 TypeScript errors

## Usage with Next.js 15 and React 19

The `apps/cosmos-kit-nextjs-app-router-example` is already configured to use React 19:

```json
"dependencies": {
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "next": "15.2.3"
}
```

## Breaking Changes Avoided

The codebase does not use any of the deprecated APIs in React 19:

- No usage of `ReactDOM.render` or `ReactDOM.hydrate` (deprecated in React 18)
- No usage of string refs or `element.ref` access
- No usage of `react-test-renderer` (now deprecated in React 19)
- No usage of legacy context APIs

## Testing with React 19

When running tests with React 19, make sure to:

1. Use the latest version of `@testing-library/react` (v14+)
2. Replace any usage of `react-test-renderer` with `@testing-library/react`
3. Properly type your components, especially when using children props

## Potential Issues to Watch For

1. Third-party dependencies that might not be compatible with React 19
2. Libraries depending on React internals (avoid using `SECRET_INTERNALS` APIs)
3. UMD builds are removed in React 19, so any code relying on UMD needs to be updated

## UMD Build Usage

If you need to load React 19 with a script tag, use an ESM-based CDN:

```html
<script type="module">
  import React from "https://esm.sh/react@19/?dev"
  import ReactDOMClient from "https://esm.sh/react-dom@19/client?dev"
  // Your code here
</script>
```
