import Router from '/Router.js';

const router = new Router();
router.init();

if (!router.getLocationHash()) {
  window.location.hash = 'color';
}
