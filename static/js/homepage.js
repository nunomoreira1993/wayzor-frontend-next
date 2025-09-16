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
  function onScroll(){
    if(!header) return;
    const scrolled = window.scrollY > 50;
    header.classList.toggle('header--white', scrolled);
    header.classList.toggle('header--transparent', !scrolled);
    if(logo){ logo.src = scrolled ? whiteLogo : transparentLogo; }
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

  // Footer mobile accordions
  document.querySelectorAll('[data-footer-toggle]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const panel = btn.parentElement.querySelector('.footer__collapse-panel');
      if(!panel) return;
      const hidden = panel.hasAttribute('hidden');
      if(hidden){
        panel.removeAttribute('hidden');
        btn.querySelector('span[aria-hidden]')?.classList.add('rotated');
      } else {
        panel.setAttribute('hidden','');
        btn.querySelector('span[aria-hidden]')?.classList.remove('rotated');
      }
    });
  });
})();
