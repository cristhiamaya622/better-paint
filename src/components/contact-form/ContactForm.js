import { getRandomNumber, isValidEmail } from '../../utils.js'
class ContactForm {
  constructor({ title, label, cta, successMessage }) {
    this.id = getRandomNumber();
    this.title = title;
    this.label = label;
    this.cta = cta;
    this.successMessage = successMessage;
  }

  addEventListeners() {
    const component = document.getElementById(this.id);
    const [ form ] = component.getElementsByClassName('contact-form__form');
    form.addEventListener('submit', this.onSubmit.bind(this));
  }

  onSubmit(event) {
    event.preventDefault();
    const inputValue = document.getElementById('contact-form-email').value;
    if(isValidEmail(inputValue)) {
      alert(this.successMessage);
    };
  }

  render() {
    return `
      <section class="contact-form" id="${this.id}">
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