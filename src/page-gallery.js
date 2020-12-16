import {LitElement, html, css} from 'lit-element';
import collections from '../collections';
import './gallery-collection';

class PageGallery extends LitElement {
  constructor() {
    super();
    this.id = 0;
    this.name = '';
    this.description = '';
    this.images = [];

  }

  static get properties() {
    return {
      id: {type: Number},
      name: { type: String },
      description: { type: String },
      images: { type: Array }
    }
  }

  attributeChangedCallback(name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval);
    if (name === 'id') {
      this.getCollectionData();
    }
  }

  getCollectionData() {
    if (this.id in collections) {
      const collection = collections[this.id];
      this.name = collection.name || '';
      this.description = collection.description || '';
      this.images = collection.images || [];

    };
  }

  render() {
    return html`
      <h1>Gallery ${this.id}</h1>              
      <gallery-collection 
        name="${this.name}"
        description="${this.description}"
        .images="${this.images}"
      ></gallery-collection>
    `;
  }
}

customElements.define('page-gallery', PageGallery);