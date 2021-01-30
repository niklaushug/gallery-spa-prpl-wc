import { LitElement, css, html } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map';

class GalleryLightbox extends LitElement {
  constructor() {
    super();
    this.showLightbox = false;
    this.url = 'https://via.placeholder.com/300';
  }

  static get properties() {
    return {
      showLightbox: { type: Boolean },
      url: { type: String }
    };
  }

  handleOpen(event) {;
    this.showLightbox = true;
  }

  handleClose(event) {
    this.showLightbox = false;
  }

  render() {
    return html`
      <div
        class="lightbox"
        @click="${this.handleClose}"
        style="${styleMap({
          display: this.showLightbox ? 'flex' : 'none'
        })}">
        <img 
          class="image"
          src="${this.url}">                            
      </div>
    `;
  }

  static get styles() {
    return css`      
      .lightbox {
        background: rgba(0,0,0,.9);
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        height: 100%;
        left: 0;
        padding: 65px;
        position: fixed;
        top: 0;
        width: 100%;
      }
      
      .lightbox::after {
        content: '\\02DF';
        position: absolute;
        right: 20px;
        top: 20px;
        color: #fff;
        font-size: 50px;
        line-height: 1;
      }
      
      .lightbox:hover::after {
        color: #ccc;
      }
      
      .lightbox > .image {
        border: 5px solid white;
        max-height: 100%;
        max-width: 100%;
      }      
    `;
  }
}

customElements.define('gallery-lightbox', GalleryLightbox);
