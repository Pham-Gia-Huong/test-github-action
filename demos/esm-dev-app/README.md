# ESModule Demo Project
This is the demo for running ui-component's ESModule.

## Getting Started
1. set up `@kintone/ui-component` package
```bash
$ npm run build:esm
$ npm link
```
At the root directory, run `npm run build:esm` and `npm link`

2. set up this demo project
```bash
$ npm install
$ npm link @kintone/ui-component
```
> Note: Please run `npm link` after running `npm install`

3. write code

**Example code**
```javascript
import { Text } from "@kintone/ui-component";

const text = new Text();
```

4. build
```bash
$ npm run build
```
