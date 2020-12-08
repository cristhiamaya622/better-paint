class Navigation {
  constructor({ logo, shoppingCart }) {
    this.logo = logo;
    this.shoppingCart = shoppingCart;
  }
  render() {
    return `
      <nav class="navigation">
        <a href="${this.logo.href}">
          <img class="navigation__logo"
               srcset="${this.logo.srcMobile} 767w, ${this.logo.srcDesktop}"
               src="${this.logo.srcMobile}"
               alt="${this.logo.alt}">
        </a>
        <a href="${this.shoppingCart.href}">
          <img src="${this.shoppingCart.src}" alt="${this.shoppingCart.alt}">
        </a>
      </nav>
    `;
  }
}

export default Navigation;