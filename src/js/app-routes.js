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

  extendTopRegion() {
    return this.route === 'home'
      ? html`<div slot="region-top">is Home</div>`
      : html`<div slot="region-top">Not Home</div>`
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