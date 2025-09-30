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
    
    // Toggle visibility
    if (isExpanded) {
      // Hide the dropdown
      ageDropdownMenu.hidden = true;
    } else {
      // Show the dropdown
      ageDropdownMenu.hidden = false;
      
      // Calculate position using our improved function
      updateDropdownPosition();
      
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
    e.stopPropagation(); // Prevent event from bubbling up
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
      if (ageDropdownBtn.getAttribute('aria-expanded') === 'true') {
        ageDropdownBtn.setAttribute('aria-expanded', 'false');
        ageDropdownMenu.hidden = true;
      }
    }
  });
  
  // Close dropdown when pressing Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && ageDropdownBtn.getAttribute('aria-expanded') === 'true') {
      ageDropdownBtn.setAttribute('aria-expanded', 'false');
      ageDropdownMenu.hidden = true;
    }
  });
  
  // Initial setup and calculation of position
  document.body.classList.add('js-initialized');
  updateDropdownPosition();
  
  // Run again after a short delay to ensure everything is properly rendered
  setTimeout(updateDropdownPosition, 100);
  
  // Function to calculate and set position based on screen width
  function updateDropdownPosition() {
    // The dropdown needs to be initially visible to get accurate measurements
    ageDropdownMenu.style.visibility = 'hidden';
    ageDropdownMenu.hidden = false;
    
    // Move the dropdown element to be a direct child of the Driver Age field container
    const driverAgeField = document.querySelector('.searchw__field--narrow');
    if (!driverAgeField.contains(ageDropdownMenu)) {
      // Only move the dropdown if it's not already a child of the field
      driverAgeField.appendChild(ageDropdownMenu);
    }
    
    // Set the width to match the field
    ageDropdownMenu.style.width = '100%';
    
    // Position dropdown directly under the field
    ageDropdownMenu.style.position = 'absolute';
    ageDropdownMenu.style.left = '0';
    ageDropdownMenu.style.top = '110%';
    ageDropdownMenu.style.zIndex = '1000';
    
    // Return visibility to its appropriate state
    ageDropdownMenu.style.visibility = '';
    ageDropdownMenu.hidden = ageDropdownBtn.getAttribute('aria-expanded') !== 'true';
  }
  
  // Update position on window resize - use throttled event for better performance
  let resizeTimeout;
  window.addEventListener('resize', function() {
    // Clear previous timeout
    clearTimeout(resizeTimeout);
    // Set new timeout to avoid excessive calculations during resize
    resizeTimeout = setTimeout(updateDropdownPosition, 50);
  });
});