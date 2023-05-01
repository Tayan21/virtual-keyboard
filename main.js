import { keyboard } from "./modules/keyboard.js";
import { animation } from "./modules/animation.js";


window.addEventListener('DOMContentLoaded', () => {
  keyboard.init()
  animation.init()
})