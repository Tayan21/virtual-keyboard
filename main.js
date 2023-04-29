import { keyboard } from "./modules/keyboard.js";
import { animation } from "./modules/animation.js";
import { TextArea } from "./modules/textarea.js";

window.addEventListener('DOMContentLoaded', () => {
  keyboard.init()
  animation.init()
  let text = new TextArea("text")
  text.init()
})