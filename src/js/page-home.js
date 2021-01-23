import {LitElement, css, html} from 'lit-element';
import {readableParagraph} from './styles'

class PageHome extends LitElement {
  render() {
    return html`
      <div class="layout">
        <img src="/img/camera-retro-solid.svg" alt="Logo" class="logo">
        <h1>Gallery App</h1>
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
               
      .logo {
        height: 30vh;
        width: 30vw;
      }   
      
      ${readableParagraph()}
    `;
  }
}

customElements.define('page-home', PageHome);