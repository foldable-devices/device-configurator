import { LitElement, html, css } from "../web_modules/lit-element.js";
import '../web_modules/@material/mwc-slider.js';

class FoldableDeviceConfigurator extends LitElement {
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
      --device-screen1-width: 1350px;
      --device-screen1-height: 1800px;
      --device-border: 15px;
      --device-bezel-vertical: 58px;
      --device-bezel-horizontal: 24px;
      --device-fold-width: 84px;
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

    #content {
      display: grid;
      grid-template-columns: 100px auto;
      grid-template-rows: auto auto;
      align-items: center;
      justify-items: start;
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

    #preview-container {
      height: 300px;
      width: 450px;
      grid-column: span 2;
    }

    #preview {
      transform: scale(0.15);
      transform-origin: top left;
      transition: all 0.7s ease-in-out;
    }

    #device {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      width: calc( 2 * var(--device-screen1-width) + var(--device-fold-width) + 2 * var(--device-bezel-horizontal));
      height: calc(var(--device-screen1-height) + 2 * var(--device-bezel-vertical));
      background-color: black;
      border-radius: 40px;
      border: var(--device-border) solid #979696;
    }

    .screen {
      width: calc(var(--device-screen1-width) + 2 * var(--device-bezel-horizontal));
      height: calc(var(--device-screen1-height) + 2 * var(--device-bezel-vertical));
      pointer-events: none;
      background-color: black;
      border-radius: 40px;
    }

    .hole {
      background-color: white;
      width: 10px;
      height: 100%;
    }

    .hinge {
      background-color: #979696;
      width: var(--device-fold-width);
      height: calc(var(--device-bezel-vertical) / 2);
      border-radius: 5px;
    }

    #fold {
      width: calc(var(--device-fold-width) + 2 * var(--device-border));
      height: calc(var(--device-screen1-height) + 2 *var(--device-bezel-vertical));
      z-index: 6;
      background-color: black;
      border: var(--device-border) solid black;
      border-top: var(--device-border) solid #979696;
      border-bottom: var(--device-border) solid #979696;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      border-radius: 10px;
    }

    #frame {
      position: absolute;
      top: calc(var(--device-bezel-vertical) + var(--device-border));
      left: calc(var(--device-bezel-horizontal) + var(--device-border));
      width: calc(2 * var(--device-screen1-width) + var(--device-fold-width));
      height: var(--device-screen1-height);
      z-index: 3;
      border: none;
      border-radius: 15px;
      transform-origin: top left;
    }

    .legend {
      font-size : 10px;
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
    this._foldable_config = window["__foldables_env_vars__"];

    this._header = this.shadowRoot.querySelector('#header');
    this._device_type_select = this.shadowRoot.querySelector('#device-select');
    this._orientation_select = this.shadowRoot.querySelector('#orientation-select');
    this._seam_slider = this.shadowRoot.getElementById("seam");
    this._seam_container = this.shadowRoot.getElementById("seam-container");

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
    this._preview_container = this.shadowRoot.querySelector("#preview-container");
    this._device = this.shadowRoot.querySelector('#device');
    this._frame = this.shadowRoot.querySelector('#frame');
    var DOMURL = self.URL || self.webkitURL || self;
    this._frame.src = window.location.href;
    this._updateConfig();

    document.addEventListener('keyup', this._handleKeyUp, false);
  }

  _handleKeyUp = (event) => {
    if(event.keyCode == 73 && event.ctrlKey) {
      this.shadowRoot.host.style.visibility = 'visible';
      this._seam_slider.style.display = 'block';
      this._preview.style.display = 'flex';
    }
  }

  _updatePreview = () => {
    this._previewConfig = this._frame.contentWindow["__foldables_env_vars__"]
    if (!this._previewConfig)
      return;
    const config = {
      spanning: this.spanning,
      foldSize: this.foldWidth,
      browserShellSize: this._browser_shell_size
    }
    this._previewConfig.update(config);
    this._updatePreviewRotation();
  }

  _startDrag = async (event) => {
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
    this.shadowRoot.host.style.top = (this.shadowRoot.host.offsetTop - y) + "px";
    this.shadowRoot.host.style.left = (this.shadowRoot.host.offsetLeft - x) + "px";
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
    if (window.innerHeight > 752) {
      this.spanning = 'single-fold-horizontal';
      this.foldWidth = 20;
      this._updateConfig();
      const polyfill = document.styleSheets[document.styleSheets.length - 1];
      const rule = polyfill.rules[0].cssRules[0];
      // This is specific to the demo :(, really bad.
      rule.style.setProperty('--span-1-height', "460px");
      rule.style.setProperty('--span-2-height', "715px");
    } else {
      this.spanning = 'none';
      this.foldWidth = 0;
      this._updateConfig();
    }
  }

  _seamValueUpdated = async (event) => {
    this.foldWidth = event.target.value;
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
  }

  _updatePreviewRotation() {
    const selectedIndex = this._device_type_select.selectedIndex;
    const deviceType = this._device_type_select[selectedIndex].value;
    switch(this.spanning) {
      case "none":
      case "single-fold-vertical":
        this._preview.style.marginLeft = '';
        this._preview.style.transform = 'scale(0.15)';
        this._frame.style.transform = '';
        this._frame.style.top = 'calc(var(--device-bezel-vertical) + var(--device-border))';
        this._frame.style.left = 'calc(var(--device-bezel-horizontal) + var(--device-border))';
        this._frame.style.width = 'calc(2 * var(--device-screen1-width) + var(--device-fold-width))';
        this._frame.style.height = 'var(--device-screen1-height)';
        if (deviceType === 'hsb' || deviceType === 'custom') {
          this.shadowRoot.host.style.height = '490px';
        } else {
          this.shadowRoot.host.style.height = '430px';
        }
        this._preview_container.style.height = "300px";
        break;
      case "single-fold-horizontal":
        this._frame.style.transform = 'rotate(-90deg) translateX(-100%)';
        this._frame.style.top = 'calc(var(--device-border) + var(--device-bezel-vertical))';
        this._frame.style.left = 'calc(var(--device-bezel-horizontal) + var(--device-border))';
        this._frame.style.width = 'var(--device-screen1-height)';
        this._frame.style.height = 'calc(2 * var(--device-screen1-width) + var(--device-fold-width))';
        this._preview.style.marginLeft = '70px';
        this._preview.style.transform = 'scale(0.15) rotate(90deg) translateY(-100%)';
        if (deviceType === 'hsb' || deviceType === 'custom') {
          this.shadowRoot.host.style.height = '620px';
        } else {
          this.shadowRoot.host.style.height = '560px';
        }
        this._preview_container.style.height = "430px";
        break;
    }
  }

  get spanning() {
    return this._spanning;
  }

  set spanning(value) {
    switch(value) {
      case "none":
      case "single-fold-vertical":
        this._orientation_select.selectedIndex = 0;
        break;
      case "single-fold-horizontal":
        this._orientation_select.selectedIndex = 1;
        break;
      default:
        value = "none";
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
        this.spanning = 'single-fold-vertical';
        this.foldWidth = 24;
        this._updateConfig();
        break;
      case 'neo':
        this._orientation_select.disabled = false;
        this._seam_slider.disabled = true;
        this._seam_container.style.display = 'none';
        this.spanning = 'single-fold-vertical';
        this.foldWidth = 24;
        this._updateConfig();
        break;
      case 'duo':
        this._orientation_select.disabled = false;
        this._seam_slider.disabled = true;
        this._seam_container.style.display = 'none';
        this.spanning = 'single-fold-vertical';
        this.foldWidth = 28;
        this._updateConfig();
        break;
      case 'asus':
        this._resizeHandler = this._debounce(this._onResize, 200);
        window.addEventListener('resize', this._resizeHandler);
        this._handleAsusSpanning();
        this._orientation_select.disabled = false;
        this._seam_slider.disabled = true;
        this._seam_container.style.display = 'none';
        break;
      case 'hsb':
        this._orientation_select.disabled = false;
        this._seam_container.style.display = 'flex';
        this._seam_slider.disabled = false;
        this.spanning = 'single-fold-horizontal';
        this.foldWidth = 114;
        this._updateConfig();
          break;
      default:
        this._orientation_select.disabled = true;
        this._seam_slider.disabled = true;
        this._seam_container.style.display = 'none';
        this.spanning = 'none';
        this.foldWidth = 0;
        this._updateConfig();
    }
  }

  _updateConfig() {
    const config = {
      spanning: this.spanning,
      foldSize: this.foldWidth,
      browserShellSize: this._browser_shell_size
    }
    console.table(config);
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
      <div id="header">Foldable Screen</div>
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
        <div id="preview-container">
          <div id="preview">
            <div id="device">
              <div class="screen"></div>
              <div id="fold">
                <div class="hinge"></div>
                <div class="hole"></div>
                <div class="hinge"></div>
              </div>
              <div class="screen"></div>
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

customElements.define("foldable-device-configurator", FoldableDeviceConfigurator);
