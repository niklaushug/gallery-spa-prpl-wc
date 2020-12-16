import {LitElement, css, html} from 'lit-element';

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
        <h2>${this.name}</h2>
        <p>${this.description}</p>
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
    `;
  }
}

customElements.define('gallery-collection', GalleryCollection);
