export class TextArea {
  constructor(className) {
    this.className = className;
  }

  init() {
    let textarea = document.createElement("textarea")
    textarea.classList.add(this.className)
    document.body.prepend(textarea)
  }
}