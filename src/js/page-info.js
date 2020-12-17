import {LitElement, html, css} from 'lit-element';
import {readableParagraph} from './styles'

class PageInfo extends LitElement {
  render() {
    return html`
      <div class="layout">
        <h1>Info</h1>
        <p class="_readable">Culpa delectus, dolor eos excepturi molestiae nemo odit qui quo reiciendis voluptates. Animi dignissimos iusto maxime obcaecati omnis possimus quasi recusandae veritatis.</p>
      </div>
    `;
  }

  static get styles() {
    return css`
      .layout {
        display: flex;
        flex-direction: column;
        align-items: center;        
      }    
    
      ${readableParagraph()}
    `;
  }
}




customElements.define('page-info', PageInfo);