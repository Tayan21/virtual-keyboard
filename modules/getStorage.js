import { keyboard } from './keyboard.js';

export function getStorage() {
  let storage;
  if (!keyboard.properties.lang) {
    localStorage.setItem('lang', JSON.stringify(keyboard.keys.keysLower));
  } else {
    localStorage.setItem('lang', JSON.stringify(keyboard.keys.keysLowerRus));
  }
  storage = JSON.parse(localStorage.getItem('lang'));
  return storage;
}
