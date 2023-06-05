document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function (e) {
    const navbar = document.querySelector(".sticky-nav");
    console.log(navbar);
    const sticky = navbar.offsetTop;

    if (window.pageYOffset > sticky) {
      navbar.classList.add("visible");
    } else {
      navbar.classList.remove("visible");
    }
  });

  // scroll en bas
  const scrollArrow = document.querySelector(".scroll-arrow-down");

  scrollArrow.addEventListener("click", function (e) {
    const currentSection = document.querySelector(".current-section");
    const nextSection = currentSection.nextElementSibling;
    console.log("click");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
      currentSection.classList.remove("current-section");
      nextSection.classList.add("current-section");
    }
  });

  // scroll tout en haut
  const scrollArrowBas = document.querySelector(".scroll-arrow-up");
  scrollArrowBas.addEventListener("click", function (e) {
    const currentSection = document.querySelector(".current-section");
    // console.log("scrollArrowBas", scrollArrowBas);
    // console.log("currentSection", currentSection);
    const nextSection = currentSection.previousElementSibling;
    console.log("click");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
      currentSection.classList.remove("current-section-footer");
      nextSection.classList.add("current-section-footer");
    }
  });

  // Gestion de la visibilité des flèches
  window.addEventListener("scroll", function () {
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    const scrollArrowUp = document.querySelector(".scroll-arrow-up");
    const scrollArrowDown = document.querySelector(".scroll-arrow-down");
    console.log(scrollArrowUp);
    console.log(scrollArrowDown);

    if (scrollPosition > 200) {
      scrollArrowUp.classList.add("show");
    } else {
      scrollArrowUp.classList.remove("show");
    }
    const documentHeight = document.body.offsetHeight;
    const windowHeight = window.innerHeight;
    const distanceFromBottom = documentHeight - (scrollPosition + windowHeight);
    if (distanceFromBottom <= -200) {
      console.log(distanceFromBottom);
      scrollArrowDown.classList.remove("show");
    } else {
      console.log(distanceFromBottom);

      scrollArrowDown.classList.add("show");
    }
  });
});
