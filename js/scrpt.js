/* =========================================
   GLOBAL INTERACTIONS
   Smooth scroll, active nav links,
   project filtering, and form validation
=========================================*/

/* ----- SMOOTH SCROLL + ACTIVE LINK ----- */
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // highlight active link
    navLinks.forEach((l) => l.classList.remove("active"));
    e.target.classList.add("active");
  });
});

/* ----- PROJECT FILTERING (on projects.html) ----- */
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

if (filterButtons.length && projectCards.length) {
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const category = btn.getAttribute("data-filter");

      // highlight active filter
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      projectCards.forEach((card) => {
        const type = card.getAttribute("data-type");
        if (category === "all" || category === type) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

/* ----- BASIC CONTACT FORM VALIDATION (on contact.html) ----- */
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("#name").value.trim();
    const email = form.querySelector("#email").value.trim();
    const message = form.querySelector("#message").value.trim();

    if (!name || !email || !message) {
      alert("⚠️ Please fill in all fields before submitting.");
      return;
    }

    if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(email)) {
      alert("⚠️ Please enter a valid email address.");
      return;
    }

    alert("✅ Message sent successfully!");
    form.reset();
  });
}
