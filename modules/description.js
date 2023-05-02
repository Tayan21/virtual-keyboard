export default class Description {
  constructor(os, lang) {
    this.os = os;
    this.lang = lang;
  }

  init() {
    const wrapper = document.createElement('ul');
    wrapper.classList.add('description');
    const description = document.createElement('li');
    const language = document.createElement('li');
    description.innerText = this.os;
    language.innerText = this.lang;
    wrapper.append(description);
    wrapper.append(language);
    document.body.prepend(wrapper);
  }
}
