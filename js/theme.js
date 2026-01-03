document.addEventListener("DOMContentLoaded", () => {
  const themeButtons = document.querySelectorAll(".theme-btn");
  const body = document.body;

  const savedTheme = localStorage.getItem("selectedTheme") || "light";
  body.setAttribute("data-theme", savedTheme);

  function addTransition() {
    body.classList.add("theme-transition");
    setTimeout(() => body.classList.remove("theme-transition"), 400);
  }

  themeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedTheme = btn.getAttribute("data-theme");
      addTransition();
      body.setAttribute("data-theme", selectedTheme);
      localStorage.setItem("selectedTheme", selectedTheme);
    });
  });

  const style = document.createElement("style");
  style.innerHTML = `
    .theme-transition {
      transition: background-color 0.4s ease, color 0.4s ease;
    }
  `;
  document.head.appendChild(style);
});
