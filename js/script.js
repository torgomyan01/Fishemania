function $(target) {
  return document.querySelectorAll(target);
}

function $el(target) {
  return document.querySelector(target);
}

AOS.init({
  duration: 1000
})


const heroInputPlace = $el('#hero-input-place');
const heroOneLine = $el('#hero-one-line');
const heroTwoLine = $el('#hero-two-line');
const heroInputRes = $el('#hero-input-res');

const mobileCalendar = $el('#mobile-calendar');
const closeCalendar = $el('#close-calendar');

closeCalendar?.addEventListener('click', function (){
  mobileCalendar.classList.remove('active');
})


const mobileSort = $el('#mobile-sort');
const closeSort = $el('#close-sort');
const openSort = $el('#open-sort');

closeSort?.addEventListener('click', function (){
  mobileSort.classList.remove('active');
})

openSort?.addEventListener('click', function (){
  mobileSort.classList.add('active');
})

const mobileMap = $el('#mobile-map');
const openMap = $el('#open-map');
const closeMap = $el('#close-map');


openMap?.addEventListener('click', function (){
  mobileMap.classList.add('active');
})

closeMap?.addEventListener('click', function (){
  mobileMap.classList.remove('active');
})


const mobileFilter = $el('#mobile-filter');
const openMobileFilter = $el('#open-mobile-filter');
const closeMobileFilter = $el('#close-mobile-filter');


openMobileFilter?.addEventListener('click', function (){
  mobileFilter.classList.add('active');
})

closeMobileFilter?.addEventListener('click', function (){
  mobileFilter.classList.remove('active');
})

const desktopMap = $el('#desktop-map');
const openDesktopMap = $el('#open-desktop-map');
const closeDesktopMap = $el('#close-desktop-map');


openDesktopMap?.addEventListener('click', function (){
  document.body.style.overflow = 'hidden';
  desktopMap.classList.add('active');
})

closeDesktopMap?.addEventListener('click', function (){
  document.body.style.overflow = null;
  desktopMap.classList.remove('active');
})

heroInputPlace?.addEventListener('focus', HeroOneInputFocus)

heroInputPlace?.addEventListener('blur', HeroOneInputFocus)

function HeroOneInputFocus() {
  const type = +this.dataset.mobileSuccess

  if (window.innerWidth < 1113 && !type) {
    return;
  }
  const thisParent = this.parentElement;

  thisParent?.classList.toggle('focus')
  thisParent?.parentElement?.classList.toggle('focus')
  heroOneLine?.classList.toggle('opacity-0')
  heroInputRes?.classList.toggle('hidden')
}


const heroInputData = $('.hero-input-data');
const heroCalendar = $el('#hero-calendar');

heroInputData.forEach(item => {
  item.addEventListener('focus', HeroInputDataFocus)

  item.addEventListener('blur', HeroInputDataFocus)
})


function HeroInputDataFocus() {
  if (window.innerWidth < 1113) {
    mobileCalendar.classList.add('active');
    return;
  }
  const thisParent = this.parentElement.parentElement;
  thisParent.classList.toggle('focus');
  heroOneLine?.classList.toggle('opacity-0')
  heroTwoLine?.classList.toggle('opacity-0')
  heroCalendar?.classList.toggle('hidden')
}

const heroInputSelectChild = $el('#hero-input-select-child');
const heroInputSelectChildBody = $el('#hero-select-child-body');
const heroInputSelectChildClose = $el('#hero-input-select-child-close');

heroInputSelectChild?.addEventListener('click', HeroSelectChildFocus)

function HeroSelectChildFocus() {
  if (window.innerWidth < 1113) {
    return;
  }
  heroInputSelectChild?.classList.add('focus');
  heroInputSelectChildBody?.classList.remove('hidden');
  heroInputSelectChildClose?.classList.remove('hidden');
}

heroInputSelectChildClose?.addEventListener('click', function () {
  if (window.innerWidth < 1113) {
    return;
  }
  heroInputSelectChild?.classList.remove('focus');
  heroInputSelectChildBody?.classList.add('hidden');
  heroInputSelectChildClose?.classList.add('hidden');
})


const rangeDay = $('.range-day');
const priceMinMax = $el('#price-min-max');

rangeDay.forEach((item) => {
  noUiSlider.create(item, {
    start: [25, 800],
    connect: true,
    step: 15,
    range: {
      'min': 0,
      'max': 1000
    },
  });

  item.noUiSlider.on('update', function (values, handle) {
    const hourStart = (+values[0]).toFixed(0).replace(/.00/, '');
    const hourEnd = (+values[1]).toFixed(0).replace(/.00/, '');

    if(priceMinMax){
      priceMinMax.innerText = `${hourStart}$ - 1${hourEnd}$+`;
    }
  });

})


let h, i;
let dataValues = [];
let svgs = document.querySelectorAll('.svg');

for (i = 0; i < svgs.length; i++) {
  dataValues.push(svgs[i].dataset["value"]);
}

function drawcircles(duration = '5s') {

  let circlelines = document.querySelectorAll('.load-circle');

  for (h = 0; h < circlelines.length; h++) {
    let totalLength = circlelines[h].getTotalLength();
    let offset = totalLength - ((dataValues[h] / 100) * totalLength);
    circlelines[h].style.transitionDuration = duration;
    circlelines[h].style.strokeDashoffset = offset + "px";
  }
}

drawcircles();



const searchResultTab = $('.search-result-tab');

searchResultTab.forEach((item) => {

  item.addEventListener('click', function () {
    searchResultTab.forEach((itemData) => itemData.classList.remove('active'));

    this.classList.add('active');
  })
})

const sliderActiveItem = $('.slider-active-item');
const sliderItemsCount = $('.slider-items-count');

if(window.innerWidth < 768){

  const swiper = new Swiper('.swiper', {

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });


  swiper?.on('slideChange', function () {
    sliderActiveItem.forEach((item) => {
      item.innerText = swiper.activeIndex + 1;
    })
  });


  sliderItemsCount.forEach((item) => {
    item.innerText = swiper.slides.length;
  })

}




const swiperModalThumbs = new Swiper(".swiper-modal-thumbs", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

const swiperModal = new Swiper('.swiper-modal', {
  spaceBetween: 10,
  // Navigation arrows
  navigation: {
    nextEl: '#modal-slider-next',
    prevEl: '#modal-slider-prev',
  },
  thumbs: {
    swiper: swiperModalThumbs,
  },

});


const accordionItem = $('.accordion-item');

accordionItem.forEach((item) => {
  item.addEventListener('click', function () {
    // accordionItem.forEach((item) => item.classList.remove('active'));

    this.classList.toggle('active');

  })
})



const defaultInputs = $('.def-input input');

defaultInputs.forEach(input => {
  // Focus event
  input.addEventListener('focus', () => {
    input.parentElement.classList.add('active');
  });

  // Blur event
  input.addEventListener('blur', () => {
    $('.def-input').forEach(wrapper => {
      const childInput = wrapper.querySelector('input');
      if (childInput && childInput.value === '') {
        wrapper.classList.remove('active');
      }
    });
  });
});


const viewImageHeader = $('.view-image-header');
const modalHotel = $el('#modal-hotel');
const closeModalHotel = $el('#close-modal-hotel');

viewImageHeader.forEach((item) => {
  item.addEventListener('click', function () {
    modalHotel.classList.add('active');
  })
})

closeModalHotel?.addEventListener('click', function () {
  modalHotel.classList.remove('active');
})
