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
        let id = sec.getAttribute('id');
        if (top > offset - 100 && top < offset + 50) {
            const target = $(`[href='#${id}']`).firstElementChild;
            activeLink(target);
        }
    })
};

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = $$('.slide');
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}