'use strict';
var $ = function(selector) {
    return document.querySelector(selector);
}
var $$ = function(selector) {
    return document.querySelectorAll(selector);
}

let sections = $$('.sec');
let lists = $$('.nav-item');

function activeLink(nav_item) {
    lists.forEach((item) => item.classList.remove('active'));
    nav_item.classList.add('active');
}

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset - 50 && top < offset + height) {
            const target = $(`[href='#${id}']`).firstElementChild;
            activeLink(target);
        }
    })
};