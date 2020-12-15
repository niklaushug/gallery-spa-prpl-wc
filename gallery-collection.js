import { LitElement, html } from 'lit-element';

class GalleryCollection extends LitElement {
  constructor() {
    super();
    this.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit';
    this.name = 'Lorem ipsum ';
    this.images = [{
        artist: 'Victoria Palacios',
        artistLink: '@toriamia',
        description: 'Glory and wonder here on little old earth. This shot is from a particularly magical hike through the Sequoia National Forest. We were so up high in the mountains that the clouds decided to settle around us and create a mystical fog all around us.',
        url: 'https://images.unsplash.com/photo-1508788397430-55907b348ba8',
      }, {
        artist: 'Andrew Neel',
        artistLink: '@andrewtneel',
        description: '',
        url: 'https://images.unsplash.com/photo-1477768663691-75454fd8e870',
      }, {
        artist: 'Casey Horner',
        artistLink: '@mischievous_penguins',
        description: 'Morning mystic',
        url: 'https://images.unsplash.com/photo-1514509353532-1419c0935d72',
      }]
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
}

customElements.define('gallery-collection', GalleryCollection);
