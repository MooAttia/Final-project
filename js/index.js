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



function hello(x, y) {
  let x1 = x;
  let x2 = y;

  return {
    add: function() {
      return this.x+this.y
    },
    sub: function() {
      return this.x*this.y
    },
    inc: function(num) {
      if(attr == 'x')this.x++
      else y++
    }
  };
}

let incrementer = hello(2, 2);



 
