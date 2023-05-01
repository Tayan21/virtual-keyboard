import { textarea, backspace, enter, space, tab} from "./textarea.js";


export const keyboard = {
  elements: {
    container: null,
    keyboardWrap: null,
    keyboardKeys: null,
    keys: [],
  },

  keys: {
    keysShift: [
      "~",
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "_",
      "+",
      "Backspace",
      "Tab",
      "Q",
      "W",
      "E",
      "R",
      "T",
      "Y",
      "U",
      "I",
      "O",
      "P",
      "{",
      "}",
      "|",
      "CapsLock",
      "A",
      "S",
      "D",
      "F",
      "G",
      "H",
      "J",
      "K",
      "L",
      ":",
      '"',
      "Enter",
      "Shift",
      "Z",
      "X",
      "C",
      "V",
      "B",
      "N",
      "M",
      "<",
      ">",
      "?",
      "Up",
      "Shift",
      "Ctrl",
      "Win",
      "Alt",
      "Space",
      "Alt",
      "Left",
      "Down",
      "Right",
      "Ctrl",
    ],
    keysLower: [
      "`",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "-",
      "=",
      "Backspace",
      "Tab",
      "q",
      "w",
      "e",
      "r",
      "t",
      "y",
      "u",
      "i",
      "o",
      "p",
      "[",
      "]",
      "\\",
      "CapsLock",
      "a",
      "s",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      ";",
      "'",
      "Enter",
      "Shift",
      "z",
      "x",
      "c",
      "v",
      "b",
      "n",
      "m",
      ",",
      ".",
      "/",
      "Up",
      "Shift",
      "Ctrl",
      "Win",
      "Alt",
      "Space",
      "Alt",
      "Left",
      "Down",
      "Right",
      "Ctrl",
    ],
    keysUpper: [
      "`",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "-",
      "=",
      "Backspace",
      "Tab",
      "Q",
      "W",
      "E",
      "R",
      "T",
      "Y",
      "U",
      "I",
      "O",
      "P",
      "[",
      "]",
      "\\",
      "CapsLock",
      "A",
      "S",
      "D",
      "F",
      "G",
      "H",
      "J",
      "K",
      "L",
      ";",
      "'",
      "Enter",
      "Shift",
      "Z",
      "X",
      "C",
      "V",
      "B",
      "N",
      "M",
      ",",
      ".",
      "/",
      "Up",
      "Shift",
      "Ctrl",
      "Win",
      "Alt",
      "Space",
      "Alt",
      "Left",
      "Down",
      "Right",
      "Ctrl",
    ],
  },

  eventHandlers: {
    oninput: null,
  },

  properties: {
    capslock: false,
    shift: false
  },

  init() {
    this.elements.container = document.createElement("div");
    this.elements.keyboardWrap = document.createElement("div");
    this.elements.keyboardKeys = document.createElement("div");
    this.elements.row = document.createElement("div");

    this.elements.container.classList.add("container");
    this.elements.keyboardWrap.classList.add("keyboard_wrap");
    this.elements.keyboardKeys.classList.add("keyboard_keys");
    this.elements.row.classList.add("row");

    this.elements.row.appendChild(this.createKeys());

    this.elements.keys = this.elements.row.querySelectorAll(".keys");

    this.elements.keyboardKeys.append(this.elements.row);
    this.elements.keyboardWrap.append(this.elements.keyboardKeys);
    this.elements.container.append(this.elements.keyboardWrap);
    document.body.prepend(this.elements.container);
  },

  createKeys() {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < this.keys.keysLower.length; i++) {
      const keyElement = document.createElement("div");
      keyElement.classList.add("keys");
      keyElement.textContent = this.keys.keysLower[i];
      keyElement.addEventListener('click', () => {
        keyElement.classList.add("active", "remove")
        setTimeout(() => {
          keyElement.classList.remove("active", "remove")
        }, 200)
      })

      switch (this.keys.keysLower[i]) {
        case "Backspace":
          keyElement.classList.add("backspace_key");
          keyElement.addEventListener("click", backspace);
          break;

        case "CapsLock":
          keyElement.classList.add("caps_lock_key");
          keyElement.addEventListener("click", () => {
            this.toggleCapsLock();
            keyElement.classList.toggle(
              "caps_lock_key--active",
              this.properties.capslock
            );
          });
          break;

        case "Enter":
          keyElement.classList.add("enter_key");
          keyElement.addEventListener("click", enter);
          break;

        case "Win":
          keyElement.classList.add("win_key");
          break;

        case "Space":
          keyElement.classList.add("space_key");
          keyElement.addEventListener("click", space);
          break;

        case "Shift":
          if (this.keys.keysLower[i - 1] == "Enter") {
            keyElement.classList.add("shift_key", "shift_left");
          } else {
            keyElement.classList.add("shift_key", "shift_right");
          }
          keyElement.addEventListener("mousedown", () => {
            keyElement.classList.add("active");
            this.properties.shift = true;
            this.shiftPressed()
          });
          keyElement.addEventListener("mouseup", () => {
            keyElement.classList.remove("active");
            this.properties.shift = false;
            this.shiftPressed()
          });
          break;

        case "Tab":
          keyElement.classList.add("tab_key");
          keyElement.addEventListener("click", tab);
          break;

        case "Alt":
          if (this.keys.keysLower[i - 1] == "Win") {
            keyElement.classList.add("alt_key", "alt_left");
          } else {
            keyElement.classList.add("alt_key", "alt_right");
          }
          break;

        case "Ctrl":
          if (this.keys.keysLower[i - 1] == "Shift") {
            keyElement.classList.add("ctrl_key", "ctrl_left");
          } else {
            keyElement.classList.add("ctrl_key", "ctrl_right");
          }
          break;

        default:
          keyElement.addEventListener("click", () => {
            if (this.properties.shift) {
              textarea.value += this.keys.keysShift[i];
            } else if (this.properties.capslock) {
              textarea.value += this.keys.keysLower[i].toUpperCase()
            } else {
              textarea.value += this.keys.keysLower[i].toLowerCase();
            }
             

          });
          break;
      }
      fragment.appendChild(keyElement);
    }
    return fragment;
  },

  toggleCapsLock() {
    this.properties.capslock = !this.properties.capslock;

    for (let i = 0; i < this.elements.keys.length; i++) {
      if (this.properties.capslock) {
        this.elements.keys[i].textContent = this.keys.keysUpper[i];
      } else {
        this.elements.keys[i].textContent = this.keys.keysLower[i];
      }
    }
  },

  shiftPressed() {
    for (let i = 0; i < this.elements.keys.length; i++) {
      if (this.properties.shift) {
        this.elements.keys[i].textContent = this.keys.keysShift[i];
      } else {
        this.elements.keys[i].textContent = this.keys.keysLower[i];
      }
    }
  }
};
