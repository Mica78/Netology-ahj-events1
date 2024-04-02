/* eslint-disable no-undef */
import { test, expect } from "@jest/globals";
import { JSDOM } from "jsdom";

import Goblin from "../goblin";
import Area from "../area";

describe("goblinWidjet", () => {
  beforeEach(() => {
    const dom = new JSDOM();
    global.window = dom.window;
    global.document = dom.window.document;
    const area = new Area("body", 9).getGameArea();
    document.widget = new Goblin(area);
  });
  test("create", () => {
    document.widget.placeGoblin(0);
    const res = document.querySelector(".goblin");
    expect(res.className).toBe("goblin");
  });
  test("delete", () => {
    document.widget.placeGoblin(0);
    document.widget.deleteGoblin();
    const res = document.querySelector(".goblin");
    expect(res).toBe(null);
  });
});
