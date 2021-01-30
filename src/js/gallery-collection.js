import {LitElement, css, html} from 'lit-element';
import './gallery-image';
import {readableParagraph} from './styles'

const SLICE_SIZE = 3;

class GalleryCollection extends LitElement {
  constructor() {
    super();
    this.description = '[description]';
    this.images = [{
      artist: '[artist 1]',
      artistLink: '[artistLink 1]',
      description: '[description 1]',
      url: 'https://via.placeholder.com/150x300',
    }, {
      artist: '[artist 2]',
      artistLink: '',
      description: '[description 2]',
      url: 'https://via.placeholder.com/400',
    }, {
      artist: '[artist 3]',
      artistLink: '[artistLink 3]',
      description: '',
      url: 'https://via.placeholder.com/300x150',
    }];
    this.name = '[name]';
    this.imagesRemaining = [];
    this.imagesLoading = [];
    this.imagesLoadingCount = SLICE_SIZE;
  }

  static get properties() {
    return {
      name: { type: String },
      description: { type: String },
      images: { type: Array }
    };
  }


  set images(val) {
    let oldValue = this.images;
    this._images = val;
    this.imagesLoading = val.slice(0, SLICE_SIZE);
    this.imagesRemaining = val.slice(SLICE_SIZE);
    this.imagesLoadingCount = SLICE_SIZE;
    this.requestUpdate('images', oldValue);
  }

  get images() {
    return this._images;
  }

  set imagesLoadingCount(val) {
    let oldValue = this.imagesLoadingCount
    if (val !== 0) {
      this._imagesLoadingCount = val;
    } else {
      this._imagesLoadingCount = SLICE_SIZE;
      this.imagesLoading = [...this.imagesLoading, ...this.imagesRemaining.slice(0, SLICE_SIZE)];
      this.imagesRemaining = this.imagesRemaining.slice(SLICE_SIZE);
      this.requestUpdate('imagesLoadingCount', oldValue);
    }
  }

  get imagesLoadingCount() {
    return this._imagesLoadingCount;
  }

  handleGalleryImageLoaded(event) {
    this.imagesLoadingCount--;
  }

  render() {
    return html`
      <div class="gallery-collection">
        <div class="text">            
          <h1>${this.name}</h1>
          <p class="_readable">${this.description}</p>
        </div>
        <div class="layout" @gallery-image-loaded="${this.handleGalleryImageLoaded}">               
          ${this.imagesLoading.map((item) => html`
            <gallery-image
              artist="${item.artist}"
              artistLink="${item.artistLink}"
              description="${item.description}"
              url="${item.url}"
            ></gallery-image>                       
          `)}              
        </div>      
      </div>
    `;
  }

  static get styles() {
    return css`  
      .gallery-collection > .text {
        display: flex;
        flex-direction: column;
        align-items: center;        
      }    

      .gallery-collection > .layout { 
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 3rem;                
       }

      @media (min-width: 600px) {
       .gallery-collection > .layout { 
          grid-template-columns: repeat(2, 1fr);
       }
      }
       
      @media (min-width: 1000px) {
       .gallery-collection > .layout { 
          grid-template-columns: repeat(3, 1fr);
       }
      }
      
      @media (min-width: 1500px) {
       .gallery-collection > .layout { 
          grid-template-columns: repeat(4, 1fr);
       }
      }    
      
      ${readableParagraph()}   
    `;
  }
}

customElements.define('gallery-collection', GalleryCollection);
