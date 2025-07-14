const body = document.body;
const themeToggles = document.querySelectorAll(".theme-toggle");

// Load stored theme
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-theme");
  themeToggles.forEach((icon) => {
    icon.classList.remove("bx-moon");
    icon.classList.add("bx-sun");
  });
}

// Toggle handler
themeToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    body.classList.toggle("light-theme");

    themeToggles.forEach((icon) => {
      if (body.classList.contains("light-theme")) {
        icon.classList.remove("bx-moon");
        icon.classList.add("bx-sun");
        localStorage.setItem("theme", "light");
      } else {
        icon.classList.remove("bx-sun");
        icon.classList.add("bx-moon");
        localStorage.setItem("theme", "dark");
      }
    });
  });
});
