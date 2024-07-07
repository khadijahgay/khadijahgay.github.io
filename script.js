/*
Student Name: Khadijah Gay
File Name: script.js
Date: 06/20/24
*/
function hamburger() {
  var menu = document.getElementById("myLinks");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}