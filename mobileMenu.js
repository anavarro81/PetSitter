const mobileMenu$$ = document.getElementById('mobileMenu')

const linea1$$ = document.getElementById("line1")
const linea2$$ = document.getElementById("line2")
const linea3$$ = document.getElementById("line3")

const menuMobile = document.getElementById('mobileMenu');
const menuMobileBtn = document.getElementById('burger-menu-btn')
const menuMobileLinks = menuMobile.querySelectorAll('a')



menuMobileLinks.forEach( (link) => {

  link.addEventListener('click', () => {
    mobileMenu$$.style.display = "none"
    linea1$$.style.transform = "rotate(0deg)"
    linea2$$.style.transform = "scaleY(1)"
    linea3$$.style.transform = "rotate(0deg)"
  }

  )
})



export function loadMobileBUtton() {
    menuMobileBtn.addEventListener('click', () => {
    if (mobileMenu$$.style.display == "none") {
        mobileMenu$$.style.display = "block"     
        linea1$$.style.transform = "rotate(45deg)"
        linea2$$.style.transform = "scaleY(0)"
        linea3$$.style.transform = "rotate(-45deg)"
    } else {
        mobileMenu$$.style.display = "none"
        linea1$$.style.transform = "rotate(0deg)"
        linea2$$.style.transform = "scaleY(1)"
        linea3$$.style.transform = "rotate(0deg)"

    }

})
}


