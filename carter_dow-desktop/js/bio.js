/*=== BIO SELECTOR FUNCTION ===*/
let bioImg = document.getElementById("info__img--bio");
let titleCarter = document.querySelector(".bio__title--carter");
let titleNikki = document.querySelector(".bio__title--nikki");
let bioCarter = document.querySelector(".bio__content--carter");
let bioNikki = document.querySelector(".bio__content--nikki");



titleNikki.addEventListener("click", (e) => {
  bioImg.classList.remove("bio__img--carter");
  bioImg.classList.add("bio__img--nikki");
  bioNikki.classList.remove("hide");
  bioCarter.classList.add("hide");
  titleCarter.classList.remove("active");
  titleNikki.classList.add("active");
});

titleCarter.addEventListener("click", (e) => {
  bioImg.classList.remove("bio__img--nikki");
  bioImg.classList.add("bio__img--carter");
  bioNikki.classList.add("hide");
  bioCarter.classList.remove("hide");
  titleCarter.classList.add("active");
  titleNikki.classList.remove("active");
});

let imgNikki = new Image();
imgNikki.src = "./css/img/sections/bio-nikki.jpg";
imgNikki.onload = function() {
  bioImg.classList.add("bio__img--nikki");
}

let imgCarter = new Image();
imgCarter.src = "./css/img/sections/bio-carter.jpg";
imgCarter.onload = function() {
  let bioImg = document.getElementById("info__img--bio");
  bioImg.classList.add("bio__img--carter");
}


