class MyCustomSection extends HTMLElement {
  constructor() {
    super();

    const sectionEl = this.querySelector("section");
    const sectionButton = this.querySelector(".section__btn");
    const text1 = this.querySelector(".section__text-item--1");
    const text2 = this.querySelector(".section__text-item--2");

    // TEXTS TOGGLE
    let isAnimatingOut = true;

    const toggleTexts = function () {
      if (isAnimatingOut) {
        // Slide out text1 and slide in text2
        text1.classList.add("is-hidden");
        text1.classList.remove("is-visible");
        text2.classList.add("is-visible");
        text2.classList.remove("is-hidden");
      } else {
        // Slide in text1 and slide out text2
        text1.classList.add("is-visible");
        text1.classList.remove("is-hidden");
        text2.classList.add("is-hidden");
        text2.classList.remove("is-visible");
      }
      isAnimatingOut = !isAnimatingOut;
    };
    sectionButton.addEventListener("click", toggleTexts);

    // SECTION INTERSECTION OBSERVER
    const sectionObserverCallback = function (entries) {
      const entry = entries[0];

      if (entry.isIntersecting) {
        sectionEl.classList.add("show");
        sectionEl.style.visibility = "visible";
      } else {
        sectionEl.classList.remove("show");
        setTimeout(() => {
          sectionEl.style.visibility = "hidden";
        }, 250);
      }
    };

    const sectionObserverOptions = {
      root: null,
      threshold: 0.5,
    };

    const sectionObserver = new IntersectionObserver(
      sectionObserverCallback,
      sectionObserverOptions
    );

    sectionObserver.observe(sectionEl);
  }
}

customElements.define("my-custom-section", MyCustomSection);
// // SELECT NEEDED ITEMS
// const sectionEl = document.querySelector("section");
// const sectionButton = document.querySelector(".section__btn");
// const text1 = document.querySelector(".section__text-item--1");
// const text2 = document.querySelector(".section__text-item--2");

// // TEXTS TOGGLE
// let isAnimatingOut = true;

// const toggleTexts = function () {
//   if (isAnimatingOut) {
//     // Slide out text1 and slide in text2
//     text1.classList.add("is-hidden");
//     text1.classList.remove("is-visible");
//     text2.classList.add("is-visible");
//     text2.classList.remove("is-hidden");
//   } else {
//     // Slide in text1 and slide out text2
//     text1.classList.add("is-visible");
//     text1.classList.remove("is-hidden");
//     text2.classList.add("is-hidden");
//     text2.classList.remove("is-visible");
//   }
//   isAnimatingOut = !isAnimatingOut;
// };
// sectionButton.addEventListener("click", toggleTexts);

// // SECTION INTERSECTION OBSERVER
// const sectionObserverCallback = function (entries) {
//   const entry = entries[0];

//   if (entry.isIntersecting) {
//     sectionEl.classList.add("show");
//     sectionEl.style.visibility = "visible";
//   } else {
//     sectionEl.classList.remove("show");
//     setTimeout(() => {
//       sectionEl.style.visibility = "hidden";
//     }, 250);
//   }
// };

// const sectionObserverOptions = {
//   root: null,
//   threshold: 0.3,
// };

// const sectionObserver = new IntersectionObserver(
//   sectionObserverCallback,
//   sectionObserverOptions
// );

// sectionObserver.observe(sectionEl);
