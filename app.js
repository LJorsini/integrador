var swiper = new Swiper(".criticas-slider", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
       540: {
         slidesPerView: 1,
       },
       768: {
         slidesPerView: 2,
       },
       1024: {
         slidesPerView: 2.5,
       },
    },
 });


document.addEventListener("DOMContentLoaded", ()=>{
  const btnUp = document.getElementById("boton__up");

  btnUp.addEventListener('click', ()=>{
    window.scrollTo(0,0);
  });
  
  window.onscroll = ()=>{
      if(window.scrollY < 900){
        btnUp.classList.remove("ir-arriba-on")
      }else{
        btnUp.classList.add("ir-arriba-on")
      }
  }
})