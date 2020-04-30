import { LitElement, html, css } from '../web_modules/lit-element.js';
import '../web_modules/@material/mwc-slider.js';
import { FoldablesFeature } from "../web_modules/spanning-css-polyfill.js";

export class FoldableDeviceConfigurator extends LitElement {
  static styles = css`
    :host {
      z-index: 9999;
      position: absolute;
      font-size: 12px;
      top: 2%;
      width: 5vw;
      height: auto;

      /* Surface Duo */
      --device-screen1-width: 450px;
      --device-screen2-width: 450px;
      --device-screen1-height: 600px;
      --device-screen2-height: 600px;
      --device-border: 7px;
      --device-bezel-vertical: 19px;
      --device-bezel-horizontal: 8px;
      --device-fold-width: 28px;
      --scale-factor: 0.44;
    }

    @media (min-width: 320px) and (max-width: 1024px) {
      :host {
        width: 15vw;
      }
    }

    :host(.fullscreen) {
      height: 100vh;
      width: 100vw;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    }

    :host(.configurator) {
      width: 450px;
      height: 430px;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    }

    #bubble {
      user-select: none;
      touch-action: none;
      margin: 5px;
      width: 100%;
      height: auto;
      position: absolute;
      cursor: pointer;
    }

    #main-icon:hover {
      opacity: 0.8;
    }

    #main-icon {
      width: 100%;
      height: auto;
    }

    #header {
      background-color: #f2f2f2;
      border-bottom: 1px solid #cccccc;
      height: 28px;
      cursor: move;
      display: flex;
      justify-content: center;
      align-items: center;
      user-select: none;
      touch-action: none;
    }

    #configurator {
      display: flex;
      flex-direction: column;
      background-color: white;
      overscroll-behavior: contain;
      width: 100%;
      height: 100%;
      visibility: hidden;
      border: 2px solid grey;
    }

    #content {
      display: grid;
      grid-template-columns: 100px auto;
      grid-template-rows: auto auto auto 1fr auto auto;
      align-items: center;
      justify-items: start;
      height: 95%;
    }

    #content > * {
      margin: 12px 12px 0px 12px;
    }

    mwc-slider {
      --mdc-theme-secondary: black;
      width: 80%;
      margin-left: 12px;
    }

    #seam-container {
      grid-column: span 2;
      justify-content: flex-start;
      align-items: center;
      width: calc(100% - 32px);
      display: none;
    }

    .close {
      position: absolute;
      right: 5px;
      top: 7px;
      width: 18px;
      height: 18px;
      opacity: 0.5;
      cursor: initial;
    }

    .close:hover {
      opacity: 1;
    }

    .fullscreen {
      position: absolute;
      right: 30px;
      top: 7px;
      width: 18px;
      height: 18px;
      opacity: 0.5;
      cursor: initial;
    }

    .fullscreen:hover {
      opacity: 1;
    }

    .minimize {
      position: absolute;
      right: 55px;
      top: 5px;
      width: 18px;
      height: 18px;
      opacity: 0.5;
      cursor: initial;
    }

    .minimize:hover {
      opacity: 1;
    }

    #preview-text {
      grid-column: span 2;
      font-size : 1em;
    }


    #preview-container {
      grid-column: span 2;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      height: 100%;
      width: calc(100% - 34px);
    }

    #preview {
      transform: scale(var(--scale-factor));
      transform-origin: top left;
      position: fixed;
    }

    .preview-center {
      transform-origin: top left;
      transform: scale(var(--scale-factor)) translateX(-50%);
      left: 50%;
    }

    #device {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      width: calc( var(--device-screen2-width) + var(--device-screen1-width) +
          var(--device-fold-width) + 2 * var(--device-bezel-horizontal));
      height: calc(var(--device-screen1-height) + 2 * var(--device-bezel-vertical));
      background-color: black;
      border-radius: 10px;
      border: var(--device-border) solid #b8b8b8;
    }

    .screen {
      pointer-events: none;
      background-color: black;
      border-radius: 10px;
    }

    .left {
      width: calc(var(--device-screen1-width) + 2 * var(--device-bezel-horizontal));
      height: calc(var(--device-screen1-height) + 2 * var(--device-bezel-vertical));
    }

    .right {
      width: calc(var(--device-screen2-width) + 2 * var(--device-bezel-horizontal));
      height: calc(var(--device-screen2 -height) + 2 * var(--device-bezel-vertical));
    }

    .hole {
      background-color: white;
      width: 5px;
      height: 100%;
    }

    .hinge-element {
      background-color: #b8b8b8;
      width: var(--device-fold-width);
      height: calc(var(--device-bezel-vertical) / 2);
      border-radius: 5px;
    }

    .hinge {
      width: var(--device-fold-width);
      height: calc(var(--device-screen1-height) + 2 *var(--device-bezel-vertical));
      z-index: 6;
      background-color: black;
      border: var(--device-border) solid black;
      border-top: var(--device-border) solid #b8b8b8;
      border-bottom: var(--device-border) solid #b8b8b8;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      border-radius: 10px;
    }

    .fold {
      width: calc(var(--device-fold-width) + 2 * var(--device-border));
      height: calc(var(--device-screen1-height) + 2 *var(--device-bezel-vertical));
      opacity: 0.4;
      z-index: 6;
      background-color: white;
    }

    .fold > * {
      display: none;
    }

    #frame {
      position: absolute;
      top: calc(var(--device-bezel-vertical) + var(--device-border));
      left: calc(var(--device-bezel-horizontal) + var(--device-border));
      width: calc(var(--device-screen1-width) + var(--device-screen2-width) +
        var(--device-fold-width));
      height: var(--device-screen1-height);
      z-index: 3;
      border: none;
      border-radius: 10px;
      transform-origin: top left;
    }

    .legend {
      font-size : 0.8em;
      height: 20px;
      text-align: center;
      grid-column: span 2;
    }
  `;

