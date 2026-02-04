document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("h1");

  title.addEventListener("click", () => {
    title.classList.toggle("pink");
  });
});
