export default class HelloWorld extends HTMLElement {
  // connect component
  connectedCallback() {
    this.textContent = 'Hello World!';
    console.log(this, 'helllo');
  }
}
