function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { LitElement, html, css } from '../_snowpack/pkg/lit.js';
import '../_snowpack/pkg/@material/mwc-slider.js';
import { FoldablesFeature } from "../_snowpack/pkg/spanning-css-polyfill.js";
export const DeviceType = {
  Foldable: 'foldable',
  Dual: 'dual'
};

class Icon extends LitElement {}

_defineProperty(Icon, "styles", css`
    :host {
      width: 20px;
      height: 20px;
      cursor: pointer;
      opacity: 0.5;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    :host(:hover) {
      opacity: 1;
    }

    svg {
      width: 100%;
      height: 100%;
    }
  `);

class CloseIcon extends Icon {
  render() {
    return html`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
      </svg>
    `;
  }

}

customElements.define('close-icon', CloseIcon);

class FullScreenIcon extends Icon {
  render() {
    return html`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="-6 -6 18 18" >
        <path d="M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z"  transform="translate(-6,-6)"/>
        <animate attributeName="fill" values="#797979;#ca0700;#797979" dur="2s" repeatCount="10" />
        <animate attributeType="CSS" attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="10" />
        <animateTransform  attributeName="transform" additive="sum" type="scale" values="1;1.1;1" dur="2s" repeatCount="10" />
      </svg>
    `;
  }

}

customElements.define('fullscreen-icon', FullScreenIcon);

class SplitViewIcon extends Icon {
  render() {
    return html`
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
          <path d="M 11.110169,20.601695 V 3.6016952 c 0,-0.55 -0.45,-1 -1,-1 H 4.1101692 c -0.55,0 -1,0.45 -1,1 V 20.601695 c 0,0.55 0.45,1 1,1 h 5.9999998 c 0.55,0 1,-0.45 1,-1 z m 10,0 V 3.6016952 c 0,-0.55 -0.45,-1 -1,-1 h -6 c -0.55,0 -1,0.45 -1,1 V 20.601695 c 0,0.55 0.45,1 1,1 h 6 c 0.55,0 1,-0.45 1,-1 z"/>
        </svg>
    `;
  }

}

customElements.define('splitview-icon', SplitViewIcon);

class RotateIcon extends Icon {
  render() {
    return html`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
        <path d="M7.34 6.41L.86 12.9l6.49 6.48 6.49-6.48-6.5-6.49zM3.69 12.9l3.66-3.66L11 12.9l-3.66 3.66-3.65-3.66zm15.67-6.26C17.61 4.88 15.3 4 13 4V.76L8.76 5 13 9.24V6c1.79 0 3.58.68 4.95 2.05 2.73 2.73 2.73 7.17 0 9.9C16.58 19.32 14.79 20 13 20c-.97 0-1.94-.21-2.84-.61l-1.49 1.49C10.02 21.62 11.51 22 13 22c2.3 0 4.61-.88 6.36-2.64 3.52-3.51 3.52-9.21 0-12.72z"/>
      </svg>
    `;
  }

}

customElements.define('rotate-icon', RotateIcon);

class MinimizeIcon extends Icon {
  render() {
    return html`
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" >
        <path d="M6 19h12v2H6z"/><path d="M0 0h24v24H0V0z" fill="none"/>
      </svg>
    `;
  }

}

customElements.define('minimize-icon', MinimizeIcon);
export class FoldableDeviceConfigurator extends LitElement {
  static get properties() {
    return {
      spanning: {
        type: String
      }
    };
  }

