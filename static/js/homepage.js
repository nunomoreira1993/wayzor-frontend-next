// Basic interactivity for static homepage (mobile search widget toggle example)
(function(){
  // Mobile search toggle (placeholder)
  const toggle = document.querySelector('[data-mobile-search-toggle]');
  const mobilePanel = document.querySelector('[data-mobile-search-panel]');
  if(toggle && mobilePanel){
    toggle.addEventListener('click', ()=>{
      mobilePanel.classList.toggle('is-expanded');
      mobilePanel.classList.toggle('is-hidden');
    });
  }

  // Header scroll state (transparent -> white)
  const header = document.querySelector('[data-header]');
  const logo = document.querySelector('[data-logo]');
  const transparentLogo = 'https://api.builder.io/api/v1/image/assets/TEMP/c0306462bec75412cd241fde2cd6b9540e4b7321?width=301';
  const whiteLogo = 'https://api.builder.io/api/v1/image/assets/TEMP/a3b3142d1d15afbbd7c52914d0b15030fd69104e?width=301';
  const globalIcon = document.getElementById('global-icon');
  const userIcon = document.getElementById('user-icon');
  const menuIcon = document.getElementById('menu-icon');
  function updateIcons(scrolled){
    if(globalIcon){
      globalIcon.src = scrolled ? 'images/ic_global.svg' : 'images/ic_global_white.svg';
    }
    if(userIcon){
      userIcon.src = scrolled ? 'images/ic_user.svg' : 'images/ic_user_white.svg';
    }
    if(menuIcon){
      menuIcon.src = scrolled ? 'images/ic_menu_b.svg' : 'images/ic_menu.svg';
    }
  }
  function onScroll(){
    if(!header) return;
    const scrolled = window.scrollY > 50;
    header.classList.toggle('header--white', scrolled);
    header.classList.toggle('header--transparent', !scrolled);
    if(logo){ logo.src = scrolled ? whiteLogo : transparentLogo; }
    updateIcons(scrolled);
  }
  window.addEventListener('scroll', onScroll, { passive:true });
  onScroll();

  // Mobile menu overlay
  const menuOpenBtn = document.querySelector('[data-menu-open]');
  const menuCloseBtn = document.querySelector('[data-menu-close]');
  const overlay = document.querySelector('[data-header-overlay]');
  function openMenu(){ overlay && overlay.classList.add('is-open'); }
  function closeMenu(){ overlay && overlay.classList.remove('is-open'); }
  if(menuOpenBtn) menuOpenBtn.addEventListener('click', openMenu);
  if(menuCloseBtn) menuCloseBtn.addEventListener('click', closeMenu);
  overlay && overlay.addEventListener('click', (e)=>{ if(e.target === overlay) closeMenu(); });

  // Footer unificado responsivo
  (function(){
    const BP = 1024;
    const sections = () => document.querySelectorAll('.footer__section[data-collapse]');

    function initialMobileClose(){
      if(window.innerWidth < BP){
        sections().forEach(d=>{
          d.removeAttribute('open');
          d.removeAttribute('data-user');
        });
      }
    }

    function apply(){
      const desktop = window.innerWidth >= BP;
      sections().forEach(d=>{
        if(desktop){
          d.setAttribute('open','');
        } else if(!d.hasAttribute('data-user')){
          d.removeAttribute('open');
        }
      });
    }

    // Execução inicial
    initialMobileClose();
    apply();

    sections().forEach(d=>{
      d.addEventListener('toggle', ()=>{
        if(d.open) d.setAttribute('data-user',''); else d.removeAttribute('data-user');
      });
    });

    window.addEventListener('resize', ()=>{
      initialMobileClose(); // garante fechamento ao encolher para mobile
      apply();
    });
  })();


      (function(){
      const track = document.querySelector('[data-partners-scroll]');
      if(!track) return;
      let prev = document.querySelector('[data-partners-prev]');
      let next = document.querySelector('[data-partners-next]');
      // Fallback: if data attributes missing, pick first two .partner-arrow
      if(!prev || !next){
        const arrows = document.querySelectorAll('.partner-arrow');
        if(arrows.length >= 2){
          prev = arrows[0];
          next = arrows[1];
        }
      }

      function getGap(){
        const gapVar = getComputedStyle(track).getPropertyValue('--partners-gap');
        const num = parseFloat(gapVar);
        return isNaN(num) ? 32 : num;
      }

      function step(){
        const item = track.querySelector('.logo-item');
        if(!item) return 200;
        return item.getBoundingClientRect().width + getGap();
      }

      function updateButtons(){
        if(!prev || !next) return;
        const fullyVisible = track.scrollWidth <= track.clientWidth + 1; // all items fit
        if(fullyVisible){
          prev.disabled = true;
          next.disabled = true;
          return;
        }
        prev.disabled = track.scrollLeft <= 0;
        next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 1;
      }

      prev && prev.addEventListener('click', ()=> track.scrollBy({ left: -step(), behavior: 'smooth'}));
      next && next.addEventListener('click', ()=> track.scrollBy({ left: step(), behavior: 'smooth'}));

      // wheel (touchpad) horizontal conversion
      track.addEventListener('wheel', e => {
        if(Math.abs(e.deltaY) > Math.abs(e.deltaX)){
          e.preventDefault();
          track.scrollLeft += e.deltaY;
        }
      }, { passive:false });

      // drag
      let isDown=false,startX=0,startScroll=0;
      const start = x => { isDown=true; startX=x; startScroll=track.scrollLeft; track.classList.add('is-dragging'); };
      const move = x => { if(!isDown) return; track.scrollLeft = startScroll - (x-startX); };
      const end = () => { isDown=false; track.classList.remove('is-dragging'); };
      track.addEventListener('mousedown', e=> start(e.clientX));
      window.addEventListener('mousemove', e=> move(e.clientX));
      window.addEventListener('mouseup', end);
      track.addEventListener('mouseleave', end);
      track.addEventListener('touchstart', e=> start(e.touches[0].clientX), { passive:true });
      track.addEventListener('touchmove', e=> move(e.touches[0].clientX), { passive:true });
      track.addEventListener('touchend', end);

      track.addEventListener('scroll', updateButtons);
      window.addEventListener('resize', updateButtons);
      window.addEventListener('load', updateButtons);
      if('ResizeObserver' in window){
        new ResizeObserver(updateButtons).observe(track);
      }
      updateButtons();
    })();

    // Social horizontal drag (mobile) - optional enhancement
    (function(){
      const scroller = document.querySelector('[data-social-grid]');
      if(!scroller) return;
      let isDown=false,startX=0,startLeft=0;
      const start = x => { isDown=true; startX=x; startLeft=scroller.scrollLeft; scroller.classList.add('is-dragging'); };
      const move = x => { if(!isDown) return; scroller.scrollLeft = startLeft - (x-startX); };
      const end = () => { isDown=false; scroller.classList.remove('is-dragging'); };
      scroller.addEventListener('mousedown', e=> start(e.clientX));
      window.addEventListener('mousemove', e=> move(e.clientX));
      window.addEventListener('mouseup', end);
      scroller.addEventListener('mouseleave', end);
      scroller.addEventListener('touchstart', e=> start(e.touches[0].clientX), { passive:true });
      scroller.addEventListener('touchmove', e=> move(e.touches[0].clientX), { passive:true });
      scroller.addEventListener('touchend', end);
    })();
})();

