import { loadPaginationButtons, showPage } from './testimonial.js';
import {loadMobileBUtton} from './mobileMenu.js'
import {scrollUp} from './scrollMobilePage.js'

const scrollUpButton = document.getElementById('btn-scroll-to-top')

// Añadimos el evento onclick al boton para hacer scroll al inicio de la página. 
scrollUpButton.addEventListener('click', () => {
  scrollUp()
})

window.addEventListener('scroll', () => {
  console.log('He hecho scroll...')

  if (window.scrollY === 0) {
    scrollUpButton.style.display = 'none'
  } else if (window.scrollY > 580) {
    scrollUpButton.style.display = 'block'
  } 

  console.log('window.scrollY ', window.scrollY)

  

})

document.addEventListener('DOMContentLoaded', () => {

  loadMobileBUtton();
  loadPaginationButtons();
  showPage(1);
  
});

















