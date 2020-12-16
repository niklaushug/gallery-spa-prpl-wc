import { LitElement, css, html } from 'lit-element';

class GalleryImage extends LitElement {
  constructor() {
    super();
    this.artist = '[artist]';
    this.artistLink = '[artistLink]';
    this.description = '[description]';
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
        <img src="${this.url}" alt="picture of ${this.artist} on unsplash.com" class="image">
        <figcaption>
          <blockquote class="image-caption">
             <p class="description">${this.description}</p>
             <cite class="person">- ${this.artist}</cite>          
          </blockquote>
        </figcaption>      
      </figure>
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
