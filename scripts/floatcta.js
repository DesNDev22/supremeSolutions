const ctaButton = document.querySelector('.CTA-Float');
const heroSection = document.querySelector('.hero');
const footerSection = document.querySelector('.foot-page');

// Function to check the scroll position and show/hide the CTA button
function toggleCTAButton() {
    const scrollPosition = window.scrollY;
    const heroSectionBottom = heroSection.offsetTop + heroSection.offsetHeight;
    const footerSectionTop = footerSection.offsetTop;
  
    if (scrollPosition > heroSectionBottom && scrollPosition + window.innerHeight < footerSectionTop) {
      ctaButton.style.bottom = '0px'; // Show the button
    } else {
      ctaButton.style.bottom = '-100px'; // Hide the button
    }
  }
  
  // Attach the scroll event listener
  window.addEventListener('scroll', toggleCTAButton);
  
  // Initial check to show/hide the button on page load
  toggleCTAButton();  