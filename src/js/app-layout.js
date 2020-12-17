import {LitElement, css, html} from 'lit-element';
import { outlet } from 'lit-element-router';
import './app-link';

class AppLayout extends outlet(LitElement) {
  render() {
    return html`
    <div class="app-layout">
      <div class="bar">
        <app-link href="/">Home</app-link>
        <app-link href="/info">Info</app-link>
        <app-link href="/gallery/1">Gallery 1</app-link>
        <app-link href="/gallery/2">Gallery 2</app-link>
        <app-link href="/gallery/3">Gallery 3</app-link>        
      </div>
            
      <slot name="region-top"></slot>
            
      <main class="content">
        <slot></slot>
      </main>
    </div>
    `;
  }

  static get styles() {
    return css`    
      .app-layout {
        display: flex;
        flex-direction: column;
        height: 100vh;
      }
    
      .app-layout > .bar {
        background-color: darkolivegreen;
        display: flex;
        justify-content: center;
        gap: 1rem;
        height: 40px;
      }
    
      .app-layout > .content {
        background-color: honeydew;
        padding: 5rem 3rem 3rem 3rem;
        height: calc(100vh - 40px);  
        overflow-y: auto;    
        border-bottom: 10px solid darkolivegreen;  
      }
    `;
  }
}

customElements.define('app-layout', AppLayout);