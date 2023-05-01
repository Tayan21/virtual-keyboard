import keyboard from './keyboard.js';

export default function replaceLang(args) {
  const pressed = new Set();
  document.addEventListener('keydown', (e) => {
    pressed.add(e.code);
  });

  document.addEventListener('keyup', () => {
    if (pressed.length === 0) {
      return;
    }

    let runFunc = true;
    for (let i = 0; i < args.length; i += 1) {
      if (!pressed.has(args[i])) {
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
