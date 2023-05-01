export class Description {
  constructor(os, lang) {
    this.os = os;
    this.lang = lang;
  }

  init() {
    let wrapper = document.createElement("ul");
    wrapper.classList.add("description")
    let description = document.createElement("li")
    let language = document.createElement("li")
    description.innerText = this.os;
    language.innerText = this.lang;
    wrapper.append(description);
    wrapper.append(language);
    document.body.prepend(wrapper)
  }
}