// Hero Swiper initialization
(function(){
  if(typeof Swiper === 'undefined') return; // ensure library loaded
  const sliderEl = document.querySelector('[data-hero-swiper]');
  if(!sliderEl) return;
  const nextBtn = sliderEl.querySelector('.hero__nav');
  // Swipe Optimization Notes:
  // - Switched from 'fade' to native slide effect for better drag feedback.
  // - Added grabCursor & touch-action:pan-y (in SCSS) to allow natural vertical scroll while swiping horizontally.
  // - threshold keeps accidental tiny moves from changing slide.
  // - resistanceRatio softens edge pull when looping duplicates are present.
  const swiper = new Swiper(sliderEl, {
    loop: true,
    // Use default 'slide' effect for better tactile feedback when dragging.
    speed: 600,
    grabCursor: true,
    resistanceRatio: 0.85,
    threshold: 8, // minimal px move before triggering slide change
    autoplay: { delay: 6000, disableOnInteraction: false },
    pagination: { el: sliderEl.querySelector('.hero__pagination'), clickable: true },
    navigation: { nextEl: nextBtn },
    watchSlidesProgress: true,
    // Improve responsive interaction on touch devices
    touchReleaseOnEdges: true
  });
  
  /* Fallback: allow swipe starting anywhere in hero (even over empty areas) */
  const hero = document.querySelector('.hero');
  if(hero){
    let startX=0, startY=0, dragging=false, consumed=false;
    const THRESHOLD = 24; // px horizontal movement to trigger slide
    const V_CANCEL = 32; // if vertical move bigger than this before threshold, cancel
    function pointerDown(e){
      if(e.pointerType === 'mouse' && e.button !== 0) return;
      startX = e.clientX; startY = e.clientY; dragging = true; consumed=false;
    }
    function pointerMove(e){
      if(!dragging || consumed) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      if(Math.abs(dy) > V_CANCEL && Math.abs(dx) < THRESHOLD){ // user scrolling vertically
        dragging=false; return; }
      if(Math.abs(dx) >= THRESHOLD){
        consumed = true; dragging=false;
        if(dx < 0){ swiper.slideNext(); } else { swiper.slidePrev(); }
      }
    }
    function pointerUp(){ dragging=false; }
    hero.addEventListener('pointerdown', pointerDown, { passive:true });
    hero.addEventListener('pointermove', pointerMove, { passive:true });
    window.addEventListener('pointerup', pointerUp, { passive:true });

      // Trackpad / wheel swipe: interpret horizontal delta first, fallback to vertical intent
      let wheelCooldown=false;
      hero.addEventListener('wheel', e => {
        if(wheelCooldown) return;
        const absX = Math.abs(e.deltaX);
        const absY = Math.abs(e.deltaY);
        // Prefer horizontal gestures; if vertical but large, ignore
        if(absX > 18 && absX > absY){
          e.preventDefault();
          wheelCooldown = true;
          (e.deltaX > 0) ? swiper.slideNext() : swiper.slidePrev();
          setTimeout(()=> wheelCooldown=false, 450); // cooldown to avoid rapid multi-fire
        }
      }, { passive:false });
  }
  function updateAria(){
    const realIndex = (swiper.realIndex ?? 0) + 1;
    const total = swiper.slides.filter(s=> !s.classList.contains('swiper-slide-duplicate')).length;
    if(nextBtn) nextBtn.setAttribute('aria-label', `Next slide (${realIndex}/${total})`);
  }
  swiper.on('slideChange', updateAria);
  updateAria();
})();