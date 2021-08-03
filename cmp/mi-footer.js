class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Sanchez Martinez Ulises Efrain.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
