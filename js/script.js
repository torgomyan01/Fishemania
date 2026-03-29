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

  let headerSearchCloseTimer = null;

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
    slidesPerView: 5,
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
      slidesPerView: 1,
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
        585: {
          slidesPerView: 4,
        },

        375: {
          slidesPerView: 2,
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

  function headerSearchRoots() {
    return document.querySelectorAll('.header-search-root');
  }

  function initHeaderSearchResultSwipers() {
    if (typeof Swiper === 'undefined') return;
    document.querySelectorAll('.header-search-results .swiperProductItems').forEach((innerEl) => {
      if (innerEl.classList.contains('swiper-initialized')) return;
      const pag = innerEl.querySelector('.swiper-pagination-inner');
      if (!pag) return;
      new Swiper(innerEl, {
        loop: true,
        nested: true,
        slidesPerView: 1,
        pagination: {
          el: pag,
          clickable: true,
        },
      });
    });
  }

  function finishCloseHeaderSearch() {
    if (headerSearchCloseTimer) {
      clearTimeout(headerSearchCloseTimer);
      headerSearchCloseTimer = null;
    }
    headerSearchRoots().forEach(function (root) {
      const panel = root.querySelector('.header-search-panel');
      const overlay = root.querySelector('.header-search-overlay');
      const results = root.querySelector('.header-search-results');
      if (panel) {
        panel.classList.remove('header-search-panel--expanded', 'header-search-panel--closing');
        panel.style.removeProperty('--header-search-top');
      }
      if (overlay) {
        overlay.classList.remove(
          'header-search-overlay--ready',
          'opacity-100',
          'visible',
          'pointer-events-auto',
        );
        overlay.classList.add('opacity-0', 'invisible', 'pointer-events-none');
      }
      if (results) results.classList.add('hidden');
    });
    document.querySelectorAll('.header-search-input').forEach(function (inp) {
      inp.blur();
    });
    const catOverlay = $el('#catalog-menu-overlay');
    const catalogOpen = catOverlay && !catOverlay.classList.contains('invisible');
    document.body.style.overflow = catalogOpen ? 'hidden' : '';
  }

  function openHeaderSearch(e) {
    if (headerSearchCloseTimer) {
      clearTimeout(headerSearchCloseTimer);
      headerSearchCloseTimer = null;
    }
    document.querySelectorAll('.header-search-panel').forEach(function (p) {
      p.classList.remove('header-search-panel--closing');
    });
    const input = e.target && e.target.closest ? e.target.closest('.header-search-input') : null;
    const root = input ? input.closest('.header-search-root') : null;
    if (!root) return;
    const panel = root.querySelector('.header-search-panel');
    const overlay = root.querySelector('.header-search-overlay');
    if (!panel || !overlay) return;
    const rect = panel.getBoundingClientRect();
    panel.style.setProperty('--header-search-top', `${Math.max(8, rect.top)}px`);
    panel.classList.add('header-search-panel--expanded');
    overlay.classList.remove('opacity-0', 'invisible', 'pointer-events-none');
    overlay.classList.add('opacity-100', 'visible', 'pointer-events-auto', 'header-search-overlay--ready');
    document.body.style.overflow = 'hidden';
    initHeaderSearchResultSwipers();
  }

  function closeHeaderSearch() {
    const hasExpanded = document.querySelector('.header-search-panel.header-search-panel--expanded');
    if (!hasExpanded) {
      finishCloseHeaderSearch();
      return;
    }
    document.querySelectorAll('.header-search-panel.header-search-panel--expanded').forEach(function (p) {
      p.classList.add('header-search-panel--closing');
    });
    document.querySelectorAll('.header-search-root .header-search-overlay').forEach(function (o) {
      o.classList.remove(
        'header-search-overlay--ready',
        'opacity-100',
        'visible',
        'pointer-events-auto',
      );
      o.classList.add('opacity-0', 'invisible', 'pointer-events-none');
    });
    if (headerSearchCloseTimer) clearTimeout(headerSearchCloseTimer);
    headerSearchCloseTimer = setTimeout(finishCloseHeaderSearch, 300);
  }

  function syncHeaderSearchResults(e) {
    const raw = e && e.target && e.target.value !== undefined
      ? e.target.value
      : (document.querySelector('.header-search-input') && document.querySelector('.header-search-input').value);
    const val = raw === undefined ? '' : raw;
    document.querySelectorAll('.header-search-input').forEach(function (inp) {
      inp.value = val;
    });
    const show = String(val).trim().length > 0;
    document.querySelectorAll('.header-search-results').forEach(function (box) {
      box.classList.toggle('hidden', !show);
    });
  }

  headerSearchRoots().forEach(function (root) {
    const input = root.querySelector('.header-search-input');
    const form = root.querySelector('.header-search-form');
    const overlay = root.querySelector('.header-search-overlay');
    if (input) {
      input.addEventListener('focus', openHeaderSearch);
      input.addEventListener('input', syncHeaderSearchResults);
    }
    if (form) {
      form.addEventListener('submit', function (ev) {
        ev.preventDefault();
        syncHeaderSearchResults({ target: input });
      });
    }
    if (overlay) {
      overlay.addEventListener('click', closeHeaderSearch);
    }
    root.addEventListener('focusout', function () {
      setTimeout(function () {
        if (!root.contains(document.activeElement)) {
          closeHeaderSearch();
        }
      }, 0);
    });
  });

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

  // Close menu / header search on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key !== 'Escape') return;
    if (document.querySelector('.header-search-panel.header-search-panel--expanded')) {
      closeHeaderSearch();
      return;
    }
    if (catalogMenuOverlay && !catalogMenuOverlay.classList.contains('invisible')) {
      closeCatalogMenu();
    }
  });






})



