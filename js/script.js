/*-----------------receives element/selects elements from SVG------------------------*/
let svgDeaf = document.querySelectorAll(".deaf");
let svgBox = document.querySelector(".box");
let svgHitHat = document.querySelectorAll(".hit-hat");
let svgHitHatFoot = document.querySelector(".hit-hat-foot");
let svgDish = document.querySelector(".dish");
let svgBassDrum = document.querySelectorAll(".bassdrum");
let svgTomLeft = document.querySelector(".tom-left");
let svgTomRight = document.querySelector(".tom-right");

/*-----------------game event trigger--------------------*/
document.body.addEventListener("keyup", (event) => {
  /*calls of the playsound function passing the event as a parameter*/
  playSound(event.code.toLowerCase());
});

/*----------------------function that receives keyboard event------------------------------*/
function playSound(sound) {
  /*------------------receives the element/selects the audio dynamically--------------------*/
  let audioElement = document.querySelector(`#sd_${sound}`);
  /*---------receives the element/selects the attribute of the typed key--------------------*/
  let keyElement = document.querySelector(`div[data-key="${sound}"]`);
  /*----receives the SVG attribute, referring to the typed key---------------------------*/
  let svgAnime = document
    .querySelector(`.toc[data-key="${sound}"]`)
    .getAttribute("data-key");

  /*----condition that receives the typed key attribute and makes the animation happen-----*/
  switch (svgAnime) {
    case "keya":
      svgDish.classList.add("dishExec");
      setTimeout(() => {
        svgDish.classList.remove("dishExec");
      }, 200);
      break;
    case "keyb":
      svgHitHatFoot.classList.add("hit-hat-footExec");
      setTimeout(() => {
        svgHitHatFoot.classList.remove("hit-hat-footExec");
      }, 200);
      break;
    case "keyc":
      svgTomLeft.classList.add("tom-leftExec");
      setTimeout(() => {
        svgTomLeft.classList.remove("tom-leftExec");
      }, 200);
      break;
    case "keyd":
      svgTomRight.classList.add("tom-rightExec");
      setTimeout(() => {
        svgTomRight.classList.remove("tom-rightExec");
      }, 200);
      break;
    case "keys":
      svgBassDrum.forEach((i) => i.classList.add("bassdrumExec"));
      setTimeout(() => {
        svgBassDrum.forEach((i) => i.classList.remove("bassdrumExec"));
      }, 200);
      break;
    case "keyj":
      svgBox.classList.add("boxExec");
      setTimeout(() => {
        svgBox.classList.remove("boxExec");
      }, 200);
      break;
    case "keyl":
      svgHitHat.forEach((i) => i.classList.add("hit-hatExec"));
      setTimeout(() => {
        svgHitHat.forEach((i) => i.classList.remove("hit-hatExec"));
      }, 200);
      break;
    case "keyk":
      svgDeaf.forEach((i) => i.classList.add("deafExec"));
      setTimeout(() => {
        svgDeaf.forEach((el) => el.classList.remove("deafExec"));
      }, 200);
      break;
    default:
      alert("Use somente as teclas mencionadas no jogo");
      break;
  }

  /*-------------animation event that displays color on instruction key-------------*/
  if (keyElement) {
    keyElement.classList.add("active");
    /*----------------play game audio---------------------*/
    if (audioElement) {
      audioElement.currentTime = 0;
      audioElement.play();
    }
    /*---------------remove event that displays color on instruction key---------------*/
    setTimeout(() => {
      keyElement.classList.remove("active");
    }, 300);
  }
}

/*-----------game audio recording event-------------*/
document.querySelector(".composer button").addEventListener("click", () => {
  /*-------------receives the value entered on the keyboard---------------*/
  let song = document.querySelector("#input").value;
  if (song !== "") {
    let songArray = song.split("");
    playComposition(songArray);
  }
});

/*------------function that receives array of keyboard events------------------*/
function playComposition(songArray) {
  let wait = 0;
  for (let songItem of songArray) {
    setTimeout(() => {
      playSound(`key${songItem}`);
    }, wait);
    wait += 250;
  }
}
