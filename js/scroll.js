function revealOnScroll() {
    let reveals = document.querySelectorAll(".reveal");

    reveals.forEach((el) => {
      let windowHeight = window.innerHeight;
      let elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 50) {
        el.classList.add("active");
      } else {
        el.classList.remove("active"); // reset when scroll up
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // initial call


