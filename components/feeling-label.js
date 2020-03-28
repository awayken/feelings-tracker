import { LitElement, css, html } from 'lit-element';

class App extends LitElement {
  static get properties() {
    return {
      label: { type: String },
    };
  }

  static getStyles() {
    return css`
      :root {
        display: inline-block;
        vertical-align: middle;
      }

      span {
        cursor: pointer;
      }
    `;
  }

  constructor() {
    super();
    this.label = '';
  }

  getEmoji() {
    switch (this.label) {
      case 'happy':
        return '😀 ';
      default:
        return '';
    }
  }

  render() {
    return html`
      <span title="Feeling &ldquo;${this.label}&rdquo;">${this.getEmoji()}${this.label}</span>
    `;
  }
}

customElements.define('feeling-label', App);
