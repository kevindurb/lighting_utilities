export const $ = (x, y = document) => y.querySelector(x);
export const $$ = (x, y = document) => y.querySelectorAll(x);

export const hide = (x) => x.style.display = 'none';
export const unHide = (x) => x.style.display = '';
