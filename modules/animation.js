import { textarea } from './textarea.js';
import keyboard from './keyboard.js';
import replaceLang from './replaceLang.js';

const animation = {
  init() {
    const keys = document.querySelectorAll('.keys');
    const spaceKey = document.querySelector('.space_key');
    const shiftLeft = document.querySelector('.shift_left');
    const shiftRight = document.querySelector('.shift_right');
    const capsLockKey = document.querySelector('.caps_lock_key');
    const altLeft = document.querySelector('.alt_left');
    const altRight = document.querySelector('.alt_right');
    const ctrlLeft = document.querySelector('.ctrl_left');
    const ctrlRight = document.querySelector('.ctrl_right');
    const winKey = document.querySelector('.win_key');
    const tabKey = document.querySelector('.tab_key');
    const backspace = document.querySelector('.backspace_key');
    const enter = document.querySelector('.enter_key');

    for (let i = 0; i < keys.length; i += 1) {
      keys[i].setAttribute('keyname', keys[i].innerText);
      keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
    }

    textarea.addEventListener('focus', (e) => {
      e.preventDefault();
    });

    window.addEventListener('keydown', (e) => {
      for (let i = 0; i < keys.length; i += 1) {
        if (
          e.code === `Key${keys[i].innerText.toUpperCase()}`
          || (e.key === keys[i].getAttribute('keyname') && keys[i].getAttribute('keyname').length < 3)
          || (e.key === keys[i].innerText && keys[i].innerText.length < 2)
          || (keys[i].innerText === '▲' && e.code === 'ArrowUp')
          || (keys[i].innerText === '▼' && e.code === 'ArrowDown')
          || (keys[i].innerText === '►' && e.code === 'ArrowRight')
          || (keys[i].innerText === '◄' && e.code === 'ArrowLeft')
        ) {
          keys[i].classList.add('active');
          textarea.value += keys[i].innerText;
        }

        if (e.code === 'Space' && keys[i].innerText === 'Space') {
          spaceKey.classList.add('active');
          textarea.value += ' ';
        }
        if (e.code === 'Enter' && keys[i].innerText === 'Enter') {
          enter.classList.add('active');
          textarea.value += '\n';
        }
        if (e.code === 'Tab' && keys[i].innerText === 'Tab') {
          e.preventDefault();
          tabKey.classList.add('active');
          textarea.value += '     ';
        }
        if (e.code === 'Backspace' && keys[i].innerText === 'Backspace') {
          backspace.classList.add('active');
          textarea.value = textarea.value.substring(0, textarea.value.length - 1);
        }
        if (e.code === 'ShiftLeft') {
          shiftLeft.classList.add('active');
          shiftRight.classList.remove('active');
          keyboard.properties.shift = true;
          keyboard.shiftPressed();
        }
        if (e.code === 'ShiftRight') {
          shiftRight.classList.add('active');
          shiftLeft.classList.remove('active');
          keyboard.properties.shift = true;
          keyboard.shiftPressed();
        }
        if (e.code === 'AltLeft') {
          e.preventDefault()
          altLeft.classList.add('active');
          altRight.classList.remove('active');
        }
        if (e.code === 'AltRight') {
          e.preventDefault()
          altRight.classList.add('active');
          altLeft.classList.remove('active');
        }
        if (e.code === 'ControlLeft') {
          ctrlLeft.classList.add('active');
        }
        if (e.code === 'ControlRight') {
          ctrlRight.classList.add('active');
        }
        if (e.code === 'CapsLock') {
          capsLockKey.classList.add('active');
          capsLockKey.classList.toggle('caps_lock_key--active');
          keyboard.toggleCapsLock();
        }
        if (e.code === 'MetaLeft') {
          winKey.classList.add('active');
        }
      }
    });

    window.addEventListener('keyup', (e) => {
      for (let i = 0; i < keys.length; i += 1) {
        if (
          e.code === `Key${keys[i].innerText.toUpperCase()}`
          || e.key === keys[i].getAttribute('keyname')
          || (e.key === keys[i].innerText && keys[i].innerText.length < 2)
          || (keys[i].innerText === '▲' && e.code === 'ArrowUp')
          || (keys[i].innerText === '▼' && e.code === 'ArrowDown')
          || (keys[i].innerText === '►' && e.code === 'ArrowRight')
          || (keys[i].innerText === '◄' && e.code === 'ArrowLeft')
        ) {
          keys[i].classList.remove('active');
          keys[i].classList.add('remove');
        }
        if (e.code === 'Space') {
          spaceKey.classList.remove('active');
          spaceKey.classList.add('remove');
        }
        if (e.code === 'Tab') {
          tabKey.classList.remove('active');
          tabKey.classList.add('remove');
        }
        if (e.code === 'ShiftLeft') {
          shiftRight.classList.remove('active');
          shiftRight.classList.remove('remove');
          keyboard.properties.shift = false;
          keyboard.shiftPressed();
        }
        if (e.code === 'ShiftRight') {
          shiftLeft.classList.remove('active');
          shiftLeft.classList.remove('remove');
          keyboard.properties.shift = false;
          keyboard.shiftPressed();
        }
        if (e.code === 'AltLeft') {
          altRight.classList.remove('active');
          altRight.classList.remove('remove');
        }
        if (e.code === 'AltRight') {
          altLeft.classList.remove('active');
          altLeft.classList.remove('remove');
        }
        if (e.code === 'ControlLeft') {
          ctrlLeft.classList.remove('active');
          ctrlLeft.classList.add('remove');
        }
        if (e.code === 'ControlRight') {
          ctrlRight.classList.remove('active');
          ctrlRight.classList.add('remove');
        }
        if (e.code === 'MetaLeft') {
          winKey.classList.remove('active');
          winKey.classList.add('remove');
        }
        if (e.code === 'CapsLock') {
          capsLockKey.classList.remove('active');
        }
        setTimeout(() => {
          keys[i].classList.remove('remove');
        }, 200);
      }
    });
    replaceLang(['ShiftLeft', 'AltLeft']);
  },
};

export default animation;
