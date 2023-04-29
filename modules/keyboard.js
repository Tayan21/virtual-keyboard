export const keyboard = {
  elements: {
    container: null,
    keyboardWrap: null,
    keyboardKeys: null,
    keys: [],
  },

  keys: {
    keysUpper: [
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
      "\"",
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
    ]
  },

  eventHandlers: {
    oninput: null,
  },

  properties: {
    value: "",
    capslock: false,
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

    this.elements.keys = this.elements.row.querySelectorAll('.keys');
    console.log(this.elements.keys)

    this.elements.keyboardKeys.append(this.elements.row);
    this.elements.keyboardWrap.append(this.elements.keyboardKeys);
    this.elements.container.append(this.elements.keyboardWrap);
    document.body.prepend(this.elements.container);
  },

  createKeys() {
    const fragment = document.createDocumentFragment();

    this.keys.keysLower.forEach((key) => {
      const keyElement = document.createElement("div");
      keyElement.classList.add("keys");
      keyElement.textContent = key;

      switch (key) {
        case "Backspace":
          keyElement.classList.add("backspace_key");
          keyElement.addEventListener("click", () => {
            this.properties.value = this.properties.value.substring(
              0,
              this.properties.value.length - 1
            );
            this.triggerEvent("oninput");
          });
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
          keyElement.addEventListener("click", () => {
            this.properties.value += "\n";
            this.triggerEvent("oninput");
          });
          break;

        case "Space":
          keyElement.classList.add("space_key");
          keyElement.addEventListener("click", () => {
            this.properties.value += " ";
            this.triggerEvent("oninput");
          });
          break;

        case "Shift":
          keyElement.classList.add("shift_key");
          keyElement.addEventListener("keydown", () => {
            
          });
          break;

        case "Tab":
          keyElement.classList.add("tab_key");
          keyElement.addEventListener("click", () => {
            this.properties.value += "    ";
            this.triggerEvent("oninput");
          });
          break;

        default:
          keyElement.addEventListener("click", () => {
            this.properties.value += this.properties.capslock
              ? key.toUpperCase()
              : key.toLowerCase();
            this.triggerEvent("oninput");
          });
          break;
      }
      fragment.appendChild(keyElement);
    });
    return fragment;
  },

  triggerEvent(handlerName) {
    console.log("Event Name " + handlerName);
  },

  toggleCapsLock() {
    this.properties.capslock = !this.properties.capslock;

    for (let i = 0; i < this.elements.keys.length; i++) {
      if (this.properties.capslock) {
        this.elements.keys[i].textContent = this.keys.keysUpper[i]
      } else {
        this.elements.keys[i].textContent = this.keys.keysLower[i]
      }
    }
  },
};
