import { LitElement, css, html } from 'lit-element';
import './gallery-lightbox';

class GalleryImage extends LitElement {
  constructor() {
    super();
    this.artist = '[artist]';
    this.description = '[description]';
    this.url = 'https://via.placeholder.com/300';
  }

  static get properties() {
    return {
      artist: { type: String },
      description: { type: String },
      url: { type: String },
    };
  }

  handleLoad(event) {
    const imageLoaded = new CustomEvent('gallery-image-loaded', {
      detail: {
        message: 'An image was loaded by gallery-image.js.'
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(imageLoaded);
  }

  handleChildComponent() {
    this.shadowRoot.querySelector('gallery-lightbox').handleOpen();
  }

  render() {
    return html`
      <figure class="gallery-image">
        <img 
          src="${this.url}"
          alt="picture of ${this.artist} on unsplash.com"
          class="image"
          @click="${this.handleChildComponent}"
          @load="${this.handleLoad}">
        <figcaption>
          <blockquote class="image-caption">
             <p class="description">${this.description}</p>
             <cite class="person">- ${this.artist}</cite>          
          </blockquote>
        </figcaption>
      </figure>
      <gallery-lightbox .url="${this.url}" />
    `;
  }

  static get styles() {
    return css`
      .gallery-image { 
        background-color: snow;
        box-shadow: 
          2px 4px 6px 6px rgba(80,80,80,0.2),
          1px 2px 4px 4px rgba(80,80,80,0.2),
          0 0 2px 2px rgba(80,80,80,0.2);
        padding: 2rem;
        margin: 0;
       }
       
      .gallery-image > .image { 
        max-width: 100%;      
      }
      
      .image-caption {
        margin: 0;
      }
      
      .image-caption > .person {
        text-align: right;
        display: block;
      }   
    `;
  }
}

customElements.define('gallery-image', GalleryImage);
