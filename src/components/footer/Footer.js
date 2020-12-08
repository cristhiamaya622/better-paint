class Footer {
  constructor({ links, trademark, allRightsReserved }) {
    this.links = links;
    this.trademark = trademark;
    this.allRightsReserved = allRightsReserved;
  }

  getLinks({ href, label }) {
    return `
    <li class="footer__group-list-item">
      <a class="footer__group-link" href="${href}">${label}</a>
    </li>`;
  }

  getGroupLinks({ title, sublinks }) {
    return `
      <section class="footer__group">
        <h2 class="footer__group-title">${title}</h2>
        <ul class="footer__group-list">
          ${sublinks.map(this.getLinks).join('')}
        </ul>
      </section>
    `;
  }

  render() {
    return `
      <footer class="footer">
        ${this.links.map(this.getGroupLinks.bind(this)).join('')}
        <section class="footer__group">
          <p class="footer__group-trademark">
            ${this.trademark}
          </p>
          <p class="footer__group-all-rights-reserved">
            ${this.allRightsReserved}
          </p>
        </section>
      </footer>
    `;
  }
}

export default Footer;