// Shared header interactions: mobile menu overlay toggle
(function(){
  const openBtn = document.querySelector('[data-menu-open]');
  const closeBtn = document.querySelector('[data-menu-close]');
  const overlay = document.querySelector('[data-header-overlay]');
  function openMenu(){ overlay && overlay.classList.add('is-open'); }
  function closeMenu(){ overlay && overlay.classList.remove('is-open'); }
  if(openBtn) openBtn.addEventListener('click', openMenu);
  if(closeBtn) closeBtn.addEventListener('click', closeMenu);
  if(overlay){
    overlay.addEventListener('click', (e)=>{ if(e.target === overlay) closeMenu(); });
  }
})();
