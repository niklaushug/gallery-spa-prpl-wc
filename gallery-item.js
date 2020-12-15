import { LitElement, html } from 'lit-element';

class GalleryItem extends LitElement {
  render() {
    return html`
      <figure class="gallery-item">
        <img src="https://via.placeholder.com/150" alt="Dolor sit amet">
        <figcaption>Dolor sit amet</figcaption>      
      </figure>
    `;
  }
}

customElements.define('gallery-item', GalleryItem);
