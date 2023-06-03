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