  _inIframe() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }

  constructor() {
    super();

    _defineProperty(this, "_mini_configurator_header", void 0);

    _defineProperty(this, "_mini_configurator", void 0);

    _defineProperty(this, "_configurator", void 0);

    _defineProperty(this, "_configurator_header", void 0);

    _defineProperty(this, "_device_type_select", void 0);

    _defineProperty(this, "_orientation_select", void 0);

    _defineProperty(this, "_seam_slider", void 0);

    _defineProperty(this, "_seam_container", void 0);

    _defineProperty(this, "_preview", void 0);

    _defineProperty(this, "_preview_container", void 0);

    _defineProperty(this, "_device", void 0);

    _defineProperty(this, "_frame", void 0);

    _defineProperty(this, "_device_hinge", void 0);

    _defineProperty(this, "_currentOrientation", void 0);

    _defineProperty(this, "_currentDevice", void 0);

    _defineProperty(this, "_isFullscreen", false);

    _defineProperty(this, "_spanning", void 0);

    _defineProperty(this, "_fold_width", void 0);

    _defineProperty(this, "_browser_shell_size", void 0);

    _defineProperty(this, "_x", 0);

    _defineProperty(this, "_y", 0);

    _defineProperty(this, "_offset_x", 0);

    _defineProperty(this, "_offset_y", 0);

    _defineProperty(this, "_resizeHandler", void 0);

    _defineProperty(this, "_handleKeyUp", event => {
      if (event.keyCode == 73 && event.ctrlKey) this._showMiniConfigurator();
    });

    _defineProperty(this, "_startDragMiniConfigurator", async event => {
      this._startDrag(event);

      this._mini_configurator_header.setPointerCapture(this._pointerId);

      this._mini_configurator_header.onpointerup = this._stopDragMiniConfigurator;
      this._mini_configurator_header.onpointercancel = this._stopDragMiniConfigurator;
      this._mini_configurator_header.onpointermove = this._miniConfiguratorMove;
    });

    _defineProperty(this, "_startDragConfigurator", async event => {
      this._startDrag(event);

      this._configurator_header.setPointerCapture(this._pointerId);

      this._configurator_header.onpointerup = this._stopDragConfigurator;
      this._configurator_header.onpointercancel = this._stopDragConfigurator;
      this._configurator_header.onpointermove = this._pointerMove;
    });

    _defineProperty(this, "_startDrag", async event => {
      if (this._isFullscreen) return;
      this._moved = false;
      this._x = event.clientX - this._offset_x;
      this._y = event.clientY - this._offset_y;
      this._pointerId = event.pointerId;
      event.preventDefault();
    });

    _defineProperty(this, "_miniConfiguratorMove", async event => {
      this._pointerMove(event);

      this._lastMiniConfiguratorPosition = {
        x: this._offset_x,
        y: this._offset_y
      };
    });

    _defineProperty(this, "_pointerMove", async event => {
      if (event.clientY < 0 || event.clientX < 0 || event.clientX > window.innerWidth || event.clientY > window.innerHeight) return;
      let x = event.clientX - this._x;
      let y = event.clientY - this._y;
      const style = window.getComputedStyle(this.shadowRoot.host);
      const configuratorWith = parseFloat(style.width);
      const configuratorHeight = parseFloat(style.height);
      if (x < 0) x = 0;
      if (y < 0) y = 0;
      if (y + configuratorHeight >= window.innerHeight) y = window.innerHeight - configuratorHeight;
      if (x + configuratorWith >= window.innerWidth) x = window.innerWidth - configuratorWith;

      this._updateConfiguratorPosition(x, y);

      event.preventDefault();
    });

    _defineProperty(this, "_stopDragConfigurator", async event => {
      this._configurator_header.onpointerup = null;
      this._configurator_header.onpointermove = null;

      this._configurator_header.releasePointerCapture(this._pointerId);

      this._stopDrag(event);
    });

    _defineProperty(this, "_stopDragMiniConfigurator", async event => {
      this._mini_configurator_header.onpointerup = null;
      this._mini_configurator_header.onpointermove = null;

      this._mini_configurator_header.releasePointerCapture(this._pointerId);

      this._stopDrag(event);
    });

    _defineProperty(this, "_stopDrag", async event => {
      this._x = this._offset_x;
      this._y = this._offset_y;
    });

    _defineProperty(this, "_onResize", async event => {
      this._handleAsusSpanning();
    });

    _defineProperty(this, "_seamValueUpdated", async event => {
      this.foldWidth = event.target.value;
      this.shadowRoot.host.style.setProperty('--device-fold-width', event.target.value + 'px');

      this._updateFoldablesFeature();
    });

    _defineProperty(this, "_rotationFinished", event => {
      this._preview.style.transition = '';
    });

    this._spanning = 'none';
  }

  firstUpdated() {
    if (this._inIframe()) {
      this.shadowRoot.host.style.display = 'none';
      return;
    }

    const hasBrowserSupport = window.matchMedia('(screen-spanning: single-fold-horizontal)').matches || window.matchMedia('(screen-spanning: single-fold-vertical)').matches || window.matchMedia('(screen-spanning: none)').matches || false;

    if (hasBrowserSupport) {
      console.info(`CSS Spanning Media Queries are supported, the configurator will hide itself.`);
      this.shadowRoot.host.style.display = 'none';
      return;
    }

    this._mini_configurator_header = this.shadowRoot.querySelector('#mini-configurator-header');
    this._mini_configurator = this.shadowRoot.querySelector('#mini-configurator');
    this._configurator = this.shadowRoot.querySelector('#configurator');
    this._configurator_header = this.shadowRoot.querySelector('#configurator-header');
    this._device_type_select = this.shadowRoot.querySelector('#device-select');
    this._orientation_select = this.shadowRoot.querySelector('#orientation-select');
    this._seam_slider = this.shadowRoot.getElementById('seam');
    this._seam_container = this.shadowRoot.getElementById('seam-container');
    this._configurator_header.onpointerdown = this._startDragConfigurator.bind(this);
    this._mini_configurator_header.onpointerdown = this._startDragMiniConfigurator.bind(this);
    this._device_type_select.onchange = this._deviceTypeChanged.bind(this);
    this._orientation_select.onchange = this._orientationChanged.bind(this);
    this._seam_slider.oninput = this._seamValueUpdated.bind(this);
    const style = window.getComputedStyle(this.shadowRoot.host);
    const configuratorWith = parseFloat(style.width);
    const configuratorHeight = parseFloat(style.height); // Bottom left corner.

    this._updateConfiguratorPosition(20, window.innerHeight - configuratorHeight - 20);

    this._orientation_select.disabled = true;
    this._seam_slider.disabled = true;
    this._browser_shell_size = 0;
    this._spanning = 'none';
    this.foldWidth = 0;
    this._preview = this.shadowRoot.querySelector('#preview');
    this._preview_container = this.shadowRoot.querySelector('#preview-container');
    this._device = this.shadowRoot.querySelector('#device');
    this._frame = this.shadowRoot.querySelector('#frame');
    this._device_hinge = this.shadowRoot.querySelector('#device-hinge');

    this._updateFoldablesFeature();

    this._currentOrientation = 'none';
    this._deviceType = DeviceType.Dual;
    document.addEventListener('keyup', this._handleKeyUp, false);
    console.log('Device Pixel Ratio : ' + window.devicePixelRatio);
  }

  // This is REALLY BAD, it needs to be in the polyfill (so we can support
  // not equally sized split screens). Also this is only working for the demo because
  // it messes with its variables (rather than touching the polyfill variables but
  // these are already rewritten by the time I hit this handler).
  // Hey it's all WIP and research, don't complain.
  _handleAsusSpanning() {
    console.log(window.innerHeight);

    if (window.innerHeight > 752) {
      this.spanning = 'single-fold-horizontal';
      this.foldWidth = 30;

      this._updateFoldablesFeature();

      setTimeout(() => {
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
      }, 200);
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

  get foldWidth() {
    return this._fold_width;
  }

  set foldWidth(value) {
    this._fold_width = Math.max(0, value);
  }

  _orientationChanged(event) {
    const selectedIndex = this._orientation_select.selectedIndex;
    this.spanning = this._orientation_select[selectedIndex].value;

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
    if (this.spanning != this._currentOrientation) {
      this._preview.style.transition = 'transform 0.7s ease-in-out'; // Only animate the rotation.

      this._preview.addEventListener('transitionend', this._rotationFinished);
    }

    this._currentOrientation = this.spanning;

    switch (this.spanning) {
      case 'none':
        if (this._currentDevice === 'asus') this._applyHorizontalRotation();else this._applyVerticalRotation();
        break;

      case 'single-fold-vertical':
        this._applyVerticalRotation();

        break;

      case 'single-fold-horizontal':
        this._applyHorizontalRotation();

        break;
    }
  }

  get spanning() {
    return this._spanning;
  }

  set spanning(value) {
    let oldSpanning = this._spanning;

    switch (value) {
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
    this.requestUpdate('spanning', oldSpanning);
  }

  _deviceTypeChanged(event) {
    const selectedIndex = this._device_type_select.selectedIndex;
    const deviceType = this._device_type_select[selectedIndex].value;
    window.removeEventListener('resize', this._resizeHandler);
    this._resizeHandler = null;
    if (this.spanning === 'none') this._currentOrientation = this.spanning = 'single-fold-vertical';

    switch (deviceType) {
      case 'custom':
        this._seam_container.style.display = 'flex';
        this._orientation_select.disabled = false;
        this._seam_slider.disabled = false;

        this._seam_slider.layout();

        this.foldWidth = 24;
        this._deviceType = DeviceType.Dual;
        this._currentDevice = 'custom';
        break;

      case 'neo':
        this._orientation_select.disabled = false;
        this._seam_slider.disabled = true;
        this._seam_container.style.display = 'none';
        this._deviceType = DeviceType.Dual;
        this.foldWidth = 24;
        this._currentDevice = 'neo';
        break;

      case 'duo':
        this._orientation_select.disabled = false;
        this._seam_slider.disabled = true;
        this._seam_container.style.display = 'none';
        this._deviceType = DeviceType.Dual;
        this.foldWidth = 28;
        this._currentDevice = 'duo';
        break;

      case 'asus':
        this._resizeHandler = this._debounce(this._onResize, 200);
        window.addEventListener('resize', this._resizeHandler);
        this._deviceType = DeviceType.Dual;

        this._handleAsusSpanning();

        this._currentDevice = 'asus';
        this._orientation_select.disabled = true;
        this._seam_slider.disabled = true;
        this._seam_container.style.display = 'none';
        break;

      case 'fold':
        this._orientation_select.disabled = false;
        this._seam_container.style.display = 'flex';
        this._seam_slider.disabled = true;
        this._seam_container.style.display = 'none';
        this._deviceType = DeviceType.Foldable;

        this._seam_slider.layout();

        this.foldWidth = 10;
        this._currentDevice = 'fold';
        break;

      default:
        this._orientation_select.disabled = true;
        this._seam_slider.disabled = true;
        this._seam_container.style.display = 'none';
        this._currentOrientation = this.spanning = 'none';
        this._currentDevice = 'duo';
        this.foldWidth = 0;
        this._deviceType = DeviceType.Dual;
    }

    this._updatePreviewConfiguration();

    this._updateFoldablesFeature(); // Make sure to reload the preview. The reason we have this is because
    // the layout of the iframe may not change (e.g. changing from duo to none)
    // and thus won't repaint.


    this._frame.contentWindow.location.reload(true);
  }

  _calculateAndApplyScaleFactor() {
    const style = window.getComputedStyle(this._preview_container);
    const deviceStyle = window.getComputedStyle(this._device);
    const computedWidth = parseInt(style.width, 10);
    const computedHeight = parseInt(style.height, 10);
    let computedDeviceWidth = parseInt(deviceStyle.width, 10);
    let computedDeviceHeight = parseInt(deviceStyle.height, 10);
    let scaleFactor = 1; // The device is rotated, let's reverse.

    if (this._currentOrientation == 'single-fold-horizontal') {
      computedDeviceWidth = parseInt(deviceStyle.height, 10);
      computedDeviceHeight = parseInt(deviceStyle.width, 10);
    }

    if (computedDeviceHeight > computedHeight || computedDeviceWidth > computedWidth) {
      const scaleHeight = computedHeight / computedDeviceHeight;
      const scaleWidth = computedWidth / computedDeviceWidth;
      scaleFactor = scaleWidth < scaleHeight ? scaleWidth : scaleHeight;
    }

    this.shadowRoot.host.style.setProperty('--scale-factor', Math.trunc(scaleFactor * 100) / 100);
  }

  _updatePreviewConfiguration() {
    switch (this._currentDevice) {
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

      default:
    }

    if (this._deviceType === DeviceType.Foldable) {
      this._device_hinge.classList.add('fold');

      this._device_hinge.classList.remove('hinge');
    } else {
      this._device_hinge.classList.remove('fold');

      this._device_hinge.classList.add('hinge');
    }

    this._updatePreviewRotation();

    this._calculateAndApplyScaleFactor();
  }

  _updateFoldablesFeature() {
    const spanningFeat = new FoldablesFeature();
    spanningFeat.foldSize = this.foldWidth;
    spanningFeat.screenSpanning = this.spanning;
    this._seam_slider.value = this.foldWidth;
  }

  _debounce(fn, wait) {
    let timeout;
    return function () {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn.apply(this, arguments), wait);
    };
  }

  _toggleFullscreen() {
    this._isFullscreen = !this._isFullscreen;

    if (this._isFullscreen) {
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
    this._mini_configurator.style.visibility = 'hidden';
    this._configurator.style.visibility = 'hidden';
  }

  _showMiniConfigurator() {
    if (this._isFullscreen) this._toggleFullscreen();
    this.shadowRoot.host.classList.remove('fullscreen');
    this.shadowRoot.host.classList.remove('configurator');
    this.shadowRoot.host.style.visibility = 'visible';
    this._seam_slider.style.display = 'none';
    this._preview.style.display = 'none';
    this._mini_configurator.style.visibility = 'visible';
    this._configurator.style.visibility = 'hidden';

    this._updateConfiguratorPosition(this._lastMiniConfiguratorPosition.x, this._lastMiniConfiguratorPosition.y);
  }

  _showConfigurator() {
    // Load the preview.
    if (!this._frame.src) this._frame.src = window.location.href;
    this._lastMiniConfiguratorPosition = {
      x: this._offset_x,
      y: this._offset_y
    };
    this.shadowRoot.host.classList.add('configurator');
    this.shadowRoot.host.style.visibility = 'visible';
    this._seam_slider.style.display = 'block';
    this._preview.style.display = 'flex';
    this._mini_configurator.style.visibility = 'hidden';
    this._configurator.style.visibility = 'visible';
    let x = this._offset_x;
    let y = this._offset_y;
    const style = window.getComputedStyle(this.shadowRoot.host);
    const configuratorWith = parseFloat(style.width);
    const configuratorHeight = parseFloat(style.height);
    if (this._offset_y + configuratorHeight >= window.innerHeight) y = window.innerHeight - configuratorHeight;
    if (this._offset_x + configuratorWith >= window.innerWidth) x = window.innerWidth - configuratorWith;

    this._updateConfiguratorPosition(x, y);

    this._updatePreviewConfiguration();
  }

  _updateConfiguratorPosition(x, y) {
    this._offset_x = x;
    this._offset_y = y;
    this.shadowRoot.host.style.transform = "translate3d(" + x + "px, " + y + "px, 0)";
  }

  _toggleSpanning() {
    if (this.spanning != 'none') this._device_type_select.selectedIndex = 0;else this._device_type_select.selectedIndex = 2;

    this._deviceTypeChanged();
  }

  _changeOrientation() {
    if (this.spanning === 'none') return;
    if (this.spanning === 'single-fold-vertical') this.spanning = 'single-fold-horizontal';else this.spanning = 'single-fold-vertical';

    this._updatePreviewRotation();

    this._updateFoldablesFeature();

    this._calculateAndApplyScaleFactor();
  }

  render() {
    return html`
    <div id="mini-configurator">
      <div class="header-background header" id="mini-configurator-header">Foldable Configurator</div>
      <div class="icon-row">
        <splitview-icon @click="${this._toggleSpanning}" class="${this.spanning != 'none' ? 'toggle' : ''}"></splitview-icon>
        <rotate-icon @click="${this._changeOrientation}"></rotate-icon>
        <fullscreen-icon @click="${this._showConfigurator}"></fullscreen-icon>
        <close-icon @click="${this._closeConfigurator}"></close-icon>
      </div>
    </div>
    <div id="configurator">
      <div class="header-background header-configurator">
        <div id="configurator-header">Foldable Configurator</div>
        <div class="icons">
          <minimize-icon @click="${this._showMiniConfigurator}"></minimize-icon>
          <fullscreen-icon @click="${this._toggleFullscreen}"></fullscreen-icon>
          <close-icon @click="${this._closeConfigurator}"></close-icon>
        </div>
      </div>
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

_defineProperty(FoldableDeviceConfigurator, "styles", css`
    :host {
      z-index: 9999;
      position: absolute;
      font-size: 12px;
      width: 12vw;
      height: 50px;

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
        width: 30vw;
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

    #mini-configurator {
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: #f2f2f2;
      border: 1px solid #cccccc;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    }

    #mini-configurator-header {
      font-size: 0.9em;
      height: 20px;
      margin-bottom: 5px;
    }

    .icon-row {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }

    .toggle {
      background-color: #b8b8b8;
      opacity: 1;
      border-radius: 4px;
    }

    #main-icon:hover {
      opacity: 0.8;
    }

    #main-icon {
      width: 100%;
      height: auto;
    }

    .header-background {
      background-color: #f2f2f2;
      border-bottom: 1px solid #cccccc;
      height: 28px;
    }

    .header {
      cursor: move;
      display: flex;
      justify-content: center;
      align-items: center;
      user-select: none;
      touch-action: none;
    }

    .header-configurator {
      cursor: move;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
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

    #configurator-header {
      flex-grow: 2;
      align-self: stretch;
      user-select: none;
      touch-action: none;
      cursor: move;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .icons {
      flex-basis: 90px;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
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
  `);

customElements.define('foldable-device-configurator', FoldableDeviceConfigurator);