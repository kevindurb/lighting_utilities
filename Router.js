import * as _ from '/Utils.js';

export default class Router {
  constructor() {
  }

  init() {
    this.navigate = this.navigate.bind(this);
    _.listen('hashchange', this.navigate, window);
    this.navigate();
  }

  navigate() {
    const hash = this.getLocationHash();
    if (hash) {
      this.showSection(hash);
      this.highlightLinks(hash);
    }
  }

  getLocationHash() {
    return window.location.hash.substring(1);
  }

  showSection(hash) {
    const newSection = _.$(`section#${hash}`);
    const sections = _.$$('body > section');

    sections.forEach((section) => {
      if (section === newSection) {
        _.show(section);
      } else {
        _.hide(section);
      }
    });
  }

  highlightLinks(hash) {
    const currentLinks = _.$$(`a[href="#${hash}"]`);
    const otherLinks = _.$$(`a:not([href="#${hash}"])`);

    currentLinks.forEach(link => _.addClass('highlight', link));
    otherLinks.forEach(link => _.removeClass('highlight', link));
  }
}
