import {LitElement, html, css} from 'lit-element';
import { router } from 'lit-element-router';

import './app-layout';

class AppRoutes extends router(LitElement) {
  static get properties() {
    return {
      route: { type: String },
      params: { type: Object },
      query: { type: Object }
    };
  }

  constructor() {
    super();
    this.route = '';
    this.params = {};
    this.query = {};
    this.head = undefined;
    this.headElements = {};
  }

  /**
   * Routes
   */

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

  router(route, params, query, data) {
    this.route = route;
    this.params = params;
    this.query = query;
    console.log('// route', route, params, query, data);
  }

  /**
   * Extend top region
   */

  extendTopRegion() {
    return this.route === 'home'
      ? html`<div slot="region-top">is Home</div>`
      : html`<div slot="region-top">Not Home</div>`
  }


  /**
   * Helpers
   */

  isHeadReady() {
    return (this.head instanceof HTMLElement);
  }

  /**
   * Create Links
   */

  appendHeadElements() {
    if (this.isHeadReady) {
      if (this.headElements[this.route]) {
        this.appendByReusingHeadElements();
      } else {
        this.appendByCloningHeadElementsFromDocumentFragment();
      }
    }
  }

  appendByReusingHeadElements() {
    for (let ref of this.headElements[this.route]) {
      this.head.appendChild(ref);
    }
  }

  appendByCloningHeadElementsFromDocumentFragment() {
    const newRoute = this.route;
    const headTemplate = document.getElementById(`route-${newRoute}`);
    this.headElements[newRoute] = [];
    for (let node of headTemplate.content.children) {
      const clone = document.importNode(node, true);
      const ref = this.head.appendChild(clone);
      this.headElements[newRoute].push(ref);
    }
  }

  removeHeadElements(route) {
    if (this.isHeadReady) {
      if (this.headElements[route]) {
        for (let ref of this.headElements[route]) {
          ref.remove();
        }
      }
    }
  }


  /**
   * Lifecycle
   */

  connectedCallback() {
    super.connectedCallback()
    this.head = document.querySelector('head');
  }

  updated(changedProperties) {
    if (changedProperties.has('route')) {
      const lastRoute = changedProperties.get('route')
      this.removeHeadElements(lastRoute);
      this.appendHeadElements();
    }
  }

  render() {
    return html`
      <app-layout active-route=${this.route}>        
          <page-home route='home'></page-home>
          <page-info route='info'></page-info>
          <page-gallery route='gallery' id="${this.params.id}"></page-gallery>
          <h1 route='not-found'>Not Found </h1>
      </app-layout>        
    `;
  }
}

customElements.define('app-routes', AppRoutes);