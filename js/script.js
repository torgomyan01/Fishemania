function $(target) {
  return document.querySelectorAll(target);
}

function $el(target) {
  return document.querySelector(target);
}

AOS.init({
  duration: 1000
})


const swiper = new Swiper('.swiperHero', {
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



