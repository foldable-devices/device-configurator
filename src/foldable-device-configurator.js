import { LitElement, html, css } from "../web_modules/lit-element.js";
import '../web_modules/@material/mwc-slider.js';

class FoldableDeviceConfigurator extends LitElement {
  static styles = css`
    :host {
      position: absolute;
      width: 350px;
      height: 350px;
      background-color: white;
      box-shadow: 0px 0px 10px 10px #000000;
      top: 10px;
      left: 10px;
      border: 1px solid grey;
    }

    #header {
      background-color: black;
      color: white;
      height: 50px;
      font-size: 1.2em;
      cursor: move;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    #content {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      align-items: left;
      flex-direction: column;
    }

    .vertical {
      margin-top: 20px;
      display: flex;
      justify-content: left;
      align-items: center;
      flex-direction: column;
    }

    .horizontal {
      margin-top: 20px;
      display: flex;
      justify-content: left;
      flex-direction: row;
      align-items: center;
    }

    .select {
      margin-left: 10px;
    }

    .category {
      font-weight: bold;
      margin-right: 10px;
      margin-left: 5px;
    }

    mwc-slider {
      margin-left: 10px;
      --mdc-theme-secondary: black;
    }

    .close {
      position: absolute;
      right: 10px;
      top: 10px;
      width: 32px;
      height: 32px;
      opacity: 0.3;
      background-color: white;
    }

    .close:hover {
      opacity: 1;
    }

    .close:before, .close:after {
      position: absolute;
      left: 15px;
      content: ' ';
      height: 33px;
      width: 2px;
      background-color: #333;
    }

    .close:before {
      transform: rotate(45deg);
    }

    .close:after {
      transform: rotate(-45deg);
    }
  `;

  _header;
  _device_type;
  _spanning;
  _vertical_button;
  _horizontal_button;
  _seam_slider;
  _fold_width;
  _browser_shell_size;
  _foldable_config;

  _position_x;
  _position_y;
  _resizeHandler;

  firstUpdated() {
    this._foldable_config = window["__foldables_env_vars__"];
    this._header = this.shadowRoot.querySelector('#header');
    this._device_type = this.shadowRoot.querySelector('.select');
    this._horizontal_button = this.shadowRoot.getElementById("horizontal");
    this._vertical_button = this.shadowRoot.getElementById("vertical");
    this._seam_slider = this.shadowRoot.getElementById("seam");
    this._header.onmousedown = this._startDrag;
    this._device_type.onchange = this._deviceTypeChanged;
    this._horizontal_button.oninput = this._horizontalSelected;
    this._vertical_button.oninput = this._verticalSelected;
    this._seam_slider.oninput = this._seamValueUpdated;
    this._browser_shell_size = '0';
    this._spanning = 'none';
    this._fold_width = '0';
    this._browser_shell_size = '0';
    this._disableFoldableControls();
    this._updateConfig();
  }

  _startDrag = async (event) => {
    event.preventDefault();
    this._position_x = event.clientX;
    this._position_y = event.clientY;
    document.onmouseup = this._stopDrag;
    document.onmousemove = this._drag;
  }

  _drag = async (event) => {
    event.preventDefault();
    let x = this._position_x - event.clientX;
    let y = this._position_y - event.clientY;
    this._position_x = event.clientX;
    this._position_y = event.clientY;
    this.shadowRoot.host.style.top = (this.shadowRoot.host.offsetTop - y) + "px";
    this.shadowRoot.host.style.left = (this.shadowRoot.host.offsetLeft - x) + "px";
  }

  _stopDrag = async (event) => {
    document.onmouseup = null;
    document.onmousemove = null;
  }

  _verticalSelected = async () => {
    this._spanning = 'single-fold-vertical';
    this._updateConfig();
  }

  _horizontalSelected = async () => {
    this._spanning = 'single-fold-horizontal';
    this._updateConfig();
  }

  _onResize = async (event) => {
    this._handleAsusSpanning();
  }

