window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    var header = document.querySelector('header');
    
    if (window.scrollY > header.offsetHeight) {
      nav.classList.remove('navbar-hidden');
      nav.classList.add('navbar-visible');
    } else {
      nav.classList.remove('navbar-visible');
      nav.classList.add('navbar-hidden');
    }
  });





 
