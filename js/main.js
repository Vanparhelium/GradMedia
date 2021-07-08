window.addEventListener('DOMContentLoaded', function () {

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