  _bubble;
  _configurator;
  _header;
  _device_type_select;
  _orientation_select;
  _seam_slider;
  _seam_container;
  _preview;
  _preview_container;
  _device;
  _frame;
  _device_hinge;
  _currentOrientation;
  _currentDevice;
  _isFullscreen = false;

  _spanning;
  _fold_width;
  _browser_shell_size;

  _x = 0;
  _y = 0;
  _offset_x = 0;
  _offset_y = 0;
  _resizeHandler;


  _inIframe () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
  }

  firstUpdated() {
    if (this._inIframe()) {
      this.shadowRoot.host.style.display = 'none';
      return;
    }

    const hasBrowserSupport =
      window.matchMedia('(spanning: single-fold-horizontal)').matches ||
      window.matchMedia('(spanning: single-fold-vertical)').matches ||
      window.matchMedia('(spanning: none)').matches || false;
    if (hasBrowserSupport) {
      console.info(`CSS Spanning Media Queries are supported, the configurator will hide itself.`);
      this.shadowRoot.host.style.display = 'none';
      return;
    }

    this._bubble = this.shadowRoot.querySelector('#bubble');
    this._configurator = this.shadowRoot.querySelector('#configurator');
    this._header = this.shadowRoot.querySelector('#header');
    this._device_type_select = this.shadowRoot.querySelector('#device-select');
    this._orientation_select = this.shadowRoot.querySelector('#orientation-select');
    this._seam_slider = this.shadowRoot.getElementById('seam');
    this._seam_container = this.shadowRoot.getElementById('seam-container');

    this._header.onpointerdown = this._startDragConfigurator.bind(this);
    this._bubble.onpointerdown = this._startDragBubble.bind(this);
    this._device_type_select.onchange = this._deviceTypeChanged.bind(this);
    this._orientation_select.onchange = this._orientationChanged.bind(this);
    this._seam_slider.oninput = this._seamValueUpdated.bind(this);

    this._orientation_select.disabled = true;
    this._seam_slider.disabled = true;

    this._browser_shell_size = 0;
    this.spanning = 'none';
    this.foldWidth = 0;

    this._preview = this.shadowRoot.querySelector('#preview');
    this._preview_container = this.shadowRoot.querySelector('#preview-container');
    this._device = this.shadowRoot.querySelector('#device');
    this._frame = this.shadowRoot.querySelector('#frame');
    this._device_hinge = this.shadowRoot.querySelector('#device-hinge');
    this._frame.src = window.location.href;
    this._updateFoldablesFeature();
    this._currentOrientation = 'none';
    document.addEventListener('keyup', this._handleKeyUp, false);
    console.log('Device Pixel Ratio : ' + window.devicePixelRatio);
  }

  _handleKeyUp = (event) => {
    if(event.keyCode == 73 && event.ctrlKey)
      this._showBubble();
  }

  _startDragBubble = async(event) => {
    this._startDrag(event);
    this._bubble.setPointerCapture(this._pointerId);
    this._bubble.onpointerup = this._stopDragBubble;
    this._bubble.onpointercancel = this._stopDragBubble;
    this._bubble.onpointermove = this._bubbleMove;
  }

  _startDragConfigurator = async(event) => {
    this._startDrag(event);
    this._header.setPointerCapture(this._pointerId);
    this._header.onpointerup = this._stopDragConfigurator;
    this._header.onpointercancel = this._stopDragConfigurator;
    this._header.onpointermove = this._pointerMove;
  }

  _startDrag = async (event) => {
    if (this._isFullscreen)
      return;
    this._moved = false;
    this._x = event.clientX - this._offset_x;
    this._y = event.clientY - this._offset_y;
    this._pointerId = event.pointerId;
    event.preventDefault();
  }

  _bubbleMove = async (event) => {
    this._pointerMove(event);
    this._lastBubblePosition = { x: this._offset_x, y: this._offset_y};
  }

  _pointerMove = async (event) => {
    if (event.clientY < 0 || event.clientX < 0 ||
        event.clientX > window.innerWidth || event.clientY > window.innerHeight)
      return;

    let x = event.clientX - this._x;
    let y = event.clientY - this._y;
    if (this._offset_x != x || this._offset_y != y)
      this._moved = true;
    const style = window.getComputedStyle(this.shadowRoot.host);
    const configuratorWith = parseFloat(style.width);
    const configuratorHeight = parseFloat(style.height)
    if (x < 0)
      x = 0;
    if (y < 0)
      y = 0;
    if (y + configuratorHeight >= window.innerHeight)
      y = window.innerHeight - configuratorHeight;
    if (x + configuratorWith >= window.innerWidth)
      x = window.innerWidth - configuratorWith;

    this._updateConfiguratorPosition(x, y);
    event.preventDefault();
  }

  _stopDragConfigurator = async (event) => {
    this._header.onpointerup = null;
    this._header.onpointermove = null;
    this._header.releasePointerCapture(this._pointerId);
    this._stopDrag(event);
  }

  _stopDragBubble = async (event) => {
    this._bubble.onpointerup = null;
    this._bubble.onpointermove = null;
    this._bubble.releasePointerCapture(this._pointerId);
    this._stopDrag(event);
  }

  _stopDrag = async (event) => {
    this._x = this._offset_x;
    this._y = this._offset_y;
    if (!this._moved) {
      this._showConfigurator();
    }
    this._moved = false;
  }

  _onResize = async (event) => {
    this._handleAsusSpanning();
  }

  // This is REALLY BAD, it needs to be in the polyfill (so we can support
  // not equally sized split screens). Also this is only working for the demo because
  // it messes with its variables (rather than touching the polyfill variables but
  // these are already rewritten by the time I hit this handler).
  // Hey it's all WIP and research, don't complain.
  _handleAsusSpanning() {
    console.log(window.innerHeight)
    if (window.innerHeight > 752) {
      this.spanning = 'single-fold-horizontal';
      this.foldWidth = 30;
      this._updateFoldablesFeature();
      setTimeout( () => {
        for (const sheet of document.styleSheets) {
          if (sheet.ownerNode.className === '__foldables_sheet__') {
            this._addZenbookVariables(sheet);
            break;
          }
        }
        for (const sheet of this._frame.contentDocument.styleSheets) {
          if (sheet.ownerNode.className === '__foldables_sheet__') {
            this._addZenbookVariables(sheet);
            break;
          }
        }
      }, 200)
    } else {
      this.spanning = 'none';
      this.foldWidth = 0;
      this._updateFoldablesFeature();
    }

    this._currentOrientation = this.spanning;
  }

  _addZenbookVariables(sheet) {
    sheet.insertRule('body {--zenbook-span1-height: 440px; --zenbook-span2-height: 720px;}', sheet.cssRules.length);
  }

  _seamValueUpdated = async (event) => {
    this.foldWidth = event.target.value;
    this.shadowRoot.host.style.setProperty('--device-fold-width', event.target.value + 'px');
    this._updateFoldablesFeature();
  }

  get foldWidth() {
    return this._fold_width;
  }

  set foldWidth(value) {
    this._fold_width = Math.max(0, value);
  }

  _orientationChanged(event) {
    const selectedIndex = this._orientation_select.selectedIndex;
    this.spanning = this._orientation_select[selectedIndex].value
    this._updatePreviewRotation();
    this._updateFoldablesFeature();
    this._calculateAndApplyScaleFactor();
  }

  _applyVerticalRotation() {
    this._frame.style.width = 'calc(var(--device-screen1-width) + var(--device-screen2-width)  + var(--device-fold-width))';
    this._frame.style.height = 'var(--device-screen1-height)';
    if (this._isFullscreen) {
      this._preview.style.left = '50%';
      this._preview.style.transform = 'scale(var(--scale-factor)) translateX(-50%)';
    } else {
      this._preview.style.left = '';
      this._preview.style.transform = 'scale(var(--scale-factor))';
    }
    this._frame.style.transform = '';
    this._frame.style.top = 'calc(var(--device-border) + var(--device-bezel-vertical))';
    this._frame.style.left = 'calc(var(--device-bezel-horizontal) + var(--device-border))';
  }

  _applyHorizontalRotation() {
    this._frame.style.transform = 'rotate(-90deg) translateX(-100%)';
    this._frame.style.width = 'var(--device-screen1-height)';
    this._frame.style.height = 'calc(var(--device-screen1-width) + var(--device-screen2-width) + var(--device-fold-width))';
    if (this._isFullscreen) {
      this._preview.style.left = '50%';
      this._preview.style.transform = 'scale(var(--scale-factor)) rotate(90deg) translateY(-50%)';
    } else {
      this._preview.style.left = '';
      this._preview.style.transform = 'scale(var(--scale-factor)) rotate(90deg) translateY(-100%)';
    }
  }

  _updatePreviewRotation() {
    // We're animating only if we're rotating the device.
    if (this._spanning != this._currentOrientation) {
      this._preview.style.transition = 'transform 0.7s ease-in-out';
      // Only animate the rotation.
      this._preview.addEventListener('transitionend', this._rotationFinished);
    }
    this._currentOrientation = this.spanning;
    switch(this.spanning) {
      case 'none':
        if (this._currentDevice  === 'asus')
          this._applyHorizontalRotation();
        else
          this._applyVerticalRotation();
        break;
      case 'single-fold-vertical':
        this._applyVerticalRotation();
        break;
      case 'single-fold-horizontal':
        this._applyHorizontalRotation();
        break;
    }
  }

  _rotationFinished = (event) => {
    this._preview.style.transition = '';
  }

  get spanning() {
    return this._spanning;
  }

  set spanning(value) {
    switch(value) {
      case 'none':
      case 'single-fold-vertical':
        this._orientation_select.selectedIndex = 0;
        break;
      case 'single-fold-horizontal':
        this._orientation_select.selectedIndex = 1;
        break;
      default:
        value = 'none';
        this._orientation_select.selectedIndex = 0;
    }
    this._spanning = value;
  }

  _deviceTypeChanged(event) {
    const selectedIndex = this._device_type_select.selectedIndex;
    const deviceType = this._device_type_select[selectedIndex].value;
    window.removeEventListener('resize', this._resizeHandler);
    this._resizeHandler = null;
    switch(deviceType) {
      case 'custom':
        this._seam_container.style.display = 'flex';
        this._orientation_select.disabled = false;
        this._seam_slider.disabled = false;
        this._seam_slider.layout();
        this.foldWidth = 24;
        if (this._spanning === 'none')
          this._currentOrientation = this.spanning = 'single-fold-vertical';
        this._currentDevice = 'custom';
        this._updatePreviewConfiguration();
        this._updateFoldablesFeature();
        break;
      case 'neo':
        this._orientation_select.disabled = false;
        this._seam_slider.disabled = true;
        this._seam_container.style.display = 'none';
        this._device_hinge.classList.remove('fold');
        this._device_hinge.classList.add('hinge');
        this.foldWidth = 24;
        this._currentDevice = 'neo';
        if (this._spanning === 'none')
          this._currentOrientation = this.spanning = 'single-fold-vertical';
        this._updatePreviewConfiguration();
        this._updateFoldablesFeature();
        break;
      case 'duo':
        this._orientation_select.disabled = false;
        this._seam_slider.disabled = true;
        this._seam_container.style.display = 'none';
        this._device_hinge.classList.remove('fold');
        this._device_hinge.classList.add('hinge');
        this.foldWidth = 28;
        this._currentDevice = 'duo';
        if (this._spanning === 'none')
          this._currentOrientation = this.spanning = 'single-fold-vertical';
        this._updatePreviewConfiguration();
        this._updateFoldablesFeature();
        break;
      case 'asus':
        this._resizeHandler = this._debounce(this._onResize, 200);
        window.addEventListener('resize', this._resizeHandler);
        this._device_hinge.classList.remove('fold');
        this._device_hinge.classList.add('hinge');
        this._handleAsusSpanning();
        this._currentDevice = 'asus';
        this._updatePreviewConfiguration();
        this._orientation_select.disabled = true;
        this._seam_slider.disabled = true;
        this._seam_container.style.display = 'none';
        break;
      case 'hsb':
          this._orientation_select.disabled = false;
          this._seam_container.style.display = 'flex';
          this._seam_slider.disabled = false;
          this._device_hinge.classList.add('fold');
          this._device_hinge.classList.remove('hinge');
          this._seam_slider.layout();
          this.foldWidth = 114;
          if (this._spanning === 'none') {
            this._currentOrientation = this.spanning = 'single-fold-horizontal';
          }
          this._currentDevice = 'hsb';
          this._updatePreviewConfiguration();
          this._updateFoldablesFeature();
            break;
      case 'fold':
        this._orientation_select.disabled = false;
        this._seam_container.style.display = 'flex';
        this._seam_slider.disabled = true;
        this._seam_container.style.display = 'none';
        this._device_hinge.classList.add('fold');
        this._device_hinge.classList.remove('hinge');
        this._seam_slider.layout();
        this.foldWidth = 10;
        if (this._spanning === 'none') {
          this._currentOrientation = this.spanning = 'single-fold-vertical';
        }
        this._currentDevice = 'fold';
        this._updatePreviewConfiguration();
        this._updateFoldablesFeature();
          break;
      default:
        this._orientation_select.disabled = true;
        this._seam_slider.disabled = true;
        this._seam_container.style.display = 'none';
        this._currentOrientation = this.spanning = 'none';
        this._currentDevice = 'duo';
        this.foldWidth = 0;
        this._device_hinge.classList.remove('fold');
        this._device_hinge.classList.add('hinge');
        this._updatePreviewConfiguration();
        this._updateFoldablesFeature();
    }
  }

  _calculateAndApplyScaleFactor() {
    const style = window.getComputedStyle(this._preview_container);
    const deviceStyle = window.getComputedStyle(this._device);
    const computedWidth = parseInt(style.width, 10);
    const computedHeight = parseInt(style.height, 10);
    let computedDeviceWidth = parseInt(deviceStyle.width, 10);
    let computedDeviceHeight = parseInt(deviceStyle.height, 10);
    let scaleFactor = 1;
    // The device is rotated, let's reverse.
    if (this._currentOrientation == 'single-fold-horizontal') {
      computedDeviceWidth = parseInt(deviceStyle.height, 10);
      computedDeviceHeight = parseInt(deviceStyle.width, 10);
    }
    if (computedDeviceHeight > computedHeight || computedDeviceWidth > computedWidth) {
      const scaleHeight = computedHeight / computedDeviceHeight;
      const scaleWidth = computedWidth / computedDeviceWidth;
      scaleFactor = scaleWidth < scaleHeight ? scaleWidth : scaleHeight;
    }
    this.shadowRoot.host.style.setProperty('--scale-factor', Math.trunc(scaleFactor* 100) / 100);
  }

  _updatePreviewConfiguration() {
    switch(this._currentDevice) {
      case 'neo':
        this.shadowRoot.host.style.setProperty('--device-screen1-width', '720px');
        this.shadowRoot.host.style.setProperty('--device-screen2-width', '720px');
        this.shadowRoot.host.style.setProperty('--device-screen1-height', '960px');
        this.shadowRoot.host.style.setProperty('--device-screen2-height', '960px');
        this.shadowRoot.host.style.setProperty('--device-fold-width', '24px');
        break;
      case 'custom':
      case 'duo':
        this.shadowRoot.host.style.setProperty('--device-screen1-width', '450px');
        this.shadowRoot.host.style.setProperty('--device-screen2-width', '450px');
        this.shadowRoot.host.style.setProperty('--device-screen1-height', '600px');
        this.shadowRoot.host.style.setProperty('--device-screen2-height', '600px');
        this.shadowRoot.host.style.setProperty('--device-fold-width', '28px');
        break;
      case 'fold':
        this.shadowRoot.host.style.setProperty('--device-screen1-width', '614px');
        this.shadowRoot.host.style.setProperty('--device-screen2-width', '614px');
        this.shadowRoot.host.style.setProperty('--device-screen1-height', '861px');
        this.shadowRoot.host.style.setProperty('--device-screen2-height', '861px');
        this.shadowRoot.host.style.setProperty('--device-fold-width', '10px');
        break;
      case 'asus':
        this.shadowRoot.host.style.setProperty('--device-screen1-width', '440px');
        this.shadowRoot.host.style.setProperty('--device-screen2-width', '720px');
        this.shadowRoot.host.style.setProperty('--device-screen1-height', '1396px');
        this.shadowRoot.host.style.setProperty('--device-screen2-height', '1396px');
        this.shadowRoot.host.style.setProperty('--device-fold-width', '30px');
        break;
      case 'hsb':
        this.shadowRoot.host.style.setProperty('--device-screen1-width', '1280px');
        this.shadowRoot.host.style.setProperty('--device-screen2-width', '1280px');
        this.shadowRoot.host.style.setProperty('--device-screen1-height', '1920px');
        this.shadowRoot.host.style.setProperty('--device-screen2-height', '1920px');
        this.shadowRoot.host.style.setProperty('--device-fold-width', '114px');
        break;
      default:
    }
    this._updatePreviewRotation();
    this._calculateAndApplyScaleFactor();
  }

  _updateFoldablesFeature() {
    const spanningFeat = new FoldablesFeature;
    spanningFeat.foldSize = this.foldWidth;
    spanningFeat.spanning = this.spanning;
    this._seam_slider.value = this.foldWidth;
  }

  _debounce(fn, wait) {
    let timeout;
    return function() {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn.apply(this, arguments), wait);
    };
  }

  _toggleFullscreen() {
    this._isFullscreen = !this._isFullscreen;
    if (this._isFullscreen) {
      this.shadowRoot.host.style.top = '0px';
      this.shadowRoot.host.style.transform = '';
      this.shadowRoot.host.classList.remove('configurator');
      this.shadowRoot.host.classList.add('fullscreen');
    } else {
      this.shadowRoot.host.classList.remove('fullscreen');
      this.shadowRoot.host.classList.add('configurator');
      this._updateConfiguratorPosition(this._offset_x, this._offset_y);
    }
    this._updatePreviewConfiguration();
  }

  _closeConfigurator() {
    this.shadowRoot.host.style.visibility = 'hidden';
    this._seam_slider.style.display = 'none';
    this._preview.style.display = 'none';
    this._bubble.style.visibility = 'hidden';
    this._configurator.style.visibility = 'hidden';
  }

  _showBubble() {
    if (this._isFullscreen)
      this._toggleFullscreen();
    this.shadowRoot.host.classList.remove('fullscreen');
    this.shadowRoot.host.classList.remove('configurator');
    this.shadowRoot.host.style.visibility = 'visible';
    this._seam_slider.style.display = 'none';
    this._preview.style.display = 'none';
    this._bubble.style.visibility = 'visible';
    this._configurator.style.visibility = 'hidden';
    this._updateConfiguratorPosition(this._lastBubblePosition.x, this._lastBubblePosition.y);
  }

  _showConfigurator() {
    this._lastBubblePosition = { x: this._offset_x, y: this._offset_y}
    this.shadowRoot.host.classList.add('configurator');
    this.shadowRoot.host.style.visibility = 'visible';
    this._seam_slider.style.display = 'block';
    this._preview.style.display = 'flex';
    this._bubble.style.visibility = 'hidden';
    this._configurator.style.visibility = 'visible';
    let x = this._offset_x;
    let y = this._offset_y;
    const style = window.getComputedStyle(this.shadowRoot.host);
    const configuratorWith = parseFloat(style.width);
    const configuratorHeight = parseFloat(style.height)
    if (this._offset_y + configuratorHeight >= window.innerHeight)
      y = window.innerHeight - configuratorHeight;
    if (this._offset_x + configuratorWith >= window.innerWidth)
      x = window.innerWidth - configuratorWith;

    this._updateConfiguratorPosition(x, y);
  }

  _updateConfiguratorPosition(x, y) {
    this._offset_x = x;
    this._offset_y = y;
    this.shadowRoot.host.style.transform = "translate3d(" + x + "px, " + y + "px, 0)";
  }

  render() {
    return html`
    <div id="bubble">
      <svg id="main-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70">
        <defs>
          <filter style="color-interpolation-filters:sRGB;" id="filter1588">
            <feFlood flood-opacity="0.498039" flood-color="rgb(0,0,0)" result="flood"/>
            <feComposite in="flood" in2="SourceGraphic" operator="in" result="composite1"/>
            <feGaussianBlur in="composite1" stdDeviation="1.6" result="blur"/>
            <feOffset dx="0.260417" dy="2.9" result="offset"/>
            <feComposite in="SourceGraphic" in2="offset" operator="over" result="composite2"/>
          </filter>
      </defs>
      <circle style="fill:#f2f2f2;stroke:#cccccc;stroke-width:2;fill-opacity:0.94901961;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none;filter:url(#filter1588)"
              r="26.459999" cx="30.198048" cy="29.674902"/>
      <rect style="fill:#000000;stroke:#969696;stroke-width:1.04591477;stroke-opacity:1" x="11.943073" y="13.627522" width="36.014523"
            height="32.950699"/>
      <rect style="fill:#000000;stroke:#969696;stroke-width:0.73499995;stroke-opacity:1" x="11.787928" y="13.511369" width="17.640001"
            height="33.222"/>
      <rect style="fill:#000000;stroke:#969696;stroke-width:0.73500001;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
            x="30.50131" y="13.479467" width="17.640001" height="33.222"/>
      <rect style="fill:#0e71f2;stroke:#969696;stroke-width:0.64964974;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
            x="31.768099" y="14.992944" width="15.078116" height="30.353178"/>
      <rect style="fill:#0e71f2;stroke:#969696;stroke-width:0.64964974;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
            x="13.140842" y="14.973761" width="15.078116" height="30.353178"/>
      <rect style="fill:#0e71f2;stroke:#969696;stroke-width:0.64964974;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;fill-opacity:1"
            x="31.768099" y="14.992944" width="15.078116" height="30.353178"/>
      <rect style="fill:#0e71f2;stroke:#969696;stroke-width:0.64964974;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;fill-opacity:0.94901961"
            x="13.140842" y="14.973761" width="15.078116" height="30.353178"/>
      <rect style="fill:#ffffff;fill-opacity:0.98999999;stroke-width:0.05569178" x="13.492369" y="15.263065" width="14.367508" height="3.4798944"/>
      <rect style="fill:#ffffff;fill-opacity:0.98999999;stroke-width:0.05545783" x="32.083931" y="15.301432" width="14.405874" height="3.4415274"/>
      <rect style="fill:#c8dffc;stroke-width:0.05824436" x="44.208069" y="15.533369" width="0.8190853" height="0.8117733" rx="0.17551827"/>
      <rect style="fill:#c8dffc;stroke-width:0.05824436" x="45.319687" y="15.533369" width="0.8190853" height="0.8117733" rx="0.17551827"/>
      <path style="fill:#0e71f2;fill-opacity:0.22000002;stroke-width:0.05631923"
            d="m 15.13054,16.945463 c 0,-0.192158 0.14693,-0.347902 0.328213,-0.347902 h 12.362755 v 1.797498 H 15.458753 c -0.181283,0 -0.328213,-0.155745 -0.328213,-0.347904 z"/>
      <path style="fill:#0e71f2;fill-opacity:0.22000002;stroke-width:0.05664341"
            d="m 32.083931,16.597561 h 13.722836 c 0.183376,0 0.332003,0.155744 0.332003,0.347902 v 1.101692 c 0,0.192159 -0.148627,0.347904 -0.332003,0.347904 H 32.083931 Z"/>
      <path style="fill:#ffffff;fill-opacity:0.98999999;stroke:#c8dffc;stroke-width:0.16198945"
            d="m 14.218595,18.001583 -0.550764,-0.550765 0.550764,-0.550766"/>
      <path style="stroke:#c8dffc;stroke-width:0.16198945" d="M 14.915149,17.450818 H 13.667831"/>
     </svg>
    </div>
    <div id="configurator">
      <div class="minimize" @click="${this._showBubble}">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
          <path d="M6 19h12v2H6z"/><path d="M0 0h24v24H0V0z" fill="none"/>
        </svg>
      </div>
      <div class="close" @click="${this._closeConfigurator}">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
          <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
        </svg>
      </div>
      <div class="fullscreen" @click="${this._toggleFullscreen}">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="-6 -6 18 18" >
          <path d="M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z"  transform="translate(-6,-6)"/>
          <animate attributeName="fill" values="#797979;#ca0700;#797979" dur="2s" repeatCount="10" />
          <animate attributeType="CSS" attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="10" />
          <animateTransform  attributeName="transform" additive="sum" type="scale" values="1;1.1;1" dur="2s" repeatCount="10" />
        </svg>
      </div>
      <div id="header">Foldable Devices</div>
      <div id="content">
        <label for="device-select" class="category">Device</label>
        <select id="device-select">
          <option value="standard">Off</option>
          <option value="custom">Custom...</option>
          <optgroup label="Presets">
            <option value="neo">Surface Neo</option>
            <option value="duo">Surface Duo</option>
            <option value="asus">Asus Zenbook Pro Duo</option>
            <option value="fold">Samsung Galaxy Fold</option>
            <option value="hsb">HSB</option>
          </optgroup>
        </select>
        <label for="orientation-select" class="category">Orientation</label>
        <select id="orientation-select" disabled>
          <option value="single-fold-vertical">Vertical</option>
          <option value="single-fold-horizontal">Horizontal</option>
        </select>
        <div id="preview-text">Below is an emulated version on the device when spanning :</div>
        <div id="preview-container">
          <div id="preview">
            <div id="device">
              <div class="screen right"></div>
              <div class="hinge" id="device-hinge">
                <div class="hinge-element"></div>
                <div class="hole"></div>
                <div class="hinge-element"></div>
              </div>
              <div class="screen left"></div>
            </div>
            <iframe id="frame" title="Preview of the device"></iframe>
          </div>
        </div>
        <div id="seam-container">
          <label for="seam" class="category">Seam width</label>
          <mwc-slider markers pin step="5" value="30" min="0" max="200" id="seam" disabled></mwc-slider>
        </div>
        <div class="legend"> If you close the configurator use CTRL + i to show it again </div>
      </div>
    </div>`;
  }
}

customElements.define('foldable-device-configurator', FoldableDeviceConfigurator);
