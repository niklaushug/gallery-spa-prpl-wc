import { LitElement, html } from 'lit-element';

class GalleryImage extends LitElement {
  constructor() {
    super();
    this.artist = 'Magic penguin';
    this.artistLink = '@magicpenguin';
    this.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit';
    this.url = 'https://via.placeholder.com/300';
  }

  static get properties() {
    return {
      artist: { type: String },
      artistLink: { type: String },
      description: { type: String },
      url: { type: String },
    };
  }

  render() {
    return html`
      <figure class="gallery-image">
        <img src="${this.url}" alt="picture of ${this.artist} on unsplash.com">
        <figcaption>${this.description}</figcaption>      
      </figure>
    `;
  }
}

customElements.define('gallery-image', GalleryImage);
