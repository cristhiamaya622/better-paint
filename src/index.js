import Navigation from "./components/navigation/Navigation.js";
import Banner from "./components/banner/Banner.js";
import ContactForm from "./components/contact-form/ContactForm.js";
import Footer from "./components/footer/Footer.js";
import fetchData from "./services/service.js";

function addEventListeners({ main }) {
  main.forEach(component => component.addEventListeners && component.addEventListeners());
}

function renderComponents({ navigation, main, footer }) {
  const navigationHTML = navigation.render();
  const mainHTML = `<main>${main.map(component => component.render()).join('')}</main>`;
  const footerHTML = footer.render();

  const html = [ navigationHTML, mainHTML, footerHTML ];
  document.body.insertAdjacentHTML('afterbegin', html.join(''));
}

(function init() {

  const { get } = fetchData();

  const fetchedData = [
    get('navigation'),
    get('banner'),
    get('contactForm'),
    get('footer')
  ];

  Promise.allSettled(fetchedData).then(
    function renderWebsite([ navigationData, bannerData, contactFormData, footerData ]) {

      const components = {
        navigation: new Navigation(navigationData.value),
        main: [ new Banner(bannerData.value),
                new ContactForm(contactFormData.value) ],
        footer: new Footer(footerData.value)
      }

      renderComponents(components);
      addEventListeners(components);
    }
  );
})();