import { keyboard } from './modules/keyboard.js';
import { animation } from './modules/animation.js';
import { Description } from './modules/description.js';

window.addEventListener('DOMContentLoaded', () => {
  keyboard.init();
  animation.init();
  let description = new Description("This is Windows keyboard", "To switch language: press left Shift+Alt");
  description.init();
});
