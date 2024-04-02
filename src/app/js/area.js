// модуль будет формировать игровое поле и табло

export default class Area {
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
