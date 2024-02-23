window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  let heroSection = document.getElementById("hero");
  let headerHeight = header.offsetHeight;
  let heroBottom = heroSection.offsetTop + heroSection.offsetHeight;

  if (window.scrollY > heroBottom - headerHeight) {
    header.classList.add("header-changed");
  } else {
    header.classList.remove("header-changed");
  }
});
