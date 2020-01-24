import { LitElement, html, css, property, query, customElement } from "../web_modules/lit-element.js";
import { classMap } from '../web_modules/lit-html/directives/class-map.js';

export class MainApplication extends LitElement {
  static styles = css`
    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    .wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .detail-container {
      width: 25%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: red;
    }

    .carousel-container {
      height: 100%;
      width: 100%;
      backdrop-filter: blur(5px) contrast(.8);
      -webkit-backdrop-filter: blur(5px) contrast(.8);
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .carousel-container.hidden {
      display: none;
    }

    #full-img {
      width: 50%;
    }

    .close {
      position: absolute;
      right: 20px;
      top: 20px;
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

    .gallery {
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      grid-template-rows: repeat(auto-fit, 1fr);
      grid-gap: 2px;
      background-color: black;
      grid-auto-flow: dense;
    }

    /*.loading {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(82, 82, 82, 0.836);
    }

    .lds-dual-ring {
      display: inline-block;
      width: 80px;
      height: 80px;
    }
    .lds-dual-ring:after {
      content: " ";
      display: block;
      width: 64px;
      height: 64px;
      margin: 8px;
      border-radius: 50%;
      border: 6px solid black;
      border-color: black transparent #fff transparent;
      animation: lds-dual-ring 1.2s linear infinite;
    }
    @keyframes lds-dual-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }*/

    .gallery-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  `;

  static get properties() { return {
    _carouselContainerClasses: { type: String }
  };}

  _full_img;

  firstUpdated() {
    this._full_img = this.shadowRoot.querySelector('#full-img');
  }

  constructor() {
    super();
    this._carouselContainerClasses = { hidden : true};
  }

  _showCarousel (e) {
    document.body.style.overflow = 'hidden';
    this._carouselContainerClasses = { hidden: false};
    let sourceImage = e.currentTarget.children[1].currentSrc;
    let path = sourceImage.replace('-l', '');
    this._full_img.setAttribute('src', path);
  }

  _closeCarousel () {
    document.body.style.overflow = '';
    this._carouselContainerClasses = { hidden: true};
  }

