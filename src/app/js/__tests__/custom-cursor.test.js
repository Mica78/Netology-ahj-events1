/* eslint-disable no-undef */
import { test, expect } from "@jest/globals";
import { JSDOM } from "jsdom";

import CustomCursor from "../custom-cursor";

describe("testing Cursor", () => {
  beforeEach(() => {
    const dom = new JSDOM();
    global.window = dom.window;
    global.document = dom.window.document;
  });

  test("create cursor", () => {
    const element = new CustomCursor("body");
    const res = element.createCursor();
    expect(res.classList.contains("cursor")).toBe(true);
  });

  test("move cursor", () => {
    const element = new CustomCursor("body");
    element.createCursor();
    const MouseEvent = window.MouseEvent;
    const event = new MouseEvent("mousemove", {
      view: window,
      bubbles: true,
      cancelable: true,
      clientX: 200,
      clientY: 9,
    });
    element.moveCursor(event);
    expect(element._cursor.style.transform).toBe(
      // eslint-disable-next-line prettier/prettier
      "translate3d(200px, 9px, 0)"
    );
  });
});
