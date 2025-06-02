// import commentsData from './data/comment.js';
let pagination$$ =document.getElementById("pagination");
const commentaryWrapper = document.getElementById('commentary-block-89');

let pageButtons$$ = document.getElementsByClassName("vet-section-two--pag-btn")
const prevButton = ` <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.375 26.25L13.625 17.5L22.375 8.75" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>`
const nextButton = `<svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.625 26.25L22.375 17.5L13.625 8.75" stroke="#44074A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> `

const mobileMenu$$ = document.getElementById('mobileMenu')

const linea1$$ = document.getElementById("line1")
const linea2$$ = document.getElementById("line2")
const linea3$$ = document.getElementById("line3")



const testimonialperpage = 4
let currentPage = 1
const totalPages = Math.ceil(commentsData.length / testimonialperpage);


const showMenu = () => {
  
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


}



const showPage = (actPage) => {  

  console.log('actPage ', actPage)
  
  // Evita que consulte páginas que no existan. 
  if (actPage < 1 || actPage > totalPages) return; 

  currentPage = actPage
  
  if (currentPage == 1) {    
    const prevSvg = document.querySelector('#prevBtn svg');
    prevSvg.setAttribute('stroke', '#444444')
  } else {    
    const prevSvg = document.querySelector('#prevBtn svg');    
    prevSvg.setAttribute('stroke', 'red')
    
  }

  if (currentPage == totalPages) {
    const nextBtn = document.getElementById('nextBtn')
    nextBtn.disabled = true
    
  }
 
  
  
  
  
  commentaryWrapper.innerHTML = ""
  
  let startPage = (actPage - 1) * testimonialperpage
  let endPage = (actPage * testimonialperpage) - 1

  

  console.log('startPage ', startPage)
  console.log('endPage ', endPage)
  console.log('commentsData  > ', commentsData.length )

  
  // Se verifica que el indice sea menor que el numeo de testimonios y menor que el numero total de registros
  for (let i=startPage; i <= endPage && i < commentsData.length; i++) {  
    const { name, stars, comment } = commentsData[i]
    commentaryWrapper.innerHTML += getTestimonialBox(name, stars, comment);
  } 

  setCurrentPageBtnActive(actPage)

}


const loadPaginationButtons = () => {

  const totalPages = Math.ceil(commentsData.length / testimonialperpage)
  
  

  pagination$$.innerHTML = ""
  

  // Si es menos de una página no muestro botones
  if (totalPages < 1) {
    return
  }

  if (totalPages > 1 &&  totalPages <= 3) {

    

    for (let i=0; i < totalPages-3; i++) {
      const btn = generateNewButton(i, () => showPage(i), false, i== 0? true: false)
      pagination$$.appendChild(btn)
      commentaryWrapper.innerHTML += getTestimonialBox(name, stars, comment);
    }

    // label, onClick, disable = false, isActve = false
  }

  
  
  if (totalPages > 3) {
    
    let btn = generateNewButton('prev', () => showPage(currentPage-1), false, false)
    pagination$$.appendChild(btn)

    for (let i=1; i<=3; i++) {
      let btn = generateNewButton(i, () => showPage(i), false , i ==0 ? true : false )       
      pagination$$.appendChild(btn)     
    }

    const ellipsis = document.createElement('div')
    ellipsis.innerHTML = "<span class='vet_sub2'> ... </span>"
    pagination$$.appendChild(ellipsis)

    // Boton para la última página. 
    btn = generateNewButton(totalPages, () => showPage(totalPages), false , true )
    pagination$$.appendChild(btn)




    

    btn = generateNewButton('next', () => showPage(currentPage+1), true)
    pagination$$.appendChild(btn)
  }

}


const setCurrentPageBtnActive = (nPage) => {  

  

  // Se convierte a array para poder recorrerlo con forEach
  const pageButtons = Array.from(
    document.getElementsByClassName("vet-section-two--pag-btn")
  );

  
  pageButtons.forEach((btn) => {
    
    // Se quita el estilo activo a todos los botones
    btn.classList.remove('vet-section-two--pag-btn-active')

  })

  pageButtons$$[nPage-1].classList.add('vet-section-two--pag-btn-active')

}




