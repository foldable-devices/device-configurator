# Foldable Device Configurator

Foldable Device Configurator is a little Web Components which you can drop in your application to test
the CSS Spanning Polyfill located [here](https://github.com/zouhir/spanning-css-polyfill)

This demo is being developed by :


<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Intel-logo.svg/200px-Intel-logo.svg.png" alt="Intel" style="width:50px;"/>

## Demo

Go to https://darktears.github.io/foldable-device-configurator/demo/index.html ([source](https://github.com/darktears/foldable-device-configurator/tree/master/demo))

### See in action :

Foldable Device Configurator :

<img src="images/foldable-device-configurator.gif" alt="Demo of the configurator" style="width:400px;"/>

Web Based Emulator :

<img src="images/web-emulator.gif" alt="Demo of the emulator" style="width:400px;"/>

On an actual device (Asus ZenBook Pro Duo) :

<video src="images/zenbook.mp4" autoplay loop title="Zenbook Demo" width="400"></video>


## Browser support

This web component will let you emulate various foldable configurations and will set the foldable polyfills accordingly. Currently there are two polyfills you can use to design or adapt web contents for foldable devices :
- A JavaScript API called Window Segments located [here](https://github.com/zouhir/windowsegments-polyfill)
- CSS Properties called Spanning located [here](https://github.com/zouhir/spanning-css-polyfill)

Both are proposals from Microsoft.

:warning: The two aforementioned APIs are early work in progress and are subject to change anytime.

## Development

This project makes use of ECMAScript Modules (ESM) and runs them directly in the browser using [Snowpack](snowpack.dev). If you install new dependencies using `npm` like `npm install --save @material/mwc-button`, then please run `npx snowpack` afterwards to generate the new modules in `web_modules` folder. Also, the `web_modules` folder should be committed.

To install app dependencies and but any further steps, run

```sh
$ npm install
```

ESM compatible modules can be found using [pika.dev](pika.de). Material design web components can be found by searching for `@material/mwc-`. You can try out the demo page here: [Material Web Components demo](https://mwc-demos.glitch.me/)

Then run

```sh
$ npx snowpack --optimize
```

To test in the browser, run

```sh
$ npm run start
```

To build, run

```sh
$ npm run build
```
