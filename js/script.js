function $(target) {
  return document.querySelectorAll(target);
}

function $el(target) {
  return document.querySelector(target);
}

AOS.init({
  duration: 1000
})

const swiper = new Swiper(".popularSwiper", {
  loop: true,
  navigation: {
    nextEl: ".popular-navigation .swiper-button-next",
    prevEl: ".popular-navigation .swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30
    },
  },
});

const swiper2 = new Swiper(".categoriesSwiper", {
  loop: true,
  navigation: {
    nextEl: ".categories-navigation .swiper-button-next",
    prevEl: ".categories-navigation .swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30
    },
  },
});

const swiper3 = new Swiper(".infoSwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next.info-slider",
    prevEl: ".swiper-button-prev.info-slider",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30
    },
  },
});



const swiperHero = new Swiper('.swiperHero', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next.hero',
    prevEl: '.swiper-button-prev.hero',
  },
});


const swiperProduct = new Swiper('.swiperHeroProduct', {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 30,
  nested: true,
  navigation: {
    nextEl: '.swiper-button-next.product',
    prevEl: '.swiper-button-prev.product',
  },
});

document.querySelectorAll('.swiperProductItems').forEach((innerEl) => {
  new Swiper(innerEl, {
    loop: true,
    nested: true,
    slidesPerView: 1,
    pagination: {
      el: innerEl.querySelector('.swiper-pagination-inner'),
      clickable: true,
    },
  });
});



