mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
function myFunction(x) {
  x.classList.toggle("change");
}


var menuIcon = document.querySelector(".menu-icon");
var menubar = document.querySelector(".menubar");

menuIcon.onclick = function(){
    menubar.classList.toggle("menubar2")
}
