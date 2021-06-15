function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { LitElement, html, css as litCSS } from './_snowpack/pkg/lit.js';
import { FoldablesFeature, adjustCSS, observe } from "./_snowpack/pkg/spanning-css-polyfill.js";

const css = (strings, ...values) => {
  const string = adjustCSS(strings[0], "main-application");
  return litCSS([string], ...values);
};

export class MainApplication extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    observe(this);
  }

  constructor() {
    super();
  }

  render() {
    return html`
        <div class="content">
          <div class="main-container"><div class="text">Main Content</div></div>
          <div class="fold angled stripes"></div>
          <div class="second-container"><div class="text">Detail panel</div></div>
          </div>
        </div>
    `;
  }

}

_defineProperty(MainApplication, "styles", css`
    :host {
      width: 100vw;
      height: 100vh;
      overflow: hidden;
    }

    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    .content {
      display: flex;
      flex-direction: row;
      overflow: hidden;
    }

    .main-container {
      width: 100vw;
      height: 100vh;
      background-color: #bf0033;
      text-align: center;
    }

    .text {
      font-weight: bold;
      color: white;
      margin-top: 12px;
    }

    .second-container {
      height: 0vh;
      width: 0vw;
      background-color: #126b00;
      text-align: center;
    }

    .stripes {
      height: 250px;
      width: 200px;
      background-size: 40px 40px;
    }

    .angled {
      background-color: #737373;
      background-image:
        linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%,
        transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%,
        transparent 75%, transparent);
    }

    .fold {
      height: 0;
      width: 0;
    }
    @media (screen-spanning: single-fold-vertical) {
      .main-container {
        width: env(fold-left);
        height: 100vh;
      }
      .fold {
        height: env(fold-height);
        width: env(fold-width);
      }
      .content {
        flex-direction: row;
      }
      .second-container {
        height: 100vh;
        width: calc(100vw - env(fold-left) - env(fold-width));
      }
    }

    @media (screen-spanning: single-fold-horizontal) {
      .main-container {
        width: 100vw;
        height: var(--zenbook-span1-height, calc(100vh - env(fold-top) - env(fold-height)));
      }
      .fold {
        height: env(fold-height);
        width: env(fold-width);
      }
      .content {
        flex-direction: column-reverse;
      }
      .second-container {
        height: var(--zenbook-span2-height, env(fold-top));
        width: 100vw;
      }
    }

    @media (screen-spanning: none) {
      .main-container {
        width: 100vw;
        height: 100vh;
      }
      .fold {
        height: 0;
        width: 0;
      }
      .content {
        flex-direction: row;
      }
      .second-container {
        height: 0;
        width: 0;
        display: none;
      }
    }
  `);

customElements.define("main-application", MainApplication);