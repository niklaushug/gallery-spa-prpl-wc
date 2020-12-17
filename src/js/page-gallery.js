import {LitElement, html, css} from 'lit-element';
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

  attributeChangedCallback(name, oldValue, newValue) {
    super.attributeChangedCallback(name, oldValue, newValue);
    if (name === 'id' && Number.isInteger(parseInt(newValue)) && oldValue !== newValue) {
      this.getCollectionData();
    }
  }

  getCollectionData() {
    const id = this.id;
    const url = '/data/collections.json';

    fetch(url)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error(`Request for ${response.url} failed with status code ${response.status}.`);
        }
      })

      .then(data => {
        if (id in data) {
          const collection = data[id];
          this.name = collection.name || '';
          this.description = collection.description || '';
          this.images = collection.images || [];
        } else {
          throw new Error(`Collection with id ${id} does not exist in ${url}.`);
        }
      })

      .catch(error => console.error(error));
  }

  render() {
    return html`              
      <gallery-collection 
        name="${this.name}"
        description="${this.description}"
        .images="${this.images}"
      ></gallery-collection>
    `;
  }
}

customElements.define('page-gallery', PageGallery);