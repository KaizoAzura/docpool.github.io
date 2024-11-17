document.querySelectorAll(".btn-close-accordion").forEach((button) => {
  button.addEventListener("click", function () {
    const item = button.closest(".accordion-item");
    item.classList.add("removed");
    setTimeout(() => item.remove(), 300);
  });
});
