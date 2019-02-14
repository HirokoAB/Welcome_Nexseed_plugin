let mySwiper = new Swiper('.swiper-container',{
    // direction:'horizontal',
    loop:true,
    // centerMode: true
    autoplay:{
          delay:3000,
  },        
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
  },

  slidesPerview:3,


});