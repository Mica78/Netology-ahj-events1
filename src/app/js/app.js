import Goblin from "./goblin.js";
import CustomCursor from "./custom-cursor.js";
import Area from "./area.js";

export default class App {
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
