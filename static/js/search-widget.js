// Shared search widget collapsible logic for homepage and station details
(function(){
  function syncPickupInputs(){
    const mobileInput = document.getElementById('pickupLocationMobile');
    const desktopInput = document.getElementById('pickupLocation');
    if(!(mobileInput && desktopInput)) return;
    mobileInput.addEventListener('input', ()=> { desktopInput.value = mobileInput.value; });
    desktopInput.addEventListener('input', ()=> { mobileInput.value = desktopInput.value; });
  }

  window.toggleAdvancedSearch = function toggleAdvancedSearch(){
    const searchWidget = document.querySelector('.searchw');
    if(!searchWidget) return;
    searchWidget.classList.toggle('searchw--expanded');

    const filterToggle = document.querySelector('.searchw__filter-toggle');
    if(filterToggle){
      filterToggle.classList.toggle('searchw__filter-toggle--active');
      const toggleText = filterToggle.querySelector('span');
      if(toggleText){
        toggleText.textContent = searchWidget.classList.contains('searchw--expanded') ? 'Less search options' : 'More search options';
      }
    }

    const parentSection = document.querySelector('.section.search-widget');
    if(parentSection){
      parentSection.classList.toggle('search-widget--expanded', searchWidget.classList.contains('searchw--expanded'));
    }
  };

  document.addEventListener('DOMContentLoaded', ()=>{
    syncPickupInputs();
  });
})();
