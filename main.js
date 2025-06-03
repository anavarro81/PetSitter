import { loadPaginationButtons, showPage } from './testimonial.js';
import {loadMobileBUtton} from './mobileMenu.js'
import {scrollUp} from './scrollMobilePage.js'


document.addEventListener('DOMContentLoaded', () => {
  scrollUp()
  loadMobileBUtton()
  loadPaginationButtons();
  showPage(1);
  
});




// Se oculta el menu movil y se transforma en hamburguesa al pulsar
// en cualquiera de los links. 













