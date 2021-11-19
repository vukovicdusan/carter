

const carouselSlide = document.querySelector(".carousel__slide");
const carouselImages = document.querySelectorAll(".slide");

/* BUTTONS */
const prev = document.getElementById("prev__btn");
const next = document.getElementById("next__btn");

/* COUNTER */
let counter = 1;
let size = carouselSlide.clientWidth;

// let counter = 1
// let size = carouselImages[0].clientWidth

window.addEventListener('resize', () => {
  // size = carouselImages[0].clientWidth
  size = carouselSlide.clientWidth;
  carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
  // ...
  // ...
  
})


// carouselSlide.style.transform = 'translateX(' + (-size * counter) + "px)";

/* BUTTON LISTENERS */
next.addEventListener('click',() => {
  if(counter >= carouselImages.length-1){
    return;
  }
  carouselSlide.style.transition = "transform .4s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + "px)";
} );

prev.addEventListener('click',() => {
  console.log("next clicked");
  if(counter <= 0){
    return;
  }
  carouselSlide.style.transition = "transform .4s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + "px)";
} );

carouselSlide.addEventListener('transitionend', ()=> {
  if(carouselImages[counter].id === "last__clone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length-2;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + "px)";
  }
  if(carouselImages[counter].id === "first__clone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length-counter;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + "px)";
  }
});