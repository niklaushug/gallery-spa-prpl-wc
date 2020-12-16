import {LitElement, html, css} from 'lit-element';

class PageHome extends LitElement {
  render() {
    return html`
      <h1>Home</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa delectus, dolor eos excepturi molestiae nemo odit qui quo reiciendis voluptates. Animi dignissimos iusto maxime obcaecati omnis possimus quasi recusandae veritatis.</p>
    `;
  }
}

customElements.define('page-home', PageHome);