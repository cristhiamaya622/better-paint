class ContactForm {
  constructor({ title, label, cta }) {
    this.title = title;
    this.label = label;
    this.cta = cta;
  }
  render() {
    return `
      <section class="contact-form">
        <h2 class="contact-form__title">${this.title}</h2>
        <form class="contact-form__form">
          <input type="text" id="contact-form-email" class="contact-form__form-input" required/>
          <label for="contact-form-email" class="contact-form__form-label">
            ${this.label}
          </label>
          <button class="contact-form__form-submit-btn">
            ${this.cta}
          </button>
        </form>
      </section>
    `;
  }
}

export default ContactForm;