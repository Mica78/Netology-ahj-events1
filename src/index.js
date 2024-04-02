import "./app/css/style.css";
import "./app/images/goblin.png";
import "./app/images/Hammer.png";
import "./app/js/area";
import "./app/js/goblin";
import "./app/js/custom-cursor";
import "./app/js/app";

import App from "./app/js/app";

const settings = {
  container: ".widget-container",
  numberOfHoles: 16,
  score: 5,
  goblinTime: 1000,
};

const app = new App(settings);
app.run();
