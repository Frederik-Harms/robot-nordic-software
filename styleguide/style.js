const menuIcon = document.querySelector(".burger-menu-sg");
const navbar = document.querySelector(".navbar-sg");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});
