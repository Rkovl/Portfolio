window.onscroll = function() {myFunction()};


var navbar = document.querySelector(".nav-container");


var sticky = navbar.offsetTop;



function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("nav-container--scrolled")
    } else {
      navbar.classList.remove("nav-container--scrolled");
    }
  } 
