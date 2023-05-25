const toggle = document.getElementById("toggleMenu");
const menu = document.getElementById("menu");
const arrowImg = (document.getElementById("arrow-img").ondragstart = () => {
  return false;
});
toggle.addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
}
