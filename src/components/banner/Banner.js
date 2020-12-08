class Banner {
  constructor({ title, img, description, cta }) {
    this.title = title;
    this.description = description;
    this.img = img;
    this.cta = cta;
  }
  render() {
    return `
      <section class="banner" role="banner">
        <img class="banner__image" src="${this.img.src}" alt="${this.img.alt}">
        <div class="banner__content">
          <h1 class="banner__content-title">${this.title}</h1>
          <p class="banner__content-description">${this.description}</p>
          <button class="banner__content-cta">
            ${this.cta}
          </button>
        </div>
      </section>
    `;
  }
}

export default Banner;