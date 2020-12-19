import {LitElement, html, css} from 'lit-element';
import { router } from 'lit-element-router';

import './app-layout';

const ASSETS_PER_ROUTE = {
  home: [{
    url: '/page-home.js',
    onRouteAttributes: ['defer'],
    offRouteAttributes: ['preload'],
    ref: undefined,
  }, {
    url: '/test.css',
    onRouteAttributes: [],
    offRouteAttributes: ['preload'],
    ref: undefined,
  }],
  info: [{
    url: '/page-info.js',
    onRouteAttributes: ['defer'],
    offRouteAttributes: [],
    ref: undefined,
  }],
  gallery: [{
    url: '/page-gallery.js',
    onRouteAttributes: [],
    offRouteAttributes: [],
    ref: undefined,
  }],
};

const ASSET_TYPES = {
  js: {
    regex: /.js/,
    tagName: 'script',
    urlAttr: 'src',
  },
  css: {
    regex: /.css/,
    tagName: 'link',
    urlAttr: 'href',
  }
};

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
    this.assetsPerRoute = ASSETS_PER_ROUTE;
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

  createHeadElements() {
    if (this.isHeadReady) {
      for (let routeName in this.assetsPerRoute) {
        this.createHeadElement(routeName);
      }
    }
  }

  createHeadElement(routeName) {
    const assets = this.assetsPerRoute[routeName];

    for(let asset of assets) {
      for (let assetType of Object.values(ASSET_TYPES)) {
        if (asset.url.match(assetType.regex)) {
          let newElement = document.createElement(assetType.tagName);
          newElement.setAttribute(assetType.urlAttr, asset.url);
          asset.ref = this.head.appendChild(newElement);
        }
      }
    }
  }

  /**
   * Update Links
   */

  updateHeadElements(route) {
    if (this.isHeadReady) {
      for (let routeName in this.assetsPerRoute) {
        const keyMatchRoute = (routeName === this.route);
        this.updateHeadElement(routeName, keyMatchRoute);
      }
    }
  }

  updateHeadElement(routeName, keyMatchRoute) {
    const assets = this.assetsPerRoute[routeName];

    for (let asset of assets) {
      const onAttrs = asset.onRouteAttributes;
      const offAttrs = asset.offRouteAttributes;

      const addAttrs = keyMatchRoute ? onAttrs : offAttrs;
      for (let attr of addAttrs) {
        asset.ref.setAttribute(attr, attr);
      }

      const removeAttrs = keyMatchRoute ? offAttrs : onAttrs;
      for (let attr of removeAttrs) {
        asset.ref.removeAttribute(attr, attr);
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

  firstUpdated(changedProperties) {
    if (changedProperties.has('route')) {
      this.createHeadElements();
      this.updateHeadElements(changedProperties.route);
    }
  }

  updated(changedProperties) {
    if (changedProperties.has('route')) {
      this.updateHeadElements(changedProperties.route);
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