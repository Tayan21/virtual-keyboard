export const textarea = document.createElement('textarea');
textarea.classList.add('text');
textarea.disabled = true;
document.body.prepend(textarea);

export function backspace() {
  textarea.value = textarea.value.substring(0, textarea.value.length - 1);
}

export function enter() {
  textarea.value += '\n';
}

export function space() {
  textarea.value += ' ';
}

export function tab() {
  textarea.value += '    ';
}
