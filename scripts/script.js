// Floating CTA
const ctaButton = document.querySelector('.CTA-Float');
const heroSection = document.querySelector('.hero');
const footerSection = document.querySelector('.foot-page');
// Mobile menu
const menu = document.querySelector('.menu-items');
const menuItem = document.querySelectorAll('.menuItem');
const hamburguer = document.querySelector('.hamburguer');
const closeIcon = document.querySelector('.close-icon');
const menuIcon = document.querySelector('.menu-icon');
const itemLink = document.querySelector('.item-link');


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
  //Remove the mobile menu if activated
  if (menu.classList.contains('showMenu')) {
    toggleMenu()
  }
}

// Attach the scroll event listener
window.addEventListener('scroll', toggleCTAButton);

// Initial check to show/hide the button on page load
toggleCTAButton();

function toggleMenu() {
    if (menu.classList.contains('showMenu')) {
        menu.classList.remove('showMenu')
        closeIcon.style.display = "none"
        menuIcon.style.display = "block"
    } else {
        menu.classList.add('showMenu')
        closeIcon.style.display = "block"
        menuIcon.style.display = "none"
    }
}

hamburguer.addEventListener("click", toggleMenu);

menuItem.forEach(
    function(menuItems) {
        menuItems.addEventListener("click", toggleMenu)
    }
)