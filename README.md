# React + typescript + tailwindcss

Simple initial project for React application using typescript, scss and tailwindcss.

Included:

- typescript
- scss
- react
- react-router-v6
- tailwindcss v3
- recoiljs
- inter font
- polyfill.io
- import shortcut (ex `import * from "@atom/component";`)
- base folder architecture

### Run on port 3000

`yarn start`

### Components

#### Typography

```typescript
import * as Text from "@atom/text";

<Text.Info noColor>Some info text</Text.Info>;
```

#### Buttons

```typescript
import { ButtonConfirm } from "@atoms/button/button-confirm";
import { Button } from "@atoms/button/button";

<Button theme="danger">Confirm</Button>
<ButtonConfirm>Confirm</ButtonConfirm>
```

#### And others

- input
- links
- modal system
- loader
- center card layout
- avatar
- alert

#### Recoil cached example

`src/features/example/state/store.ts`

#### Feature service example

`src/features/example/`

#### useGlobalEffect

`src/features/utils.ts`
