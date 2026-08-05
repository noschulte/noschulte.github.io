document.addEventListener("DOMContentLoaded", () => {
  const slides = Array.from(
    document.querySelectorAll(".carousel-slide")
  );

  const dots = Array.from(
    document.querySelectorAll(".carousel-dot")
  );

  const previousButton = document.querySelector(
    ".carousel-previous"
  );

  const nextButton = document.querySelector(
    ".carousel-next"
  );

  if (
    slides.length === 0 ||
    dots.length !== slides.length ||
    !previousButton ||
    !nextButton
  ) {
    return;
  }

  let currentSlide = 0;
  let automaticTimer;

  function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle(
        "active",
        slideIndex === currentSlide
      );
    });

    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle(
        "active",
        dotIndex === currentSlide
      );
    });
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function previousSlide() {
    showSlide(currentSlide - 1);
  }

  function restartAutomaticRotation() {
    window.clearInterval(automaticTimer);
    automaticTimer = window.setInterval(nextSlide, 6000);
  }

  previousButton.addEventListener("click", () => {
    previousSlide();
    restartAutomaticRotation();
  });

  nextButton.addEventListener("click", () => {
    nextSlide();
    restartAutomaticRotation();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      restartAutomaticRotation();
    });
  });

  showSlide(0);
  restartAutomaticRotation();
});
