document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-button");
  const mobileNav = document.querySelector(".mobile-nav");

  if (menuButton && mobileNav) {
    menuButton.addEventListener("click", () => {
      mobileNav.classList.toggle("open");
    });

    mobileNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
      });
    });
  }

  const modal = document.querySelector(".modal");
  const modalText = document.querySelector(".modal-text");
  const closeButton = document.querySelector(".modal-close");

  document.querySelectorAll(".more-button").forEach(button => {
    button.addEventListener("click", () => {
      if (!modal || !modalText) return;
      modalText.textContent = button.dataset.text || "";
      modal.classList.add("active");
      modal.setAttribute("aria-hidden", "false");
    });
  });

  if (closeButton && modal) {
    closeButton.addEventListener("click", () => {
      modal.classList.remove("active");
      modal.setAttribute("aria-hidden", "true");
    });

    modal.addEventListener("click", event => {
      if (event.target === modal) {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
      }
    });
  }
});
