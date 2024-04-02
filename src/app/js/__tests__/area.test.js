/* eslint-disable no-undef */
import { test, expect } from "@jest/globals";
import { JSDOM } from "jsdom";

import Area from "../area";

describe("testing Area", () => {
  beforeEach(() => {
    const dom = new JSDOM();
    global.window = dom.window;
    global.document = dom.window.document;
  });

  test("create area", () => {
    const element = new Area("body", 1);
    element.getGameArea();
    expect(Array.from(document.querySelectorAll(".hole")).length).toBe(1);
  });

  test("create header name", () => {
    const element = new Area("body", 1);
    const result = element.getHeader().querySelector("h1").textContent;
    expect(result).toBe("Game");
  });

  test("create header score", () => {
    const element = new Area("body", 1);
    const result = element.getHeader(5).querySelector("h2").textContent;
    expect(result).toBe("Нужно попасть еще 5 раз");
  });
});
