/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/app/images/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// CONCATENATED MODULE: ./src/app/images/Hammer.png
const Hammer_namespaceObject = __webpack_require__.p + "1fd9c851a27fb4701357.png";
;// CONCATENATED MODULE: ./src/app/js/goblin.js

class Goblin {
  constructor(element) {
    this._element = element;
    this.goblinImage = document.createElement("img");
    this.goblinImage.style.width = "100%";
    this.goblinImage.src = goblin_namespaceObject;
    this.goblinImage.classList.add("goblin");
    this.goblinImage.margin = "auto";
    this.childrens = this._element.querySelectorAll(".hole");
  }
  placeGoblin(randomNumber) {
    const element = this.childrens[randomNumber];
    return element.insertBefore(this.goblinImage, element.firstChild);
  }
  deleteGoblin() {
    const goblin = this._element.querySelector(".goblin");
    goblin.remove();
  }
}
;// CONCATENATED MODULE: ./src/app/js/custom-cursor.js

class CustomCursor {
  constructor(element) {
    this._image = Hammer_namespaceObject;
    this._element = document.querySelector(element);
    this._cursor = undefined;
    this.moveCursor = this.moveCursor.bind(this);
    this.turnCursor = this.turnCursor.bind(this);
    document.addEventListener("mousemove", this.moveCursor);
    document.addEventListener("click", this.turnCursor);
  }
  get cursor() {
    return this._cursor;
  }
  createCursor() {
    this._cursor = document.createElement("img");
    this._cursor.classList.add("cursor");
    this._cursor.src = this._image;
    this._element.insertAdjacentElement("beforebegin", this._cursor);
    return this._cursor;
  }
  moveCursor(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    //как точно отцентровать картинку по координатам курсора не пойму
    this._cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    return this._cursor;
  }
  turnCursor(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    this._cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) rotate(45deg)`;
    setTimeout(() => {
      this._cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) rotate(0deg)`;
    }, 100);
  }
}
;// CONCATENATED MODULE: ./src/app/js/area.js
// модуль будет формировать игровое поле и табло

class Area {
  constructor(element, numberOfHoles) {
    if (typeof element === "string") {
      this._element = document.querySelector(element);
    }
    if (typeof numberOfHoles === "number") {
      this._numberOfHoles = numberOfHoles;
    }
  }
  getGameArea() {
    const gameArea = document.createElement("div");
    gameArea.classList.add("area");
    let i = 1;
    while (i <= this._numberOfHoles) {
      const hole = document.createElement("div");
      hole.classList.add("hole");
      gameArea.insertAdjacentElement("afterbegin", hole);
      i++;
    }
    this._element.insertAdjacentElement("beforeend", gameArea);
    return gameArea;
  }
  getHeader(score) {
    const header = document.createElement("div");
    header.classList.add("header");
    const h1 = document.createElement("h1");
    h1.textContent = "Game";
    this.score = document.createElement("h2");
    this.score.textContent = `Нужно попасть еще ${score} раз`;
    header.insertAdjacentElement("afterbegin", h1);
    header.insertAdjacentElement("beforeend", this.score);
    this._element.insertAdjacentElement("afterbegin", header);
    return header;
  }
}
;// CONCATENATED MODULE: ./src/app/js/app.js



class App {
  constructor(settings) {
    this._element = document.querySelector(settings.container);
    this.numberOfHoles = settings.numberOfHoles;
    this.score = settings.score;
    this.goblinTime = settings.goblinTime;
    this.area = new Area(settings.container, this.numberOfHoles);
    this.area.getHeader(this.score);
    this.attempt = settings.score;
    this.cursor = new CustomCursor(settings.container);
    this.cursor.createCursor();
    this.onClickGoblin = this.onClickGoblin.bind(this);
    document.addEventListener("click", this.onClickGoblin);
  }
  run() {
    const goblin = new Goblin(this.area.getGameArea());
    let randomNumber = Math.floor(Math.random() * (this.numberOfHoles - 1));
    goblin.placeGoblin(randomNumber);
    setInterval(() => {
      if (this.attempt <= 0) {
        this.area.score.textContent = "Конец игры";
        return;
      } else {
        goblin.deleteGoblin();
        // eslint-disable-next-line prettier/prettier
        let anotherRandomNumber = Math.floor(Math.random() * (this.numberOfHoles - 1));
        while (anotherRandomNumber === randomNumber) {
          // eslint-disable-next-line prettier/prettier
          anotherRandomNumber = Math.floor(Math.random() * (this.numberOfHoles - 1));
        }
        goblin.placeGoblin(anotherRandomNumber);
        randomNumber = anotherRandomNumber;
      }
    }, this.goblinTime);
  }
  onClickGoblin(event) {
    if (event.target.classList.contains("goblin")) {
      this.score -= 1;
      this.area.score.textContent = `Нужно попасть еще ${this.score} раз`;
    } else if (event.target.classList.contains("hole")) {
      this.attempt -= 1;
    }
  }
}
;// CONCATENATED MODULE: ./src/index.js








const settings = {
  container: ".widget-container",
  numberOfHoles: 16,
  score: 5,
  goblinTime: 1000
};
const app = new App(settings);
app.run();
/******/ })()
;