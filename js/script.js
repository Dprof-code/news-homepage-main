console.log("script loaded");

var menu = document.getElementById("nav");
var menuBtn = document.getElementById("menu-bar");
var overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", function menuBar() {
  menu.classList.toggle("show");
  overlay.classList.toggle("show");
  if (menu.classList.contains("show")) {
    menuBtn.src = "/assets/images/icon-menu-close.svg";
  } else {
    menuBtn.src = "/assets/images/icon-menu.svg";
  }
});
