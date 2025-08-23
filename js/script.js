function $(target) {
  return document.querySelectorAll(target);
}

function $el(target) {
  return document.querySelector(target);
}

function processComponents() {
  const components = $('component');

  if (components.length === 0) return; // այլևս component չկա

  components.forEach(component => {
    const src = component.getAttribute('src');

    fetch(src)
      .then(response => response.text())
      .then((text) => {
        component.outerHTML = text;
        // երբ HTML-ը դրվեց, նորից ստուգում ենք՝ նոր component կա՞
        processComponents();
      });
  });
}

function processDataFor() {
  const getDataFor = $('*[data-for]');

  getDataFor.forEach((item) => {
    const getCount = item.dataset.for;

    let html = '';
    Array.from({ length: +getCount }).forEach(() => {
      html += item.outerHTML;
    });

    item.outerHTML = html;
  });

  // data-for-ից հետո կարող են նոր component հայտնվել
  processComponents();
}

// նախ աշխատում է data-for
processDataFor();




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
      slidesPerView: 'auto',
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 0,
    },
    1600: {
      slidesPerView: 5, // ключевой момент!
      spaceBetween: 30,
    },
  },
});

const swiper4 = new Swiper(".catSwiper", {
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
      spaceBetween: 10,
      slidesPerView: 2,
    },
    768: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
    1201: {
      spaceBetween: 20,
      slidesPerView: 3,
    },
    1600: {
      slidesPerView: 4, // ключевой момент!
      spaceBetween: 30,
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
      slidesPerView: 'auto',
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 0,
    },
    1500: {
      slidesPerView: 5, // ключевой момент!
      spaceBetween: 30,
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
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
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


const swiperPartners = new Swiper('.swiperPartners', {
  loop: true,
  slidesPerView: 7,
  spaceBetween: 16,
  navigation: {
    nextEl: '.swiper-button-next.brand',
    prevEl: '.swiper-button-prev.brand',
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: "auto",
    },
    768: {
      slidesPerView: 4,
    },
    1300: {
      slidesPerView: 7,
      spaceBetween: 30
    },
  },
});

const swiperNews = new Swiper('.swiperNews', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 16,
  navigation: {
    nextEl: '.swiper-button-next.news',
    prevEl: '.swiper-button-prev.news',
  },
  pagination: {
    el: ".swiperNews-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 'auto',
    },
    768: {
      slidesPerView: 'auto',
    },
    806: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});


const swiperProduct = new Swiper('.swiperHeroProduct', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  nested: true,
  navigation: {
    nextEl: '.swiper-button-next.product',
    prevEl: '.swiper-button-prev.product',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1190: {
      slidesPerView: 4,
    },
    1420: {
      slidesPerView: 5,
    }
  }

});

const productItemSlider = new Swiper('.product-item-slider', {
  loop: true,
  direction: "vertical",
  slidesPerView: 4,
  spaceBetween: 8,
  navigation: {
    nextEl: '#product-items-next',
    prevEl: '#product-items-prev',
  },
  on: {
    slideChange: function () {
      const activeIndex = this.realIndex; // loop enabled => real index
      const activeSlide = this.slides[this.activeIndex];

      const findImagePath = activeSlide?.querySelector('img')?.getAttribute('src');

      $el('#fullImagePath').setAttribute('src', findImagePath);
    }
  },
});


if(window.innerWidth < 1280){
  const productItemSliderMobile = new Swiper('.product-item-slider-mobile', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 16,
    nested: true,
    navigation: {
      nextEl: '#product-items-next-mobile',
      prevEl: '#product-items-prev-mobile',
    },
    on: {
      slideChange: function () {
        const activeIndex = this.realIndex; // loop enabled => real index
        const activeSlide = this.slides[this.activeIndex];

        const findImagePath = activeSlide?.querySelector('img')?.getAttribute('src');

        $el('#fullImagePath').setAttribute('src', findImagePath);
      }
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 4,
      },
    }

  });
}


$('.product-item-slider .swiper-slide').forEach((item, index) => {
  item.addEventListener('click', function () {
    productItemSlider.slideToLoop(index);
  })
})

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

const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

function clearTabs() {
  tabs.forEach((tab) => {
    tab.style.backgroundColor = "#F2F2F2";
    tab.style.color = "#000";
  });
  contents.forEach((c) => c.classList.add("hidden"));
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    clearTabs();
    tab.style.backgroundColor = "#009FFF";
    tab.style.color = "#fff";
    const id = tab.getAttribute("data-tab");
    document.getElementById(id).classList.remove("hidden");
  });
});
const rangeDay = $('.range-day');

rangeDay.forEach((item) => {
  noUiSlider.create(item, {
    start: [0, 800],
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


    $el('#priceMin').value = hourStart;
    $el('#priceMax').value = hourEnd;

  });

})

function switchTab(tab) {
  const loginTab = document.getElementById('tab-login');
  const registerTab = document.getElementById('tab-register');
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const bg = $el(".bg");

  if (tab === 'login') {
    bg.style.backgroundImage = 'url(img/Union.png)';
    loginTab.className = 'flex-1 text-center text-[32px]  font-bold tab-rounded  text-[#009FFF]';
    registerTab.className = 'flex-1 text-center text-[32px]  font-bold tab-rounded  text-black';

    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
  } else {
    bg.style.backgroundImage = 'url(img/Union2.png)';
    registerTab.className = 'flex-1 text-center text-[32px]  font-bold tab-rounded  text-[#009FFF]';
    loginTab.className = 'flex-1 text-center text-[32px]  font-bold tab-rounded  text-black';

    registerForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
  }
}



const openMobileFilter = $el('#open-mobile-filter');
const closeMobileFilter = $el('#close-mobile-filter');

const filterMobileModal = $el('#filter-mobile-modal');



openMobileFilter?.addEventListener('click', function (){
  filterMobileModal.classList.remove('hidden')
  document.body.classList.add('overflow-hidden')
})

closeMobileFilter?.addEventListener('click', function (){
  filterMobileModal.classList.add('hidden')
  document.body.classList.remove('overflow-hidden')
})




