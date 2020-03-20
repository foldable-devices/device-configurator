# Foldable Device Configurator

Foldable Device Configurator is a little Web Component which you can drop in your application to test
the CSS Spanning Polyfill located [here](https://github.com/foldable-devices/spanning-css-polyfill)

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
- A JavaScript API called Window Segments located [here](https://github.com/foldable-devices/windowsegments-polyfill)
- CSS Properties called Spanning located [here](https://github.com/foldable-devices/spanning-css-polyfill)

Both are proposals from Microsoft. At this time the configurator will only set the spanning media-queries.

:warning: The two aforementioned APIs are early work in progress and are subject to change anytime.

## Demo

Go to https://foldable-devices.github.io/device-configurator/demo/ ([source](https://foldable-devices.github.io/device-configurator/demo/))

### An example in action :

Foldable Device Configurator :

<img src="https://raw.githubusercontent.com/foldable-devices/device-configurator/master/images/foldable-device-configurator.gif" alt="Demo of the configurator" style="width:400px;"/>

On an actual device (Asus ZenBook Pro Duo) :

<img src="https://raw.githubusercontent.com/foldable-devices/device-configurator/master/images/zenbook.gif" alt="Demo of the ZenBook" style="width:400px;"/>

## Working on the foldable configurator component

This project makes use of ECMAScript Modules (ESM) and runs them directly in the browser using [Snowpack](snowpack.dev). If you install new dependencies using `npm` like `npm install --save @material/mwc-button`, then please run `npx snowpack` afterwards to generate the new modules in `web_modules` folder. Also, the `web_modules` folder should be committed. Make sure to update the package.json file accordingly.

To install app dependencies and but any further steps, run

```bash
$ npm install
```

ESM compatible modules can be found using [pika.dev](pika.de). Material design web components can be found by searching for `@material/mwc-`. You can try out the demo page here: [Material Web Components demo](https://mwc-demos.glitch.me/)

Then run

```bash
$ npx snowpack --optimize
```

To test in the browser, run

```bash
$ npm run start
```

To build, run

```bash
$ npm run build
```

This demo is being developed by :

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Intel-logo.svg/200px-Intel-logo.svg.png" alt="Intel" style="width:45px;"/>

