import {LitElement, html, css} from 'lit-element';

class PageGallery extends LitElement {
  constructor() {
    super();
    this.id = 0;
  }

  static get properties() {
    return {
      id: {type: Number}
    }
  }

  render() {
    return html`
      <h1>Gallery ${this.id}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa delectus, dolor eos excepturi molestiae nemo odit qui quo reiciendis voluptates. Animi dignissimos iusto maxime obcaecati omnis possimus quasi recusandae veritatis.</p>
      <gallery-collection name="Lovely trees" description="Would like to stroll through the forest."></gallery-collection>
    `;
  }
}

customElements.define('page-gallery', PageGallery);