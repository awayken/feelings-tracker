import { LitElement, html } from 'lit-element';

import './feeling-label.js';

class App extends LitElement {
  render() {
    return html`
      <!-- template content -->
      <p>A paragraph</p>
    `;
  }
}

customElements.define('feelings-tracker', App);
