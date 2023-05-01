import { textarea } from "./textarea.js";
import { keyboard } from "./keyboard.js";

export const animation = {
  init() {
    let keys = document.querySelectorAll(".keys");
    let spaceKey = document.querySelector(".space_key");
    let shift_left = document.querySelector(".shift_left");
    let shift_right = document.querySelector(".shift_right");
    let caps_lock_key = document.querySelector(".caps_lock_key");
    let alt_left = document.querySelector(".alt_left");
    let alt_right = document.querySelector(".alt_right");
    let ctrl_left = document.querySelector(".ctrl_left");
    let ctrl_right = document.querySelector(".ctrl_right");
    let win_key = document.querySelector(".win_key");
    let tabKey = document.querySelector(".tab_key");
    let backspace = document.querySelector(".backspace_key");

    for (let i = 0; i < keys.length; i++) {
      keys[i].setAttribute("keyname", keys[i].innerText);
      keys[i].setAttribute("lowerCaseName", keys[i].innerText.toLowerCase());
    }
    
    textarea.addEventListener('focus', (e) => {
      e.preventDefault()
    })

    window.addEventListener("keydown", function (e) {
      for (let i = 0; i < keys.length; i++) {
        if (
          e.code == `Key${keys[i].innerText.toUpperCase()}` ||
          e.key == keys[i].getAttribute("keyname") && keys[i].getAttribute("keyname").length < 3 ||
          e.key == `Arrow${keys[i].getAttribute("keyname")}` ||
          e.key == `Arrow${keys[i].getAttribute("keyname")}` ||
          e.key == `Arrow${keys[i].getAttribute("keyname")}` ||
          e.key == `Arrow${keys[i].getAttribute("keyname")}`
        ) {
          keys[i].classList.add("active");
          textarea.value += keys[i].innerText;
          console.log('r')
        }

        if (e.code == "Space" && keys[i].innerText == 'Space') {
          spaceKey.classList.add("active");
          textarea.value += ' ';
        }
        if (e.code == "Tab" && keys[i].innerText == 'Tab') {
          e.preventDefault();
          tabKey.classList.add("active");
          textarea.value += '     ';
        }
        if (e.code == "Backspace" && keys[i].innerText == 'Backspace') {
          textarea.value = textarea.value.substring(0, textarea.value.length - 1);
        }
        if (e.code == "ShiftLeft") {
          shift_right.classList.remove("active");
        }
        if (e.code == "ShiftRight") {
          shift_left.classList.remove("active");
        }
        if (e.code == "AltLeft") {
          alt_right.classList.remove("active");
        }
        if (e.code == "AltRight") {
          alt_left.classList.remove("active");
        }
        if (e.code == "ControlLeft") {
          ctrl_left.classList.add("active");
        }
        if (e.code == "ControlRight") {
          ctrl_right.classList.add("active");
        }
        if (e.code == "CapsLock") {
          caps_lock_key.classList.add("active");
          caps_lock_key.classList.toggle("caps_lock_key--active");
          keyboard.toggleCapsLock()
        }
        if (e.code == "MetaLeft") {
          win_key.classList.add("active");
        }
      }
    });

    window.addEventListener("keyup", function (e) {
      for (let i = 0; i < keys.length; i++) {
        if (
          e.code == `Key${keys[i].innerText.toUpperCase()}` ||
          e.key == keys[i].getAttribute("keyname") ||
          e.key == `Arrow${keys[i].getAttribute("keyname")}` ||
          e.key == `Arrow${keys[i].getAttribute("keyname")}` ||
          e.key == `Arrow${keys[i].getAttribute("keyname")}` ||
          e.key == `Arrow${keys[i].getAttribute("keyname")}`
        ) {
          keys[i].classList.remove("active");
          keys[i].classList.add("remove");
        }
        if (e.code == "Space") {
          spaceKey.classList.remove("active");
          spaceKey.classList.add("remove");
        }
        if (e.code == "Tab") {
          tabKey.classList.remove("active");
          tabKey.classList.add("remove");
        }
        if (e.code == "ShiftLeft") {
          shift_right.classList.remove("active");
          shift_right.classList.remove("remove");
        }
        if (e.code == "ShiftRight") {
          shift_left.classList.remove("active");
          shift_left.classList.remove("remove");
        }
        if (e.code == "AltLeft") {
          alt_right.classList.remove("active");
          alt_right.classList.remove("remove");
        }
        if (e.code == "AltRight") {
          alt_left.classList.remove("active");
          alt_left.classList.remove("remove");
        }
        if (e.code == "ControlLeft") {
          ctrl_left.classList.remove("active");
          ctrl_left.classList.add("remove");
        }
        if (e.code == "ControlRight") {
          ctrl_right.classList.remove("active");
          ctrl_right.classList.add("remove");
        }
        if (e.code == "MetaLeft") {
          win_key.classList.remove("active");
          win_key.classList.add("remove");
        }
        if (e.code == "CapsLock") {
          caps_lock_key.classList.remove("active");
        }
        setTimeout(() => {
          keys[i].classList.remove("remove");
        }, 200);
      }
    });

  },
};
