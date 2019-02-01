import { $, $$, hide, unHide } from '/Utils.js';

export default class Router {
  constructor() {
  }

  init() {
    this.navigate = this.navigate.bind(this);
    window.addEventListener('hashchange', this.navigate);
    this.navigate();
  }

  navigate() {
    const hash = this.getLocationHash();
    this.showSection(hash);
  }

  getLocationHash() {
    return window.location.hash.substring(1);
  }

  showSection(hash) {
    const newSection = $(`section#${hash}`);
    const sections = $$('body > section');

    sections.forEach((section) => {
      if (section === newSection) {
        unHide(section);
      } else {
        hide(section);
      }
    });
  }
}
