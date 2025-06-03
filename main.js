import { loadPaginationButtons, showPage } from './testimonial.js';
import {loadMobileBUtton} from './mobileMenu.js'
import {scrollUp} from './scrollMobilePage.js'

const scrollUpButton = document.getElementById('btn-scroll-to-top')

// Añadimos el evento onclick al boton para hacer scroll al inicio de la página. 
scrollUpButton.addEventListener('click', () => {
  scrollUp()
})



document.addEventListener('DOMContentLoaded', () => {
  
  


  loadMobileBUtton();
  loadPaginationButtons();
  showPage(1);
  
});




// Se oculta el menu movil y se transforma en hamburguesa al pulsar
// en cualquiera de los links. 













