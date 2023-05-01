import { textarea } from './textarea.js';
import { keyboard } from './keyboard.js';
import { runOnKeys } from './runOnKeys.js';

export const animation = {
  init() {
    const keys = document.querySelectorAll('.keys');
    const spaceKey = document.querySelector('.space_key');
    const shift_left = document.querySelector('.shift_left');
    const shift_right = document.querySelector('.shift_right');
    const caps_lock_key = document.querySelector('.caps_lock_key');
    const alt_left = document.querySelector('.alt_left');
    const alt_right = document.querySelector('.alt_right');
    const ctrl_left = document.querySelector('.ctrl_left');
    const ctrl_right = document.querySelector('.ctrl_right');
    const win_key = document.querySelector('.win_key');
    const tabKey = document.querySelector('.tab_key');
    const backspace = document.querySelector('.backspace_key');
    const enter = document.querySelector('.enter_key');

    for (let i = 0; i < keys.length; i++) {
      keys[i].setAttribute('keyname', keys[i].innerText);
      keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
    }

    textarea.addEventListener('focus', (e) => {
      e.preventDefault();
    });

    window.addEventListener('keydown', (e) => {
      for (let i = 0; i < keys.length; i++) {
        if (
          e.code === `Key${keys[i].innerText.toUpperCase()}`
          || e.key === keys[i].getAttribute('keyname') && keys[i].getAttribute('keyname').length < 3
          || e.key === keys[i].innerText && keys[i].innerText.length < 2
          || keys[i].innerText === '▲' && e.code === 'ArrowUp'
          || keys[i].innerText === '▼' && e.code === 'ArrowDown'
          || keys[i].innerText === '►' && e.code === 'ArrowRight'
          || keys[i].innerText === '◄' && e.code === 'ArrowLeft'
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
          shift_left.classList.add('active');
          shift_right.classList.remove('active');
          keyboard.properties.shift = true;
          keyboard.shiftPressed();
        }
        if (e.code === 'ShiftRight') {
          shift_right.classList.add('active');
          shift_left.classList.remove('active');
          keyboard.properties.shift = true;
          keyboard.shiftPressed();
        }
        if (e.code === 'AltLeft') {
          alt_left.classList.add('active');
          alt_right.classList.remove('active');
        }
        if (e.code === 'AltRight') {
          alt_right.classList.add('active');
          alt_left.classList.remove('active');
        }
        if (e.code === 'ControlLeft') {
          ctrl_left.classList.add('active');
        }
        if (e.code === 'ControlRight') {
          ctrl_right.classList.add('active');
        }
        if (e.code === 'CapsLock') {
          caps_lock_key.classList.add('active');
          caps_lock_key.classList.toggle('caps_lock_key--active');
          keyboard.toggleCapsLock();
        }
        if (e.code === 'MetaLeft') {
          win_key.classList.add('active');
        }
      }
    });

    window.addEventListener('keyup', (e) => {
      for (let i = 0; i < keys.length; i++) {
        if (
          e.code === `Key${keys[i].innerText.toUpperCase()}`
          || e.key === keys[i].getAttribute('keyname')
          || e.key === keys[i].innerText && keys[i].innerText.length < 2
          || keys[i].innerText === '▲' && e.code === 'ArrowUp'
          || keys[i].innerText === '▼' && e.code === 'ArrowDown'
          || keys[i].innerText === '►' && e.code === 'ArrowRight'
          || keys[i].innerText === '◄' && e.code === 'ArrowLeft'
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
          shift_right.classList.remove('active');
          shift_right.classList.remove('remove');
          keyboard.properties.shift = false;
          keyboard.shiftPressed();
        }
        if (e.code === 'ShiftRight') {
          shift_left.classList.remove('active');
          shift_left.classList.remove('remove');
          keyboard.properties.shift = false;
          keyboard.shiftPressed();
        }
        if (e.code === 'AltLeft') {
          alt_right.classList.remove('active');
          alt_right.classList.remove('remove');
        }
        if (e.code === 'AltRight') {
          alt_left.classList.remove('active');
          alt_left.classList.remove('remove');
        }
        if (e.code === 'ControlLeft') {
          ctrl_left.classList.remove('active');
          ctrl_left.classList.add('remove');
        }
        if (e.code === 'ControlRight') {
          ctrl_right.classList.remove('active');
          ctrl_right.classList.add('remove');
        }
        if (e.code === 'MetaLeft') {
          win_key.classList.remove('active');
          win_key.classList.add('remove');
        }
        if (e.code === 'CapsLock') {
          caps_lock_key.classList.remove('active');
        }
        setTimeout(() => {
          keys[i].classList.remove('remove');
        }, 200);
      }
    });
    runOnKeys(['ShiftLeft', 'AltLeft']);
  },
};
