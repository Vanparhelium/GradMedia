window.addEventListener('DOMContentLoaded', function () {

  if (document.querySelector('#menu')) {
  document.querySelector('#menu').addEventListener('click', function () {
    document.querySelector('.menu__list').classList.toggle('menu__list_visible');
    document.querySelector('#burger').classList.toggle('burger');
    document.querySelector('#burger').classList.toggle('burger__close');
  });
  };

  if (document.querySelector('#callback')) {
    const modal = document.querySelector('#modalCall');
    const modalBtn = document.querySelector('#callback');
    const closeBtn = document.querySelector('#close');
    const modalBg = document.querySelector('.modal-bg');
    const recall = document.querySelector('#recall');
    const orderBtn = document.querySelector('.btn__order');
    const siteBtn = document.querySelector('#siteBtn');
    const modalSite = document.querySelector('#modalSite')
    const closeOrder = document.querySelector('#closeOrder');



    modalBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', outsideClick);

    orderBtn.addEventListener('click', openModalSite);
    siteBtn.addEventListener('click', openModalSite);
    closeOrder.addEventListener('click', closeModalSite);


    function openModal() {
      modal.classList.add('modal__active');
      document.querySelectorAll('.modal__content').forEach(function (remActive) {
        remActive.classList.remove('modal__content_active');
      });
      modalBg.classList.add('modal__active');
      document.querySelector('.modal__content-step').classList.add('modal__content_active');
    };

    recall.addEventListener('click', function() {
      document.querySelector('.modal__content-step').classList.remove('modal__content_active');
      document.querySelector('.modal__content-step2').classList.add('modal__content_active');
    });

    function closeModal() {
      modal.classList.remove('modal__active');
      modalBg.classList.remove('modal__active');
    };

    function openModalSite() {
      modalSite.classList.add('modal__active');
      modalBg.classList.add('modal__active');
    };

    function closeModalSite() {
      modalSite.classList.remove('modal__active');
      modalBg.classList.remove('modal__active');
    };

    function outsideClick(e) {
      if (e.target === modalBg) {
        modal.classList.remove('modal__active');
        modalSite.classList.remove('modal__active');
        modalBg.classList.remove('modal__active');
      };
    };
  };


  if (document.querySelector('.swiper-container')) {
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 6,
      slidesPerGroup: 6,
    speed: 20000,
    centeredSlides: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      stopOnLastSlide: false,
    },
  });
};

  if (document.querySelector('#map')) {
    ymaps.ready(init);
    function init() {
      var myMap = new ymaps.Map("map", {
        center: [43.269, 76.927],
        zoom: 17,
        controls: []
      });

        var myPlacemark = new ymaps.Placemark([43.268707074529516,76.92616949999999], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/marker.png',
        iconImageSize: [89, 89],
        iconImageOffset: [-3, -42]
      });
      myMap.geoObjects.add(myPlacemark);
    };
  };


});
