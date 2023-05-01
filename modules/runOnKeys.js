import { keyboard } from "./keyboard.js";

export function runOnKeys (...args) {
  let pressed = new Set();
  document.addEventListener('keydown', function (e) {
    pressed.add(e.code)
  });

  document.addEventListener('keyup', function (e) {
    if (pressed.length == 0) {
      return;
    }

    let runFunc = true;
    for (let arg of args) {
      if (!pressed.has(arg)) {
        runFunc = false;
        break;
      }
    }
    if (runFunc) {
      keyboard.switchLang()
    }
    pressed.clear()
  })
}
