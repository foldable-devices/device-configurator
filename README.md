# Foldable Device Configurator

Foldable Device Configurator is a little Web Component which you can drop in your application to test
the CSS Viewport Segments Polyfill located [here](https://github.com/foldable-devices/viewportsegments-css-polyfill)

## How to use  the foldable configurator in your project?

```bash
$ npm install --save-dev foldable-device-configurator
```

You then need to import the ESM module into your project (which depends on how you import ES modules), here is an example :

```html
    <script type='module' src="../node_modules/foldable-device-configurator/src/foldable-device-configurator.js"></script>
```

When imported, in your HTML file just add the following lines:
```html
    <foldable-device-configurator></foldable-device-configurator>
```

## Adapting your web application to foldable/dual screen devices

This web component will let you emulate various foldable configurations and will set the foldable polyfills accordingly. Currently there are two polyfills you can use to design or adapt web contents for foldable devices :
- A JavaScript API called Viewport Segments located [here](https://github.com/foldable-devices/windowsegments-polyfill)
- CSS Properties called Viewport Segments located [here](https://github.com/foldable-devices/viewportsegments-css-polyfill)

Both are proposals from Microsoft. At this time the configurator will only set the viewportsegments media-queries.

:warning: The two aforementioned APIs are early work in progress and are subject to change anytime.

## Demo

- Go [here](https://foldable-devices.github.io/device-configurator/)

- You can also try a more advanced demo [here](https://foldable-devices.github.io/demos/photo-gallery/)

## Working on the foldable configurator component

This project makes use of ECMAScript Modules (ESM) and runs them directly in the browser using [Vite](https://vitejs.dev/). If you install new dependencies using `npm` like `npm install --save my-dependency`, then please run `npm run build` afterwards to generate the new modules in `docs` folder. Also, the `docs` folder should be committed. Make sure to update the package.json file accordingly.

To install app dependencies and but any further steps, run

```bash
$ npm install
```

Shoelace web components can be found [here](https://shoelace.style/)

```bash
$ npm run build
```

To test in the browser, run

```bash
$ npm run start
```

To build, run

```bash
$ npm run build
```

The build is then ready to publish to npm (inside the dist/ directory)

This demo is being developed by :

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Intel-logo.svg/200px-Intel-logo.svg.png" alt="Intel" style="width:35px;"/>

