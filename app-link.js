import {LitElement, html, css} from 'lit-element';
import { navigator } from 'lit-element-router';

class Link extends navigator(LitElement) {
  static get properties() {
    return {
      href: { type: String }
    };
  }
  constructor() {
    super();
    this.href = '';
  }
  render() {
    return html`
      <a href='${this.href}' @click='${this.linkClick}' class="app-link">
          <slot></slot>
      </a>
    `;
  }
  linkClick(event) {
    event.preventDefault();
    this.navigate(this.href);
  }

  static get styles() {
    return css`
      .app-link {
        color: snow;
        display: inline-block;
        text-decoration: none;        
        padding: 0 1rem;
        height: 40px;
        vertical-align: middle;
        line-height: 40px;       
      }
      
      .app-link:hover {
        background-color: olivedrab;                    
      }
    `;
  }
}

  customElements.define('app-link', Link);