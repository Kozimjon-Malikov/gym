window.addEventListener("DOMContentLoaded", () => {
  // toTOp
  function scrollTop() {
    let toTop = document.querySelector(".toTop");
    if (
      document.documentElement.scrollTop > 20 ||
      document.body.scrollTop > 20
    ) {
      toTop.style.display = "flex";
    } else {
      toTop.style.display = "none";
    }
  }
  window.onscroll = scrollTop;
  // first head
  const navigator__1 = document.querySelector(".navigator__1"),
    company__details = document.querySelector(".company__details"),
    contact__top = document.querySelector(".contact__top"),
    innerParentNavLinks = document.querySelector(".inner__sub__menu"),
    innerNavlinks = document.querySelectorAll(".inner__sub__menu > ul > li");
  navigator__1.addEventListener("click", () => {
    company__details.classList.toggle("active__nav");
    contact__top.classList.toggle("active__nav");
    navigator__1.classList.toggle("active__bar");
  });
  innerNavlinks.forEach((item) => {
    item.addEventListener("click", () => {
      innerParentNavLinks.classList.toggle("active__inner__nav");
    });
  });

  function slide2() {
    var swiper1 = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
  function slide3() {
    // second part__gym
    var swiper2 = new Swiper(".mySwiper2", {
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".next__gym",
        prevEl: ".prev__gym",
      },
      breakpoints: {
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1920: {
          slidesPerView: 4,
        },
      },
    });
  }
  function slide4() {
    // second part__gym
    var swiper3 = new Swiper(".mySwiper3", {
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      },
      breakpoints: {
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1920: {
          slidesPerView: 4,
        },
      },
    });
  }
  function slide5() {
    // athetics
    var swiper4 = new Swiper(".mySwiper4", {
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".next__ath",
        prevEl: ".prev__ath",
      },
      breakpoints: {
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1920: {
          slidesPerView: 4,
        },
      },
    });
  }
  function slide6() {
    var swiper6 = new Swiper(".mySwiper6", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper6pro = new Swiper(".mySwiper6pro", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".gallery__prev",
        prevEl: ".gallery__next",
      },
      thumbs: {
        swiper: swiper6,
      },
      breakpoints: {
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 1,
        },
        1920: {
          slidesPerView: 1,
        },
      },
    });
  }

  slide2();
  slide3();
  slide4();
  slide5();
  slide6();
  new WOW().init();
});
