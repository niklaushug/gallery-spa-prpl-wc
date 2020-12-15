import { LitElement, html } from 'lit-element';

class GalleryList extends LitElement {
  render() {
    return html`
      <div class="gallery-list">
          <h2>Gallery - Lorem ipsum</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <ul class="layout">
            <li>dummy</li>
            <li>dummy</li>
            <li>dummy</li>          
          </ul>      
      </div>    `;
  }
}

customElements.define('gallery-list', GalleryList);
