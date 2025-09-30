// Age dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
  const ageDropdownBtn = document.querySelector('[data-age-dropdown]');
  const ageDropdownMenu = document.getElementById('age-dropdown-menu');
  const ageInput = document.getElementById('driverAgeInput');
  const ageSlider = document.getElementById('age-slider');
  const ageValueDisplay = document.getElementById('age-value');
  const quickAgeButtons = document.querySelectorAll('.age-dropdown__quick-age');
  
  // Function to toggle dropdown visibility
  function toggleDropdown() {
    const isExpanded = ageDropdownBtn.getAttribute('aria-expanded') === 'true';
    ageDropdownBtn.setAttribute('aria-expanded', !isExpanded);
    ageDropdownMenu.hidden = isExpanded;
    
    if (!isExpanded) {
      // Position the dropdown precisely below the input field
      const inputField = document.querySelector('.searchw__inner--age');
      const inputRect = inputField.getBoundingClientRect();
      
      // Set the width to match the input field
      ageDropdownMenu.style.width = inputRect.width + 'px';
      
      // Dynamically calculate left position based on viewport width
      const viewportWidth = window.innerWidth;
      let leftPosition = '0';
      
      if (viewportWidth >= 2560) {
        leftPosition = '710px';
      } else if (viewportWidth >= 1920) {
        leftPosition = '400px';
      } else if (viewportWidth >= 1440) {
        leftPosition = '160px';
      } else {
        // For smaller screens, calculate proportionally
        const scaleFactor = viewportWidth / 1440;
        leftPosition = Math.max(0, Math.floor(160 * scaleFactor)) + 'px';
      }
      
      // Apply the calculated left position
      ageDropdownMenu.style.left = leftPosition;
      
      // Initialize slider value based on current input value
      if (ageInput.value) {
        ageSlider.value = ageInput.value;
        ageValueDisplay.textContent = ageInput.value;
      }
    }
  }
  
  // Update age value when slider changes
  ageSlider.addEventListener('input', function() {
    ageValueDisplay.textContent = this.value;
    ageInput.value = this.value;
    
    // Trigger input event
    const event = new Event('input', { bubbles: true });
    ageInput.dispatchEvent(event);
  });
  
  // Toggle dropdown when the button is clicked
  ageDropdownBtn.addEventListener('click', function(e) {
    e.preventDefault();
    toggleDropdown();
  });
  
  // Handle quick age selections
  quickAgeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const value = this.getAttribute('data-value');
      ageInput.value = value;
      ageSlider.value = value;
      ageValueDisplay.textContent = value;
      toggleDropdown();
      
      // Trigger input event to activate any listeners
      const event = new Event('input', { bubbles: true });
      ageInput.dispatchEvent(event);
    });
  });
  
  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (!ageDropdownBtn.contains(e.target) && !ageDropdownMenu.contains(e.target)) {
      ageDropdownBtn.setAttribute('aria-expanded', 'false');
      ageDropdownMenu.hidden = true;
    }
  });
  
  // Close dropdown when pressing Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && ageDropdownBtn.getAttribute('aria-expanded') === 'true') {
      ageDropdownBtn.setAttribute('aria-expanded', 'false');
      ageDropdownMenu.hidden = true;
    }
  });
  
  // Function to calculate and set position based on screen width
  function updateDropdownPosition() {
    if (ageDropdownBtn.getAttribute('aria-expanded') === 'true') {
      const inputField = document.querySelector('.searchw__inner--age');
      const inputRect = inputField.getBoundingClientRect();
      
      // Set the width to match the input field
      ageDropdownMenu.style.width = inputRect.width + 'px';
      
      // Dynamically calculate left position based on viewport width
      const viewportWidth = window.innerWidth;
      let leftPosition = '0';
      
      if (viewportWidth >= 2560) {
        leftPosition = '710px';
      } else if (viewportWidth >= 1920) {
        leftPosition = '400px';
      } else if (viewportWidth >= 1440) {
        leftPosition = '160px';
      } else {
        // For smaller screens, calculate proportionally
        const scaleFactor = viewportWidth / 1440;
        leftPosition = Math.max(0, Math.floor(160 * scaleFactor)) + 'px';
      }
      
      // Apply the calculated left position
      ageDropdownMenu.style.left = leftPosition;
    }
  }
  
  // Update position on window resize
  window.addEventListener('resize', updateDropdownPosition);
});