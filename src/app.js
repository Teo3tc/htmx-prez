export default async function app() {
  if (document.querySelector('#test')) {
    const { default: Rectangle } = await import('@/components/test.js');
    const carré = new Rectangle(10, 10);
    console.log(carré.area);
    console.log(Rectangle);
  }
  if (document.querySelector('#hello')) {
    const { default: HelloWorld } = await import('@/components/webcomponents.js');
    customElements.define('hello-world', HelloWorld);
  }
}
