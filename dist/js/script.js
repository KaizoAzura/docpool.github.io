document.getElementById("asideToggler").addEventListener("click", function () {
  const aside = document.querySelector(".aside");
  const content = document.querySelector(".content");
  aside.classList.toggle("active");
  content.classList.toggle("shift");
});
