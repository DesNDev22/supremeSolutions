function initializeMenu () {
    // Mobile menu
    const menu = document.querySelector('.menu-items');
    const menuItem = document.querySelectorAll('.menuItem');
    const hamburguer = document.querySelector('.hamburguer');
    const closeIcon = document.querySelector('.close-icon');
    const menuIcon = document.querySelector('.menu-icon');
    const itemLink = document.querySelector('.item-link');
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
  }

  window.addEventListener('load', initializeMenu);