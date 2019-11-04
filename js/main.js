const menu = document.querySelector('.menu-hamb');
const close = document.querySelector('.close');
menu.addEventListener('click', () => {
    let ul = document.querySelector('.hamb-list');
    ul.style.height = 100 + '%';
})

close.addEventListener('click', () => {
    let ul = document.querySelector('.hamb-list');
    ul.style.height = 0 + '%';
})

const main = document.querySelector('#main');
const advantages = document.querySelector('#advantages');
const work = document.querySelector('#work');
const box = document.querySelector('#box');
const contacts = document.querySelector('#contacts');

main.addEventListener('click', () => {
    let scrollTo = document.querySelector('.main');
    console.log(scrollTo);
    scrollTo.scrollIntoView({behavior: "smooth"});
})

advantages.addEventListener('click', () => {
    let scrollTo = document.querySelector('.advantages');
    scrollTo.scrollIntoView();
    console.log(scrollTo.scrollIntoView());
})

