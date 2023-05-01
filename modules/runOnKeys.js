import { keyboard } from './keyboard.js';

export function runOnKeys(args) {
  const pressed = new Set();
  document.addEventListener('keydown', (e) => {
    pressed.add(e.code);
  });

  document.addEventListener('keyup', (e) => {
    if (pressed.length === 0) {
      return;
    }

    let runFunc = true;
    for (const arg of args) {
      if (!pressed.has(arg)) {
        runFunc = false;
        break;
      }
    }
    if (runFunc) {
      keyboard.switchLang();
    }
    pressed.clear();
  });
}
