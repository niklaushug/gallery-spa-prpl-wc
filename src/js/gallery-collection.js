import {LitElement, css, html} from 'lit-element';
import './gallery-image';
import {readableParagraph} from './styles'

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
  }

  static get properties() {
    return {
      name: { type: String },
      description: { type: String },
      images: { type: Array }
    };
  }

  render() {
    return html`
      <div class="gallery-collection">
        <div class="text">            
          <h1>${this.name}</h1>
          <p class="_readable">${this.description}</p>
        </div>
        <div class="layout">               
          ${this.images.map((item) => html`
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
      
      ${readableParagraph()}   
    `;
  }
}

customElements.define('gallery-collection', GalleryCollection);
