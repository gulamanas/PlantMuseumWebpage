// Navigation Responsive --------

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".r-nav");
  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");

    //Burger Animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

// Carousel functions ----------

const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//Gallery functions --------

const showImg = (img) => {
  const image = document.querySelector(".gallery__box");
  image.src = img.src;
};

// Smooth Scroll JQuery

$(".r-nav a").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    const something = this.hash;

    $("html , body").animate(
      {
        scrollTop: $(something).offset().top,
      },
      800
    );
  }
});
