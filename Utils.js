export const $ = (x, y = document) => y.querySelector(x);
export const $$ = (x, y = document) => y.querySelectorAll(x);

export const hide = (x) => x.style.display = 'none';
export const show = (x, display = 'block') => x.style.display = display;

export const addClass = (x, y) => y.classList.add(x);
export const removeClass = (x, y) => y.classList.remove(x);

export const listen = (x, c, y) => y.addEventListener(x, c);