const getTestimonialBox = (name, stars, comment) => {

    return  `<div class="vet-section-two--second-block--element">
          <div class="vet-section-two--second-block--element__icon">            
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M24.0106 4.78123C24.1019 4.59678 24.2429 4.44151 24.4178 4.33295C24.5926 4.22439 24.7944 4.16687 25.0002 4.16687C25.206 4.16687 25.4077 4.22439 25.5826 4.33295C25.7574 4.44151 25.8985 4.59678 25.9898 4.78123L30.8023 14.5291C31.1193 15.1707 31.5873 15.7258 32.1661 16.1468C32.7448 16.5677 33.4171 16.8419 34.1252 16.9458L44.8877 18.5208C45.0916 18.5504 45.2832 18.6364 45.4408 18.7691C45.5984 18.9019 45.7156 19.0761 45.7794 19.2721C45.8431 19.468 45.8507 19.6779 45.8014 19.878C45.752 20.078 45.6477 20.2603 45.5002 20.4041L37.7168 27.9833C37.2035 28.4835 36.8195 29.101 36.5977 29.7825C36.376 30.4641 36.3232 31.1893 36.4439 31.8958L38.2814 42.6041C38.3174 42.808 38.2954 43.0178 38.2179 43.2097C38.1403 43.4017 38.0104 43.5679 37.843 43.6896C37.6755 43.8112 37.4772 43.8833 37.2707 43.8977C37.0642 43.912 36.8579 43.8681 36.6752 43.7708L27.0543 38.7125C26.4204 38.3796 25.7151 38.2057 24.9991 38.2057C24.2831 38.2057 23.5778 38.3796 22.9439 38.7125L13.3252 43.7708C13.1425 43.8675 12.9364 43.911 12.7303 43.8963C12.5241 43.8817 12.3262 43.8095 12.1591 43.6879C11.992 43.5664 11.8623 43.4004 11.7849 43.2088C11.7074 43.0172 11.6853 42.8077 11.721 42.6041L13.5564 31.8979C13.6777 31.1911 13.6251 30.4654 13.4034 29.7834C13.1816 29.1014 12.7973 28.4836 12.2835 27.9833L4.50017 20.4062C4.35141 20.2625 4.24599 20.08 4.19592 19.8793C4.14586 19.6786 4.15316 19.4679 4.217 19.2712C4.28084 19.0745 4.39864 18.8997 4.557 18.7666C4.71535 18.6336 4.90788 18.5477 5.11267 18.5187L15.8731 16.9458C16.582 16.8427 17.2551 16.5689 17.8347 16.1479C18.4143 15.7269 18.8829 15.1714 19.2002 14.5291L24.0106 4.78123Z"
                  stroke="#71216A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span class="vet_h3"> ${stars} / 5 </span>
          </div>            
            <p class="vet_reg1">            
              ${comment}
            </p>
            <p class="vet-section-two--second-block--element__ownerName"> ${name} </p>       
        </div>`


}

const calcNumPage = (testimonials) => {

  let pages = testimonials.length / testimonialperpage

  switch (pages) {
  case pages < 1:
    
    break;
  case (pages > 1 && pages <=3):    
    
    break
  default:
    
    break;
}



}

const generateNewButton = (label, onClick, disable = false, isActive = false) => {


  if (typeof label === 'number') {
    const btn = document.createElement('button')  
    btn.className = `vet-section-two--pag-btn  ${isActive ? 'vet-section-two--pag-btn-active' : ''}`
    btn.disabled = disable
    btn.innerHTML = `<span class="vet_sub2"> ${label} </span>` 
    btn.onclick = onClick
    return btn
  } else if (label === 'prev') 
    {
      const arrow = document.createElement('btn')  
      arrow.innerHTML = prevButton
      arrow.onclick = onClick
      arrow.id = 'prevBtn'        
      return arrow
    } else {
      const arrow = document.createElement('btn')  
      arrow.innerHTML = nextButton        
      arrow.onclick = onClick
      arrow.id = 'nextBtn' 
      return arrow
    }

  }


  






document.addEventListener('DOMContentLoaded', () => {

  loadPaginationButtons()
  showPage(1)
  
  
})

