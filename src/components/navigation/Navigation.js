class Navigation {
  constructor({ title, logo, shoppingCart }) {
    this.logo = logo;
    this.shoppingCart = shoppingCart;
    this.title = title;
  }

  render() {
    return `
      <nav class="navigation">
        <a href="${this.logo.href}" title="${this.title}">
          <img class="navigation__logo"
               srcset="${this.logo.srcMobile} 767w, ${this.logo.srcDesktop}"
               src="${this.logo.srcMobile}"
               alt="${this.logo.alt}">
        </a>
        <a href="${this.shoppingCart.href}" title="${this.shoppingCart.alt}">
          <img src="${this.shoppingCart.src}" alt="${this.shoppingCart.alt}">
        </a>
      </nav>
    `;
  }
}

export default Navigation;