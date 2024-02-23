window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  let heroSection = document.getElementById("hero");
  let headerHeight = header.offsetHeight;
  let heroBottom = heroSection.offsetTop + heroSection.offsetHeight;

  let aside = document.querySelector("aside");
  let discoverySection = document.getElementById("discover");
  let discoverySectionTop = discoverySection.offsetTop;

  if (window.scrollY > heroBottom - headerHeight) {
    header.classList.add("header-changed");
  } else {
    header.classList.remove("header-changed");
  }

  if (window.scrollY > discoverySectionTop) {
    aside.classList.add("sticky-aside");
  } else {
    aside.classList.remove("sticky-aside");
  }
});
