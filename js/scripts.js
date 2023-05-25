const toggle = document.getElementById("toggleMenu");
const menu = document.getElementById("menu");

toggle.addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
}
