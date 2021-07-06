window.addEventListener('DOMContentLoaded', function () {

  const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
    speed: 26000,
    centeredSlides: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  });




  // var swiper = new Swiper('.swiper-container', {
  //   slidesPerView: 3,
  //   direction: getDirection(),
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  //   on: {
  //     resize: function () {
  //       swiper.changeDirection(getDirection());
  //     },
  //   },
  // });

  // function getDirection() {
  //   var windowWidth = window.innerWidth;
  //   var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

  //   return direction;
  // }

  // var swiper = new Swiper(".mySwiper", {
  //   slidesPerView: 4,
  //   spaceBetween: 30,
  //   centeredSlides: true,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  // });


});
