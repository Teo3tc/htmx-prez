export default class ProductForm extends HTMLElement {
  constructor() {
    super();
    this.hello = this;
  }

  connectedCallback() {}
  disconnectedCallback() {}

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(name, oldValue, newValue) {}

  adoptedCallback() {}
}
