import {LitElement, html, css} from 'lit-element';
import { router } from 'lit-element-router';

import './app-link';
import './app-main';

class AppLayout extends router(LitElement) {
  static get properties() {
    return {
      route: { type: String },
      params: { type: Object },
      query: { type: Object }
    };
  }

  static get routes() {
    return [{
      name: 'home',
      pattern: '',
      data: { title: 'Home' }
    }, {
      name: 'info',
      pattern: 'info'
    }, {
      name: 'gallery',
      pattern: 'gallery/:id'
    }, {
      name: 'not-found',
      pattern: '*'
    }];
  }

  constructor() {
    super();
    this.route = '';
    this.params = {};
    this.query = {};
  }

  router(route, params, query, data) {
    this.route = route;
    this.params = params;
    this.query = query;
    console.log(route, params, query, data);
  }

  render() {
    return html`
    <div class="app-layout">
      <div class="bar">
        <app-link href="/">Home</app-link>
        <app-link href="/info">Info</app-link>
        <app-link href="/gallery/1">Gallery 1</app-link>
        <app-link href="/gallery/2">Gallery 2</app-link>        
      </div>
      
      <main class="content">
        <app-main active-route=${this.route}>
            <page-home route='home'></page-home>
            <page-info route='info'></page-info>
            <page-gallery route='gallery' id="${this.params.id}"></page-gallery>
            <h1 route='not-found'>Not Found </h1>
        </app-main>        
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