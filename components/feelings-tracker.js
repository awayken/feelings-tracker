// import whatever we need

import { LitElement, html } from 'lit-element';

class App extends LitElement {
  render() {
    return html`
      <!-- template content -->
      <p>A paragraph</p>
    `;
  }
}

customElements.define('feelings-tracker', App);
