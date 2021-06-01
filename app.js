const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo')

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = ( ) => {
    const elem = document.querySelector('.highlight');
    const homeMenu= document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const servicesMenu = document.querySelector('#services-page');
    let scrollPos = window.scrollY;

    // adds 'highlights' class to my menu items
    if(window.innerWidth >  768 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 768 && scrollPos < 1400) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 768 && scrollPos < 2345) {
        servicesMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }

    if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
    }

} ;

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
      menu.classList.toggle('is-active');
      menuLinks.classList.remove('active');
    }
  };
  
  menuLinks.addEventListener('click', hideMobileMenu);
  navLogo.addEventListener('click', hideMobileMenu);

  //Modal items
  const modal = document.getElementById('email-modal');
  const openBtn = document.querySelector('.main-btn');
  const closeBtn = document.querySelector('.close-btn');

  //Click events
  openBtn.addEventListener('click', () => {
      modal.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
      if(e.target === modal) {
          modal.style.display = 'none'
        }
  })

  

  //Form Validation
  const form = document.getElementById('form');
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const passwordConfirm = document.getElementById('password-confirm');


  //Show error massage
  function showError(input, massage) {
      const formValidation = input.parentElement;
      formValidation.className = 'form-validation error';

      const errorMassage = formValidation.querySelector('p');
      errorMassage.innerText = massage;
  }

  //BOOM BOOM


  //Event listeners
  form.addEventListener('submit', (e) => {
      e.preventDefault();

      checkRequired([name, email, password, passwordComfirm]);
  })