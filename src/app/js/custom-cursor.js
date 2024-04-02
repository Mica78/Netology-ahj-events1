import image from "@images/Hammer.png";
export default class CustomCursor {
  constructor(element) {
    this._image = image;
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
