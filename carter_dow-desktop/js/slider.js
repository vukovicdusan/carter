

const carouselSlide = document.querySelector(".carousel__slide");
const carouselImages = document.querySelectorAll(".slide");

const caption = document.querySelectorAll('.caption__line');
const current = document.querySelector('.current');
const nextCaption = current.nextElementSibling;
const prevCaption = current.previousElementSibling;

/* BUTTONS */
const prev = document.getElementById("prev__btn");
const next = document.getElementById("next__btn");

/* COUNTER */
let counter = 1;
let size = carouselSlide.clientWidth;



window.addEventListener('resize', () => {

  size = carouselSlide.clientWidth;
  carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
})


// carouselSlide.style.transform = 'translateX(' + (-size * counter) + "px)";

/* BUTTON LISTENERS */
next.addEventListener('click',() => {
  const current = document.querySelector('.current');
const nextCaption = current.nextElementSibling;
  if(counter >= carouselImages.length-1){
    return;
  }
  carouselSlide.style.transition = "transform .4s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + "px)";

  if (caption[caption.length - 1].classList.contains("current")) {
    caption[0].classList.add("current");
    caption[caption.length - 1].classList.remove("current");
  } else {  
    current.classList.remove("current");
    nextCaption.classList.add("current");
  }
} );

prev.addEventListener('click',() => {
  const current = document.querySelector('.current');
  const prevCaption = current.previousElementSibling;
  if(counter <= 0){
    return;
  }
  carouselSlide.style.transition = "transform .4s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + "px)";

  caption[0].classList.add('its-me');
  if (caption[0].classList.contains("current")) {
    caption[caption.length-1].classList.add('current');
    caption[0].classList.remove("current");
  } else {  
    current.classList.remove("current");
    prevCaption.classList.add("current");
  }

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


 