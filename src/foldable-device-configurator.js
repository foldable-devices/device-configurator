import { LitElement, html, css } from '../web_modules/lit-element.js';
import '../web_modules/@material/mwc-slider.js';

export class FoldableDeviceConfigurator extends LitElement {
  static styles = css`
    :host {
      z-index: 9999;
      position: absolute;
      width: 450px;
      height: 430px;
      font-size: 12px;
      background-color: white;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
      top: 16px;
      right: 80px;
      border: 1px solid grey;
      overscroll-behavior: contain;

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

    :host(.fullscreen) {
      height: 100vh;
      width: 100vw;
      top: 0px;
      left: 0px;
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


    #wrapper {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
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
      top: 5px;
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
      top: 5px;
      width: 18px;
      height: 18px;
      opacity: 0.5;
      cursor: initial;
    }

    .fullscreen:hover {
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
      width: calc(var(--device-fold-width) + 2 * var(--device-border));
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
  _foldable_config;

  _position_x;
  _position_y;
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
    }
    this._foldable_config = window['__foldables_env_vars__'];
    if (!this._foldable_config)
      console.error('foldable device polyfill was not found, make sure to include it in your project.')

    this._header = this.shadowRoot.querySelector('#header');
    this._device_type_select = this.shadowRoot.querySelector('#device-select');
    this._orientation_select = this.shadowRoot.querySelector('#orientation-select');
    this._seam_slider = this.shadowRoot.getElementById('seam');
    this._seam_container = this.shadowRoot.getElementById('seam-container');

    this._header.onpointerdown = this._startDrag.bind(this);
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
    var DOMURL = self.URL || self.webkitURL || self;
    this._frame.src = window.location.href;
    this._updateConfig();
    this._currentOrientation = 'none';

    document.addEventListener('keyup', this._handleKeyUp, false);

    console.log('Device Pixel Ratio : ' + window.devicePixelRatio);
  }

  _handleKeyUp = (event) => {
    if(event.keyCode == 73 && event.ctrlKey) {
      this.shadowRoot.host.style.visibility = 'visible';
      this._seam_slider.style.display = 'block';
      this._preview.style.display = 'flex';
    }
  }

  _updatePreview = () => {
    this._previewConfig = this._frame.contentWindow['__foldables_env_vars__']
    if (!this._previewConfig)
      return;
    const config = {
      spanning: this.spanning,
      foldSize: this.foldWidth,
      browserShellSize: this._browser_shell_size
    }
    this._previewConfig.update(config);
  }

  _startDrag = async (event) => {
    if (this._isFullscreen)
      return;
    this._position_x = event.clientX;
    this._position_y = event.clientY;
    this._pointerId = event.pointerId;
    this._header.setPointerCapture(this._pointerId);
    this._header.onpointerup = this._stopDrag;
    this._header.onpointercancel = this._stopDrag;
    this._header.onpointermove = this._pointerMove;
    event.preventDefault();
  }

  _pointerMove = async (event) => {
    const x = this._position_x - event.clientX;
    const y = this._position_y - event.clientY;
    this._position_x = event.clientX;
    this._position_y = event.clientY;
    this.shadowRoot.host.style.top = (this.shadowRoot.host.offsetTop - y) + 'px';
    this.shadowRoot.host.style.left = (this.shadowRoot.host.offsetLeft - x) + 'px';
    event.preventDefault();
  }

  _stopDrag = async (event) => {
    this._header.onpointerup = null;
    this._header.onpointermove = null;
    this._header.releasePointerCapture(this._pointerId);
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
      this.foldWidth = 23;
      this._updateConfig();
      setTimeout( () => {
        const polyfill = document.styleSheets[document.styleSheets.length - 1];
        const rule = polyfill.rules[0].cssRules[0];
        // This is specific to the demo :(, really bad.
        rule.style.setProperty('--span-1-height', '400px');
        rule.style.setProperty('--span-2-height', '660px');
        const polyfillPreview = this._frame.contentDocument.styleSheets[this._frame.contentDocument.styleSheets.length - 1];
        const rulePreview = polyfillPreview.rules[0].cssRules[0];
        rulePreview.style.setProperty('--span-1-height', '400px');
        rulePreview.style.setProperty('--span-2-height', '660px');
      }, 500)
    } else {
      this.spanning = 'none';
      this.foldWidth = 0;
      this._updateConfig();
    }

    this._currentOrientation = this.spanning;
  }

  _seamValueUpdated = async (event) => {
    this.foldWidth = event.target.value;
    this.shadowRoot.host.style.setProperty('--device-fold-width', event.target.value + 'px');
    this._updateConfig();
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
    this._updateConfig();
    this._updatePreviewRotation();
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
        this._updateConfig();
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
        this._updateConfig();
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
        this._updateConfig();
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
        this._updateConfig();
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
        this._updateConfig();
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
      case 'asus':
        this.shadowRoot.host.style.setProperty('--device-screen1-width', '400px');
        this.shadowRoot.host.style.setProperty('--device-screen2-width', '660px');
        this.shadowRoot.host.style.setProperty('--device-screen1-height', '1396px');
        this.shadowRoot.host.style.setProperty('--device-screen2-height', '1396px');
        this.shadowRoot.host.style.setProperty('--device-fold-width', '23px');
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

  _updateConfig() {
    const config = {
      spanning: this.spanning,
      foldSize: this.foldWidth,
      browserShellSize: this._browser_shell_size
    }
    console.table(config);
    if (this._foldable_config)
      this._foldable_config.update(config);
    this._seam_slider.value = this.foldWidth;
    this._updatePreview();
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
      this.shadowRoot.host.style.left = '0px';
      this.shadowRoot.host.style.right = '';
      this.shadowRoot.host.classList.add('fullscreen');
    } else {
      this.shadowRoot.host.classList.remove('fullscreen');
      this.shadowRoot.host.style.top = '16px';
      this.shadowRoot.host.style.left = '';
      this.shadowRoot.host.style.right = '80px';
    }
    this._updatePreviewConfiguration();
  }

  _closeConfigurator() {
    this.shadowRoot.host.style.visibility = 'hidden';
    this._seam_slider.style.display = 'none';
    this._preview.style.display = 'none';
  }

  render() {
    return html`
    <div id="wrapper">
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
        <div class="category">Device</div>
        <select id="device-select">
          <option value="standard">Off</option>
          <option value="custom">Custom...</option>
          <optgroup label="Presets">
            <option value="neo">Surface Neo</option>
            <option value="duo">Surface Duo</option>
            <option value="asus">Asus Zenbook Pro Duo</option>
            <option value="hsb">HSB</option>
          </optgroup>
        </select>
        <div class="category">Orientation</div>
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
            <iframe id="frame"></iframe>
          </div>
        </div>
        <div id="seam-container">
          <div class="category">Seam width</div>
          <mwc-slider markers pin step="5" value="30" min="0" max="200" id="seam" disabled></mwc-slider>
        </div>
        <div class="legend"> If you close the configurator use CTRL + i to show it again </div>
      </div>
    </div>`;
  }
}

customElements.define('foldable-device-configurator', FoldableDeviceConfigurator);
