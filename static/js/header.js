// Mobile menu overlay toggle com slide animado
(function(){
  const openBtn = document.querySelector('[data-menu-open]');
  const closeBtn = document.querySelector('[data-menu-close]');
  const overlay  = document.querySelector('[data-header-overlay]');
  const panel    = overlay ? overlay.querySelector('.header-overlay__panel') : null;

  function openMenu(){
    if(!overlay) return;
    overlay.classList.remove('is-closing');
    overlay.classList.add('is-open');
    document.body.classList.add('body--menu-open'); 
  }

  function closeMenu(){
    if(!overlay) return;
    overlay.classList.add('is-closing');
    overlay.classList.remove('is-open');

    const onEnd = (e) => {
      if (e.target !== panel || e.propertyName !== 'transform') return;
      panel.removeEventListener('transitionend', onEnd);
      overlay.classList.remove('is-closing');       // limpa estado
      document.body.classList.remove('body--menu-open'); // opcional
    };
    if (panel) panel.addEventListener('transitionend', onEnd);
  }

  if (openBtn)  openBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (overlay)  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeMenu(); });

  // (opcional) tecla ESC fecha
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
})();
