class Navigation {
  constructor({ logo, shoppingCart }) {
    this.logo = logo;
    this.shoppingCart = shoppingCart;
  }
  render() {
    return `
      <nav class="navigation">
        <a href="${this.logo.href}">
          <img src="${this.logo.src}" alt="${this.logo.alt}">
        </a>
        <a href="${this.shoppingCart.href}">
          <img src="${this.shoppingCart.src}" alt="${this.shoppingCart.alt}">
        </a>
      </nav>
    `;
  }
}

export default Navigation;