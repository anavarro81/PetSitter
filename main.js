import { loadPaginationButtons, showPage } from './testimonial.js';
import {loadMobileBUtton} from './mobileMenu.js'
import {scrollUp, toggleScrollButton} from './scrollMobilePage.js'

const scrollUpButton = document.getElementById('btn-scroll-to-top')

// Añadimos el evento onclick al boton para hacer scroll al inicio de la página. 
scrollUpButton.addEventListener('click', () => {
  scrollUp()
})

window.addEventListener('scroll', (scrollUpButton) => {
  toggleScrollButton()

})

document.addEventListener('DOMContentLoaded', () => {

  loadMobileBUtton();
  loadPaginationButtons();
  showPage(1);
  
});

















