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
})();
