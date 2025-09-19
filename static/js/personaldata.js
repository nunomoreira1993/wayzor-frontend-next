(function(){
  const widget = document.querySelector('[data-price-widget]');
  const totalPrice = document.querySelector('[data-total-price]');
  if(!widget || !totalPrice) return;

  // Helper to toggle visibility
  function computeOffset(){
    const header = document.querySelector('header');
    if(!header) return 0;
    const styles = getComputedStyle(header);
    const marginBottom = parseFloat(styles.marginBottom) || 0;
    return header.getBoundingClientRect().height + marginBottom;
  }

  function applyOffset(){
    const offset = computeOffset();
    widget.style.setProperty('--price-widget-offset', offset + 'px');
  }

  const showWidget = () => { widget.classList.remove('is-hidden'); widget.classList.add('is-floating'); applyOffset(); };
  const hideWidget = () => { widget.classList.add('is-hidden'); widget.classList.remove('is-floating'); };

  // Initial state: hidden until total price leaves viewport
  hideWidget();

  const observerSupported = 'IntersectionObserver' in window;
  if(observerSupported){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(entry => {
        if(entry.isIntersecting){
          // total price visible -> hide floating widget
          hideWidget();
        } else {
          // total price not visible -> show floating widget
          showWidget();
        }
      });
    }, { root: null, threshold: 0 });

  io.observe(totalPrice);
  window.addEventListener('resize', ()=>{ if(!widget.classList.contains('is-hidden')) applyOffset(); });
  window.addEventListener('orientationchange', ()=>{ if(!widget.classList.contains('is-hidden')) applyOffset(); });
  } else {
    // Fallback: on scroll check bounding rect
    const check = () => {
      const rect = totalPrice.getBoundingClientRect();
      const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
      if(inViewport) hideWidget(); else showWidget();
    };
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    check();
  }
})();

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

