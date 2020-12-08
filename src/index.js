import Navigation from "./components/navigation/Navigation.js";
import Banner from "./components/banner/Banner.js";
import ContactForm from "./components/contact-form/ContactForm.js";
import Footer from "./components/footer/Footer.js";
import fetchData from "./services/service.js";

const { get } = fetchData();

const fetchedData = [
  get('navigation'),
  get('banner'),
  get('contactForm'),
  get('footer')
];

Promise.allSettled(fetchedData).then(
  function renderWebsite([ navigationData, bannerData, contactFormData, footerData ]) {
    const toBeRendered = [
      new Navigation(navigationData.value),
      new Banner(bannerData.value),
      new ContactForm(contactFormData.value),
      new Footer(footerData.value)
    ];

    const html = toBeRendered.map(component => component.render()).join('');

    document.body.insertAdjacentHTML('afterbegin', html);
  }
);