  render() {
    return html`
    <div id="wrapper">
    <div class="gallery">
      <figure class="gallery-item">
        <picture @click="${this._showCarousel}">
          <source srcset="images/air-balloon-l.webp" type="image/webp">
          <img data-src="images/air-balloon-l.jpg" class="gallery-img" alt="air balloon in the air">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._showCarousel}">
          <source srcset="images/asia-l.webp" type="image/webp">
          <img data-src="images/asia-l.jpg" class="gallery-img" alt="women on a boat in Asia">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._showCarousel}">
          <source srcset="images/china-l.webp" type="image/webp">
          <img data-src="images/china-l.jpg" class="gallery-img" alt="building in China">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._showCarousel}">
          <source srcset="images/church-l.webp" type="image/webp">
          <img data-src="images/church-l.jpg" class="gallery-img" alt="church">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._showCarousel}">
          <source srcset="images/city-l.webp" type="image/webp">
          <img data-src="images/city-l.jpg" class="gallery-img" alt="city">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._showCarousel}">
          <source srcset="images/waterfall2-l.webp" type="image/webp">
          <img data-src="images/waterfall2-l.jpg" class="gallery-img" alt="waterfall">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._showCarousel}">
          <source srcset="images/cloud-l.webp" type="image/webp">
          <img data-src="images/cloud-l.jpg" class="gallery-img" alt="Clouds">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._showCarousel}">
          <source srcset="images/desert-l.webp" type="image/webp">
          <img data-src="images/desert-l.jpg" class="gallery-img" alt="desert">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._showCarousel}">
          <source srcset="images/river2-l.webp" type="image/webp">
          <img data-src="images/river2-l.jpg" class="gallery-img" alt="river">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._showCarousel}">
          <source srcset="images/disney-l.webp" type="image/webp">
          <img data-src="images/disney-l.jpg" class="gallery-img" alt="disney dastle">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._showCarousel}">
          <source srcset="images/forest-l.webp" type="image/webp">
          <img data-src="images/forest-l.jpg" class="gallery-img" alt="forest">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._showCarousel}">
          <source srcset="images/greece-l.webp" type="image/webp">
          <img data-src="images/greece-l.jpg" class="gallery-img" alt="Greece">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._showCarousel}">
          <source srcset="images/city2-l.webp" type="image/webp">
          <img data-src="images/city2-l.jpg" class="gallery-img" alt="city" loading="lazy">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._showCarousel}">
          <source srcset="images/lake-l.webp" type="image/webp">
          <img data-src="images/lake-l.jpg" class="gallery-img" alt="lake" loading="lazy">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._showCarousel}">
          <source srcset="images/mountain-l.webp" type="image/webp">
          <img data-src="images/mountain-l.jpg" class="gallery-img" alt="mountain" loading="lazy">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._showCarousel}">
          <source srcset="images/new-york-l.webp" type="image/webp">
          <img data-src="images/new-york-l.jpg" class="gallery-img" alt="new york" loading="lazy">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._showCarousel}">
          <source srcset="images/pool-l.webp" type="image/webp">
          <img data-src="images/pool-l.jpg" class="gallery-img" alt="pool" loading="lazy">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._showCarousel}">
          <source srcset="images/restaurant-l.webp" type="image/webp">
          <img data-src="images/restaurant-l.jpg" class="gallery-img" alt="restaurant" loading="lazy">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._showCarousel}">
          <source srcset="images/river-l.webp" type="image/webp">
          <img data-src="images/river-l.jpg" class="gallery-img" alt="river" loading="lazy">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._showCarousel}">
          <source srcset="images/road-l.webp" type="image/webp">
          <img data-src="images/road-l.jpg" class="gallery-img" alt="road" loading="lazy">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._showCarousel}">
          <source srcset="images/sand-l.webp" type="image/webp">
          <img data-src="images/sand-l.jpg" class="gallery-img" alt="sand" loading="lazy">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._showCarousel}">
          <source srcset="images/sea-l.webp" type="image/webp">
          <img data-src="images/sea-l.jpg" class="gallery-img" alt="sea" loading="lazy">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._showCarousel}">
          <source srcset="images/sfo-l.webp" type="image/webp">
          <img data-src="images/sfo-l.jpg" class="gallery-img" alt="san francisco" loading="lazy">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._showCarousel}">
          <source srcset="images/stars-l.webp" type="image/webp">
          <img data-src="images/stars-l.jpg" class="gallery-img" alt="stars" loading="lazy">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._showCarousel}">
          <source srcset="images/tents-l.webp" type="image/webp">
          <img data-src="images/tents-l.jpg" class="gallery-img" alt="tents" loading="lazy">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._showCarousel}">
          <source srcset="images/waterfall-l.webp" type="image/webp">
          <img data-src="images/waterfall-l.jpg" class="gallery-img" alt="waterfall" loading="lazy">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._showCarousel}">
          <source srcset="images/mountain2-l.webp" type="image/webp">
          <img data-src="images/mountain2-l.jpg" class="gallery-img" alt="mountain" loading="lazy">
        </picture>
      </figure>
      <figure class="gallery-item">
        <picture @click="${this._showCarousel}">
          <source srcset="images/wave-l.webp" type="image/webp">
          <img data-src="images/wave-l.jpg" class="gallery-img" alt="wave" loading="lazy">
        </picture>
      </figure>
    </div>
    <div class="detail-container ${classMap(this._detailContainerClasses)}">
      <img id="full-img">Test
    </div>
  </div>
  <div class="carousel-container ${classMap(this._carouselContainerClasses)}">
    <div class="close" @click="${this._closeCarousel}"></div>
    <img id="full-img">
  </div>`;
  }
}

customElements.define("main-application", MainApplication);

/*document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = [].slice.call(document.querySelectorAll(".gallery-img"));
  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.srcset = lazyImage.dataset.srcset;
          let elem = lazyImage.parentElement.nextElementSibling;
          if (elem)
            elem.style.display = "none";
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Possibly fall back to a more compatible method here
  }
});*/