// Shared Language Dropdown Component
(function(){
  const roots = Array.from(document.querySelectorAll('[data-lang-root]'));
  if(!roots.length) return;
  let currentLang = 'EN';
  function closeAll(){
    roots.forEach(r=>{
      r.classList.remove('is-open');
      const btn = r.querySelector('[data-lang-toggle]');
      if(btn) btn.setAttribute('aria-expanded','false');
    });
  }
  function selectLanguage(lang){
    currentLang = lang;
    roots.forEach(r=>{
      const currentSpan = r.querySelector('[data-lang-current]');
      if(currentSpan) currentSpan.textContent = lang;
      r.querySelectorAll('[data-lang-value]').forEach(item=>{
        const val = item.getAttribute('data-lang-value');
        if(val === lang) item.setAttribute('aria-selected','true'); else item.removeAttribute('aria-selected');
      });
    });
    try { localStorage.setItem('wayzor-lang', lang); } catch(e){}
    closeAll();
  }
  try { const saved = localStorage.getItem('wayzor-lang'); if(saved) currentLang = saved; } catch(e){}
  selectLanguage(currentLang);
  roots.forEach(root=>{
    const toggle = root.querySelector('[data-lang-toggle]');
    const menu = root.querySelector('[data-lang-menu]');
    if(!toggle || !menu) return;
    toggle.addEventListener('click', e=>{
      e.stopPropagation();
      const isOpen = root.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true':'false');
      if(isOpen){
        const selected = menu.querySelector('[aria-selected="true"]') || menu.firstElementChild;
        if(selected && selected.focus) selected.focus();
      }
    });
    menu.querySelectorAll('[data-lang-value]').forEach(item=>{
      item.setAttribute('tabindex','0');
      item.addEventListener('click', e=>{
        e.stopPropagation();
        selectLanguage(item.getAttribute('data-lang-value'));
      });
      item.addEventListener('keydown', e=>{
        if(e.key==='Enter' || e.key===' '){
          e.preventDefault();
          selectLanguage(item.getAttribute('data-lang-value'));
        } else if(e.key==='Escape'){
          closeAll(); toggle.focus();
        } else if(e.key==='ArrowDown' || e.key==='ArrowUp'){
          e.preventDefault();
          const items = Array.from(menu.querySelectorAll('[data-lang-value]'));
          const idx = items.indexOf(item);
            let nextIdx = idx + (e.key==='ArrowDown'?1:-1);
            if(nextIdx < 0) nextIdx = items.length - 1;
            if(nextIdx >= items.length) nextIdx = 0;
            items[nextIdx].focus();
        }
      });
    });
  });
  document.addEventListener('click', e=>{ if(!e.target.closest('[data-lang-root]')) closeAll(); });
  document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeAll(); });
})();
