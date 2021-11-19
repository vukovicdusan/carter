let i = 0;
function topBar() {
  if (i == 0) {
    i = 1;
    let bar = document.querySelector(".loader--bar");
    let width = 1;
    let id = setInterval(frame, 15);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        setTimeout(()=>{
        bar.style.display = "none";
        }, 1000)
      } else {
        width++;
        bar.style.width = width + "%";
      }
    }
  } 
}
/*=== RANDOM BACKGROUND ===*/
function randomBackground(){
  let element = document.querySelector('.home__background');
  let backgrounds = ['css/img/abstract.jpg', 'css/img/main.jpg' ]
  let random = Math.floor(Math.random() * backgrounds.length);
  element.style.backgroundImage = 'url("' + backgrounds[random] + '")';
}

/*=== INTRO FUNCTION ===*/
// window.onload = function () {
//   if (localStorage.getItem("hasCodeRunBefore") === null) {
//     intro ();
//       localStorage.setItem("hasCodeRunBefore", true);
//   }
// }
let introDiv = document.querySelector('.intro__wrapper');
function intro () {
  setTimeout((function hideIntro() {
    introDiv.style.opacity = '0';
  }),3000)
  setTimeout((function displayNone(){
    introDiv.style.display = 'none';
  }), 4000)
}

