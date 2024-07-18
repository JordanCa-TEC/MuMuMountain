// script.js
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.header__nav-toggle');
    const navList = document.querySelector('.header__nav-list');

    navToggle.addEventListener('click', () => {
        navList.classList.toggle('header__nav-list--visible');
    });
});
///*prueba de commit 