function $(target) {
  return document.querySelectorAll(target);
}

function $el(target) {
  return document.querySelector(target);
}

async function processComponents() {
  const component = document.querySelector('component');
  if (!component) return; // այլևս component չկա

  const src = component.getAttribute('src');
  const response = await fetch(src);
  const html = await response.text();

  // փոխարինում՝ առանց outerHTML-ի, որ parent չպահանջվի
  component.insertAdjacentHTML('afterend', html);
  component.remove();

  // նորից ստուգում ենք՝ գուցե ներսում էլ component-ներ կան
  processComponents();



  const footerForm = document.getElementById("footer-form");


  footerForm?.addEventListener('submit', function (e){
    e.preventDefault();

    $el('#footer-submit-btn').style.display = 'none';
    $el('#footer-submit-success').style.display = 'flex';
    $el('#icon-success').style.display = 'block';

    console.log('fff')
  })
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



window.addEventListener('load', () => {


  const mobileMenuItem = $('.mobile-menu-item');


  mobileMenuItem.forEach((item) => {
    item.addEventListener('click', function () {

      this.parentElement.classList.toggle('active');

    });
  })

  const menuItems = $el('#menu-items');
  const menuItemsChildren = $el('#menu-items-children');
  const goBackMenu = $el('#go-back-menu');

  const itemForOpenChilds = $el('#item-for-open-childs');

  const openMenuMobile = $el('#open-menu-mobile');
  const mobileMenu = $el('#mobile-menu');
  const closeMobileMenu = $el('#close-mobile-menu');


  itemForOpenChilds.addEventListener('click', function (){
    menuItems.classList.add('hidden');
    menuItemsChildren.classList.remove('hidden');
  })

  goBackMenu?.addEventListener('click', function (){
    menuItems.classList.remove('hidden');
    menuItemsChildren.classList.add('hidden');
  })

  openMenuMobile.addEventListener('click', function(){
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
  })

  closeMobileMenu.addEventListener('click', function(){
    mobileMenu.classList.remove('active');
    document.body.style.overflow = null;
  })

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
        spaceBetween: 15,
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
    spaceBetween: 20,
    nested: true,
    navigation: {
      nextEl: '.swiper-button-next.product',
      prevEl: '.swiper-button-prev.product',
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
      },
      1250: {
        slidesPerView: 5,
      },
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
        'max': 1010
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

  // Catalog menu functionality
  const catalogMenuBtn = $el('#catalog-menu-btn');
  const catalogMenuBtnMobile = $el('#catalog-menu-btn-mobile');
  const catalogMenuCloseBtn = $el('#catalog-menu-close-btn');
  const catalogMenuCloseBtnMobile = $el('#catalog-menu-close-btn-mobile');
  const catalogMenuOverlay = $el('#catalog-menu-overlay');
  const catalogMenuContent = $el('#catalog-menu-content');
  const catalogMenuDetails = $el('#catalog-menu-details');

  function openCatalogMenu() {
    // Set body overflow hidden and scroll to top
    document.body.style.overflow = 'hidden';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Show overlay with animation
    catalogMenuOverlay.classList.remove('opacity-0', 'invisible');
    catalogMenuOverlay.classList.add('opacity-100', 'visible');
    
    // Show menu content with slide animation
    catalogMenuContent.classList.remove('-translate-x-full');
    catalogMenuContent.classList.add('translate-x-0');
    
    // Show details panel with fade animation
    catalogMenuDetails.classList.remove('opacity-0', 'invisible');
    catalogMenuDetails.classList.add('opacity-100', 'visible');
    
    // Switch buttons: hide open buttons, show close buttons
    catalogMenuBtn?.classList.add('hidden');
    catalogMenuBtnMobile?.classList.add('hidden');
    catalogMenuCloseBtn?.classList.remove('hidden');
    catalogMenuCloseBtnMobile?.classList.remove('hidden');
  }

  function closeCatalogMenu() {
    // Hide details panel
    catalogMenuDetails.classList.remove('opacity-100', 'visible');
    catalogMenuDetails.classList.add('opacity-0', 'invisible');
    
    // Hide menu content
    catalogMenuContent.classList.remove('translate-x-0');
    catalogMenuContent.classList.add('-translate-x-full');
    
    // Hide overlay
    catalogMenuOverlay.classList.remove('opacity-100', 'visible');
    catalogMenuOverlay.classList.add('opacity-0', 'invisible');
    
    // Restore body overflow
    document.body.style.overflow = '';
    
    // Switch buttons: show open buttons, hide close buttons
    catalogMenuBtn?.classList.remove('hidden');
    catalogMenuBtnMobile?.classList.remove('hidden');
    catalogMenuCloseBtn?.classList.add('hidden');
    catalogMenuCloseBtnMobile?.classList.add('hidden');
  }

  // Open menu on button click (desktop and mobile)
  catalogMenuBtn?.addEventListener('click', function(e) {
    e.preventDefault();
    openCatalogMenu();
  });

  catalogMenuBtnMobile?.addEventListener('click', function(e) {
    e.preventDefault();
    openCatalogMenu();
  });

  // Close menu on overlay click
  catalogMenuOverlay?.addEventListener('click', function(e) {
    if (e.target === catalogMenuOverlay) {
      closeCatalogMenu();
    }
  });

  // Close menu on close button click
  catalogMenuCloseBtn?.addEventListener('click', function(e) {
    e.preventDefault();
    closeCatalogMenu();
  });

  catalogMenuCloseBtnMobile?.addEventListener('click', function(e) {
    e.preventDefault();
    closeCatalogMenu();
  });

  // Close menu on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !catalogMenuOverlay.classList.contains('invisible')) {
      closeCatalogMenu();
    }
  });






})



