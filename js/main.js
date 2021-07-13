window.addEventListener('DOMContentLoaded', function () {

  if (document.querySelector('#menu')) {


    window.onscroll = function () {
      let menuBg = document.querySelector('.header__container');
      let scroll = window.pageYOffset;
      let coord = document.documentElement.clientHeight;
      if (scroll > coord) {
        menuBg.classList.add('header__container_gray');
        menuBg.style.top = 0;
      };
      if (scroll < coord) {
        menuBg.classList.remove('header__container_gray');
      };
    };

    if (document.querySelector('#siteBtn')) {
      const siteBtn = document.querySelector('#siteBtn');
      siteBtn.addEventListener('click', openModalSite);
    }

    const menu = document.querySelector('.menu__list');
    const modal = document.querySelector('#modalCall');
    const modalBtn = document.querySelector('#callback');
    const closeBtn = document.querySelector('#close');
    const modalBg = document.querySelector('.modal-bg');
    const recall = document.querySelector('#recall');
    const orderBtn = document.querySelector('.btn__order');
    const modalSite = document.querySelector('#modalSite')
    const closeOrder = document.querySelector('#closeOrder');


    modalBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', outsideClick);

    orderBtn.addEventListener('click', openModalSite);
    closeOrder.addEventListener('click', closeModalSite);


    function openModal() {
      modal.style.display = 'block';
      modal.classList.add('active');
      document.querySelectorAll('.modal__content').forEach(function (remActive) {
        remActive.classList.remove('modal__content_active');
      });
      modalBg.classList.add('active');
      document.querySelector('.modal__content-step').classList.add('modal__content_active');
    };

    recall.addEventListener('click', function() {
      document.querySelector('.modal__content-step').classList.remove('modal__content_active');
      document.querySelector('.modal__content-step2').classList.add('modal__content_active');
    });

    function closeModal() {
      modal.style.display = 'none';
      modal.classList.remove('active');
      modalBg.classList.remove('active');
    };

    function openModalSite() {
      modalSite.style.display = 'block';
      modalSite.classList.add('active');
      modalBg.classList.add('active');
    };

    function closeModalSite() {
      modalSite.style.display = 'none';
      modalSite.classList.remove('active');
      modalBg.classList.remove('active');
    };

    function outsideClick(e) {
      if (e.target === modalBg) {
        modal.classList.remove('active');
        modalSite.classList.remove('active');
        modalBg.classList.remove('active');
        modalSite.style.display = 'none';
        modal.style.display = 'none';
      };
    };

    document.querySelector('#menu').addEventListener('click', function () {
      document.querySelector('.menu__list').classList.toggle('menu__list_visible');
      document.querySelector('#burger').classList.toggle('burger');
      document.querySelector('#burger').classList.toggle('burger__close');
    });
  };


  // sorting portfolio
  if (document.querySelector('.section__portfolio')) {

    let tabsPort = document.querySelectorAll('.portfolio__item');
    let previews = document.querySelectorAll('.portfolio__box');

    for (let tabPort of tabsPort) {
      tabPort.addEventListener('click', function () {
        tabsPort.forEach(function(rem) {
          rem.classList.remove('item-active');
        });
        tabPort.classList.add('item-active');

        if (tabPort.dataset.path === 'allworks') {
          previews.forEach(function (content) {
            content.classList.add('visible');
          });
        };

        if (tabPort.dataset.path === 'landings') {
          previews.forEach(function (content) {
            content.classList.remove('visible');
            for (let prewiev of previews) {
              if (prewiev.dataset.work === 'landings') {
                prewiev.classList.add('visible');
              };
            };
          });
        };

        if (tabPort.dataset.path === 'corporate') {
          previews.forEach(function (content) {
            content.classList.remove('visible');
            for (let prewiev of previews) {
              if (prewiev.dataset.work === 'corporate') {
                prewiev.classList.add('visible');
              };
            };
          });
        };

        if (tabPort.dataset.path === 'stores') {
          previews.forEach(function (content) {
            content.classList.remove('visible');
            for (let prewiev of previews) {
              if (prewiev.dataset.work === 'stores') {
                prewiev.classList.add('visible');
              };
            };
          });
        };

      });
    };

    // document.querySelectorAll('.portfolio__item').forEach(function (tabsBtn) {
    //   tabsBtn.addEventListener('click', function(event) {
    //     const path = event.currentTarget.dataset.path
    //     document.querySelectorAll('.portfolio__item').forEach(function(rem) {
    //       rem.classList.remove('item-active');
    //     });
    //     tabsBtn.classList.add('item-active');
    //     document.querySelectorAll('.portfolio__box').forEach(function(tabContent) {
    //       tabContent.classList.remove('visible')
    //     });
    //     document.querySelector(`[data-work="${path}"]`).classList.add('visible');
    //   });
    // });
  };

  // sorting staff
  if (document.querySelector('.staff__list')) {

    let staffs = document.querySelectorAll('.staff__item');
    let photos =document.querySelectorAll('.staff__photo');

    for (let staff of staffs) {
      staff.addEventListener('click', function () {
        staffs.forEach(function (delAct) {
          delAct.classList.remove('item-active');
        });
        staff.classList.add('item-active');
           photos.forEach(function (filter) {
            filter.classList.remove('filter');
           });

         if (staff.dataset.staff === 'designer') {
           photos.forEach(function (filter) {
             filter.classList.remove('filter');
             for (let photo of photos) {
               if (photo.dataset.photo === 'designer') {
                 photo.classList.add('filter');
               }
             };
           });
         };

         if (staff.dataset.staff === 'layoutdes') {
          photos.forEach(function (filter) {
            filter.classList.remove('filter');
            for (let photo of photos) {
              if (photo.dataset.photo === 'layoutdes') {
                photo.classList.add('filter');
              }
            };
          });
        };

        if (staff.dataset.staff === 'developers') {
          photos.forEach(function (filter) {
            filter.classList.remove('filter');
            for (let photo of photos) {
              if (photo.dataset.photo === 'developers') {
                photo.classList.add('filter');
              }
            };
          });
        };

        if (staff.dataset.staff === 'seo') {
          photos.forEach(function (filter) {
            filter.classList.remove('filter');
            for (let photo of photos) {
              if (photo.dataset.photo === 'seo') {
                photo.classList.add('filter');
              }
            };
          });
        };

        if (staff.dataset.staff === 'copywriter') {
          photos.forEach(function (filter) {
            filter.classList.remove('filter');
            for (let photo of photos) {
              if (photo.dataset.photo === 'copywriter') {
                photo.classList.add('filter');
              }
            };
          });
        };

        if (staff.dataset.staff === 'director') {
          photos.forEach(function (filter) {
            filter.classList.remove('filter');
            for (let photo of photos) {
              if (photo.dataset.photo === 'director') {
                photo.classList.add('filter');
              }
            };
          });
        };

        if (staff.dataset.staff === 'manager') {
          photos.forEach(function (filter) {
            filter.classList.remove('filter');
            for (let photo of photos) {
              if (photo.dataset.photo === 'manager') {
                photo.classList.add('filter');
              }
            };
          });
        };

        if (staff.dataset.staff === 'targetologist') {
          photos.forEach(function (filter) {
            filter.classList.remove('filter');
            for (let photo of photos) {
              if (photo.dataset.photo === 'targetologist') {
                photo.classList.add('filter');
              }
            };
          });
        };

        if (staff.dataset.staff === 'context') {
          photos.forEach(function (filter) {
            filter.classList.remove('filter');
            for (let photo of photos) {
              if (photo.dataset.photo === 'context') {
                photo.classList.add('filter');
              }
            };
          });
        };


       });
    };
  };

  if (document.querySelector('.swiper-container')) {
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 6,
      slidesPerGroup: 6,
    speed: 20000,
    centeredSlides: true,
    updateOnWindowResize: false,
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
