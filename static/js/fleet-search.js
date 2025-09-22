// fleet-search.js
// Redirects to fleet-results.html when 'Search Cars' is clicked

document.addEventListener('DOMContentLoaded', function () {
  // Try to find the button by text content
  const buttons = Array.from(document.querySelectorAll('button, input[type="button"], input[type="submit"]'));
  const searchButton = buttons.find(btn => btn.textContent.trim() === 'Search cars' || btn.value === 'Search cars');

  if (searchButton) {
    searchButton.addEventListener('click', function (e) {
      // Optionally prevent default if it's a form submit
      // e.preventDefault();
      window.location.href = 'fleet-results.html';
    });
  }
});

function toggleFilters() {
      const filters = document.querySelector('.filters');
      const filterCard = document.querySelector('.filter-card');
      filters.classList.toggle('active');
      filterCard.classList.toggle('active');
    }

function loadMoreCars() {
            const hiddenCars = document.querySelectorAll('.carcard__hidden');
            document.querySelector('.carcard__hidden').style.display = '';
            document.querySelector('.load-more-btn').style.display = 'none';
          }