  // This is REALLY BAD, it needs to be in the polyfill (so we can support
  // non equally split screens). Also this is only working for the demo because
  // it mess with its variables (rather than touching the polyfill variables but
  // these are already rewritten by the time I hit this handler).
  // Hey it's all WIP and research, dont'complain.
  _handleAsusSpanning() {
    if (window.innerHeight > 752) {
      this._spanning = 'single-fold-horizontal';
      this._fold_width = '20';
      this._updateConfig();
      let polyfill = document.styleSheets[document.styleSheets.length - 1];
      let rule = polyfill.rules[0].cssRules[0];
      // This is specific to the demo :(, really bad.
      rule.style.setProperty('--span-1-height', "460px");
      rule.style.setProperty('--span-2-height', "715px");
    } else {
      this._spanning = 'none';
      this._fold_width = '0';
      this._updateConfig();
    }
  }

  _seamValueUpdated = async (event) => {
    if (event.target.value == 0)
      this._spanning = 'none';
    else {
      if (this._vertical_button.checked)
        this._spanning = 'single-fold-vertical';
      if (this._horizontal_button.checked)
        this._spanning = 'single-fold-horizontal';
    }
    this._fold_width = event.target.value;
    this._updateConfig();
  }

  _deviceTypeChanged = async (event) => {
    let selectedIndex = this._device_type.selectedIndex;
    let deviceType = this._device_type[selectedIndex].value;
    window.removeEventListener('resize', this._resizeHandler);
    this._resizeHandler = null;
    switch(deviceType) {
      case 'standard':
        this._spanning = 'none';
        this._fold_width = '0';
        this._updateConfig();
        this._disableFoldableControls();
        break;
      case 'neo':
        this._enableFoldableControls();
        this._vertical_button.checked = true;
        this._spanning = 'single-fold-vertical';
        this._fold_width = '24';
        this._updateConfig();
        break;
      case 'duo':
        this._enableFoldableControls();
        this._vertical_button.checked = true;
        this._spanning = 'single-fold-vertical';
        this._fold_width = '28';
        this._updateConfig();
        break;
      case 'asus':
        this._disableFoldableControls();
        this._resizeHandler = this._debounce(this._onResize, 200);
        window.addEventListener('resize', this._resizeHandler);
        this._handleAsusSpanning();
        break;
      default:
        this._spanning = 'none';
        this._vertical_button.disabled = true;
        this._horizontal_button.disabled = true;
        this._fold_width = '0';
        this._updateConfig();
    }
  }

  _disableFoldableControls() {
    this._vertical_button.disabled = true;
    this._horizontal_button.disabled = true;
    this._seam_slider.disabled = true;
  }

  _enableFoldableControls() {
    this._vertical_button.disabled = false;
    this._horizontal_button.disabled = false;
    this._seam_slider.disabled = false;
  }

  _updateConfig() {
    this._foldable_config.update({
      spanning: this._spanning,
      foldSize: this._fold_width,
      browserShellSize: this._browser_shell_size
    });
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
  }

  render() {
    return html`
    <div id="wrapper">
      <div id="header">Foldable Device Configurator
      <div class="close" @click="${this._closeConfigurator}"></div>
      </div>
      <div id="content">
        <div class="horizontal">
          <div class="category">Device type :</div>
            <select class="select">
              <option value="standard">Standard</option>
              <option value="neo">Surface Neo</option>
              <option value="duo">Surface Duo</option>
              <option value="asus">Asus Zenbook Pro Duo</option>
            </select>
        </div>
        <div class="horizontal">
          <div class="category">Orientation :</div>
            Vertical : <input type="radio" name="orientation" value="1" checked id="vertical"/>
            Horizontal : <input type="radio" name="orientation" value="2" id="horizontal"/>
          </div>
        </div>
        <div class="horizontal">
          <div class="category">Seam size :</div>
            <mwc-slider markers pin step="5" value="30" min="0" max="100" id="seam"></mwc-slider>
          </div>
        </div>
    </div>`;
  }
}

customElements.define("foldable-device-configurator", FoldableDeviceConfigurator);
