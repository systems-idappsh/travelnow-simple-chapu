/* =========================================================
   main.js
   Comportamiento mínimo: menú móvil y año del footer.
========================================================= */
(function () {
  "use strict";

  var menuBtn = document.getElementById("menuBtn");
  var nav = document.getElementById("nav");
  var headerInner = document.querySelector(".header-inner");

  function setMenuOpen(open) {
    nav.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.textContent = open ? "Cerrar" : "Menú";
    document.body.style.overflow = open ? "hidden" : "";
  }

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      setMenuOpen(!nav.classList.contains("open"));
    });

    nav.addEventListener("click", function (event) {
      if (event.target && event.target.closest && event.target.closest("a")) {
        setMenuOpen(false);
      }
    });

    document.addEventListener("click", function (event) {
      if (!nav.classList.contains("open")) return;
      if (headerInner && headerInner.contains(event.target)) return;
      setMenuOpen(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("open")) {
        setMenuOpen(false);
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 899 && nav.classList.contains("open")) {
        setMenuOpen(false);
      }
    }, { passive: true });
  }
})();
