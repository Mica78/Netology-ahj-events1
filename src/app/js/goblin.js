import image from "@images/goblin.png";
export default class Goblin {
  constructor(element) {
    this._element = element;
    this.goblinImage = document.createElement("img");
    this.goblinImage.style.width = "100%";
    this.goblinImage.src = image;
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
