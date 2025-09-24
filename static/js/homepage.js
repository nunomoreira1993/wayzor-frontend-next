// Basic interactivity for static homepage (no JS hero carousel – pure CSS slider in markup)
(function(){
  // Mobile search toggle (placeholder behaviour)
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
    if(globalIcon) globalIcon.src = scrolled ? 'images/ic_global.svg' : 'images/ic_global_white.svg';
    if(userIcon) userIcon.src = scrolled ? 'images/ic_user.svg' : 'images/ic_user_white.svg';
    if(menuIcon) menuIcon.src = scrolled ? 'images/ic_menu_b.svg' : 'images/ic_menu.svg';
  }
  function onScroll(){
    if(!header) return;
    const scrolled = window.scrollY > 50;
    header.classList.toggle('header--white', scrolled);
    header.classList.toggle('header--transparent', !scrolled);
    if(logo) logo.src = scrolled ? whiteLogo : transparentLogo;
    updateIcons(scrolled);
  }
  window.addEventListener('scroll', onScroll, { passive:true });
  onScroll();

  // Mobile menu overlay open/close
  const menuOpenBtn = document.querySelector('[data-menu-open]');
  const menuCloseBtn = document.querySelector('[data-menu-close]');
  const overlay = document.querySelector('[data-header-overlay]');
  function openMenu(){ if(overlay) overlay.classList.add('is-open'); }
  function closeMenu(){ if(overlay) overlay.classList.remove('is-open'); }
  if(menuOpenBtn) menuOpenBtn.addEventListener('click', openMenu);
  if(menuCloseBtn) menuCloseBtn.addEventListener('click', closeMenu);
  if(overlay){
    overlay.addEventListener('click', (e)=>{ if(e.target === overlay) closeMenu(); });
  }

  // Partners horizontal scroll (arrows + drag)
  (function(){
    const track = document.querySelector('[data-partners-scroll]');
    if(!track) return;
    const btnPrev = document.querySelector('[data-partners-prev]');
    const btnNext = document.querySelector('[data-partners-next]');
    const SCROLL_AMOUNT = 300; // px per click

    function updateButtons(){
      if(!btnPrev || !btnNext) return;
      const maxScroll = track.scrollWidth - track.clientWidth - 2; // tolerance
      btnPrev.disabled = track.scrollLeft <= 0;
      btnNext.disabled = track.scrollLeft >= maxScroll;
      btnPrev.classList.toggle('is-disabled', btnPrev.disabled);
      btnNext.classList.toggle('is-disabled', btnNext.disabled);
    }

    if(btnPrev){
      btnPrev.addEventListener('click', ()=>{
        track.scrollBy({ left: -SCROLL_AMOUNT, behavior:'smooth' });
      });
    }
    if(btnNext){
      btnNext.addEventListener('click', ()=>{
        track.scrollBy({ left: SCROLL_AMOUNT, behavior:'smooth' });
      });
    }

    // Drag / swipe support
    let isDown=false, startX=0, startScroll=0;
    function start(x){ isDown=true; startX=x; startScroll=track.scrollLeft; track.classList.add('is-dragging'); }
    function move(x){ if(!isDown) return; track.scrollLeft = startScroll - (x - startX); }
    function end(){ if(!isDown) return; isDown=false; track.classList.remove('is-dragging'); updateButtons(); }
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
    if('ResizeObserver' in window){ new ResizeObserver(updateButtons).observe(track); }
    updateButtons();
  })();

  // Social section horizontal drag (mobile enhancement)
  (function(){
    const scroller = document.querySelector('[data-social-grid]');
    if(!scroller) return;
    let isDown=false,startX=0,startLeft=0;
    function start(x){ isDown=true; startX=x; startLeft=scroller.scrollLeft; scroller.classList.add('is-dragging'); }
    function move(x){ if(!isDown) return; scroller.scrollLeft = startLeft - (x-startX); }
    function end(){ if(!isDown) return; isDown=false; scroller.classList.remove('is-dragging'); }
    scroller.addEventListener('mousedown', e=> start(e.clientX));
    window.addEventListener('mousemove', e=> move(e.clientX));
    window.addEventListener('mouseup', end);
    scroller.addEventListener('mouseleave', end);
    scroller.addEventListener('touchstart', e=> start(e.touches[0].clientX), { passive:true });
    scroller.addEventListener('touchmove', e=> move(e.touches[0].clientX), { passive:true });
    scroller.addEventListener('touchend', end);
  })();
})();
