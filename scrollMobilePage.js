const scrollUpButton = document.getElementById('btn-scroll-to-top')

export function scrollUp() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

export function toggleScrollButton () {
  if (window.scrollY === 0) {
    scrollUpButton.style.display = 'none'
  } else if (window.scrollY > 580) {
    scrollUpButton.style.display = 'block'
  } 

}