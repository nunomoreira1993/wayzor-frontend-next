// Moves the summary card after the first confirmation divider on small screens (<= 766px)
(function () {
  var breakpoint = 766;
  var moved = false;
  var slot = document.getElementById('mobile-summary-slot');
  var summaryAside = document.querySelector('aside.summary-column');
  var summaryCard = summaryAside ? summaryAside.querySelector('.summary-card') : null;
  if (!slot || !summaryAside || !summaryCard) return;

  function placeInSlot() {
    if (summaryCard.parentElement !== slot) {
      slot.appendChild(summaryCard);
      moved = true;
    }
  }

  function placeBack() {
    if (summaryCard && summaryAside && summaryCard.parentElement !== summaryAside) {
      summaryAside.appendChild(summaryCard);
      moved = false;
    }
  }

  function onResize() {
    var width = window.innerWidth;
    if (width <= breakpoint) {
      placeInSlot();
    } else {
      placeBack();
    }
  }

  // Initial check on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onResize);
  } else {
    onResize();
  }

  window.addEventListener('resize', function () {
    // Debounce microtask
    clearTimeout(window.__emailResizeT);
    window.__emailResizeT = setTimeout(onResize, 100);
  });
})();
