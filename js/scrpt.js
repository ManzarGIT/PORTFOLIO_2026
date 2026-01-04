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
// ===== FLOATING BUBBLES EFFECT =====
document.addEventListener("DOMContentLoaded", () => {
  const bubblesContainer = document.querySelector(".floating-bubbles");

  if (bubblesContainer) {
    const bubbleCount = 20; // number of bubbles

    for (let i = 0; i < bubbleCount; i++) {
      const bubble = document.createElement("span");
      bubble.classList.add("bubble");

      // random size, position, and duration
      const size = Math.random() * 40 + 10 + "px";
      bubble.style.width = size;
      bubble.style.height = size;
      bubble.style.left = Math.random() * 100 + "%";
      bubble.style.animationDuration = Math.random() * 6 + 6 + "s";
      bubble.style.animationDelay = Math.random() * 3 + "s";

      bubblesContainer.appendChild(bubble);
    }
  }
});
// ===== WATER RIPPLE CLICK EFFECT =====
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");

  if (hero) {
    hero.addEventListener("click", (e) => {
      const ripple = document.createElement("span");
      ripple.classList.add("ripple");

      const rect = hero.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);

      ripple.style.width = ripple.style.height = `${size / 3}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 6}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 6}px`;

      hero.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 400); // match animation duration
    });
  }
});
// ===== GLOBAL PARALLAX GLOW + FLOATING PARTICLES =====
document.addEventListener("DOMContentLoaded", () => {
  const ambient = document.querySelector(".ambient-bg");
  if (!ambient) return;

  // parallax glow follows cursor
  document.addEventListener("mousemove", (e) => {
    ambient.style.setProperty("--glow-x", e.clientX + "px");
    ambient.style.setProperty("--glow-y", e.clientY + "px");
  });

  // generate floating particles
  const particleCount = 25;
  for (let i = 0; i < particleCount; i++) {
    const p = document.createElement("span");
    p.classList.add("particle");

    const size = Math.random() * 8 + 4 + "px";
    const left = Math.random() * 100 + "%";
    const duration = Math.random() * 6 + 8 + "s";
    const delay = Math.random() * 5 + "s";

    p.style.width = size;
    p.style.height = size;
    p.style.left = left;
    p.style.animationDuration = duration;
    p.style.animationDelay = delay;

    ambient.appendChild(p);
  }
});
// ===== GLOBAL TILT PARALLAX HOVER =====
document.addEventListener("DOMContentLoaded", () => {
  const tiltElements = document.querySelectorAll(".tilt");

  tiltElements.forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * 6; // max tilt in deg
      const rotateY = ((x - centerX) / centerX) * -6;

      el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    });
  });
});
