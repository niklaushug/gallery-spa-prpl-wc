import {LitElement, css, html} from 'lit-element';

class PageHome extends LitElement {
  render() {
    return html`
      <div class="layout">
        <img src="/img/camera-retro-solid.svg" alt="Logo" class="logo">
        <h1>Home</h1>
        <p class="_readable">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa delectus, dolor eos excepturi molestiae nemo odit qui quo reiciendis voluptates. Animi dignissimos iusto maxime obcaecati omnis possimus quasi recusandae veritatis.</p>
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
      
      ._readable {
        max-width: 70ch;
        line-height: 1.4;
      }
    `;
  }
}

customElements.define('page-home', PageHome);