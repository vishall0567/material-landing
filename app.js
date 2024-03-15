const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 40) {
      nav.style.backgroundColor = "#3949ab";
    } else {
      nav.style.backgroundColor = "";
    }
  });
  