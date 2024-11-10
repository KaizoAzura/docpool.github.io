const menuToggler = document.getElementById("menuToggler");
const sidebar = document.querySelector(".aside");

menuToggler.addEventListener("click", function () {
  sidebar.classList.toggle("expand");
});
