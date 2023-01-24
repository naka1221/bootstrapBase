const  portfolioList = document.querySelectorAll('.potfolio-list__item');
const item = document.querySelectorAll('.portfolio-box');


for(let i=0; i<portfolioList.length; i++){
    portfolioList[i].addEventListener('click' , function(){
        for(let j=0;j<portfolioList.length;j++){
         
           portfolioList[j].classList.remove('active')
        }
        
    
      this.classList.add('active');
      const target= this.getAttribute('data-target')
    
      for(let k=0; k<item.length; k++){
        item[k].style.display='none';
        if(target == item[k].getAttribute('data-id')){
            item[k].style.display ='block'
        }
        if(target == "all"){
            item[k].style.display ='block'
        }
    } 
})
}

const toggle = document.querySelector('.navbar-toggle-btn')
const listToggle = document.querySelector('.list-toggle')
const closebtn = document.querySelector('.close')
const overlay = document.querySelector('.overlay-left')

// const body =document.querySelector("body")


toggle.addEventListener('click' , function(){
 listToggle.classList.remove('hid')
 listToggle.classList.add('open')
 toggle.classList.remove('show')
 toggle.classList.add('hide')
 closebtn.classList.remove('hide')
 closebtn.classList.add('show')
 overlay.classList.add('open')
 body.style.filter ='blur(0px)'

})


closebtn.addEventListener('click', function(){
    listToggle.classList.add('hid')
    listToggle.classList.remove('open')
    toggle.classList.remove('hide')
    toggle.classList.add('show')
    closebtn.classList.add('show')
    overlay.classList.remove('open')  
    frag=1
})




/////////////////////////////////////            licence-slider swiper      ////
let swiperlicense = new Swiper('.license-swiper', {
    
    slidesPerView: 6,
     spaceBetween: 15,
     loop: true,
   pagination: {
     el: '.license-pagination',
     type: 'progressbar',
    
   },
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
     // Responsive breakpoints
 breakpoints: {
   // when window width is >= 320px
   20: {
     slidesPerView: 1,
     spaceBetween: 20
   },
   // when window width is >= 480px
   480: {
     slidesPerView: 2,
     spaceBetween: 20
   },
   // when window width is >= 640px
  //  640: {
  //    slidesPerView: 3,
  //    spaceBetween: 30
  //  },
   760: {
     slidesPerView: 3,
     spaceBetween: 20
   },
   1200: {
    slidesPerView: 5,
    spaceBetween: 20
  }
 }
 
 });


 
////////////////////     Modal      ////////////
const licenseSlide =document.querySelectorAll('.license-slide__img')
const section =document.querySelectorAll('section')
let modal = document.querySelector('.modal-parent')
let closebtns = document.querySelector('.X')
let modalChild =document.querySelector('.modalChild')
let swiperwrapper = document.querySelector('.licence-Wrapper__slider')
let swiperProfileVideo = document.querySelector('.swiper-wrapper__profile-video')

licenseSlide.forEach(user =>
  user.addEventListener('click' , function(event) {
    console.log(event)
     let newImageModal = event.target

    let src = newImageModal.getAttribute("src")

    let newmodal =document.createElement("img")
    
    newmodal.setAttribute("src" , src )
    modalChild.append(newmodal)
    console.log(newmodal)
    //  modalChild.insertAdjacentElement('beforeend' , newImageModal)
  modal.style.display= 'flex'
  section.forEach(sec => {
    sec.style.filter ='blur(6px)'
  })
} 
))


function keyexe(event){
  if (event.keyCode === 27){
      modal.style.display= 'none'

      section.forEach(sep => {
      sep.style.filter ='blur(0px)'
      })
      modalChild.innerHTML="" 
  }
}


function closebn(){
  modal.style.display= 'none'
  section.forEach(sec => {
    sec.style.filter ='blur(0px)'
    })
  modalChild.innerHTML=""
}


document.body.addEventListener('keyup' , keyexe)
closebtns.addEventListener('click' , closebn)


