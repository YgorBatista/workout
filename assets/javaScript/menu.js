const menuMobile = document.querySelector('.menu-mobile');
const icon = document.querySelector('.menu-mobile-icon');
const bar1 = document.querySelector('.bar-1');
const bar2 = document.querySelector('.bar-2');
const bar3 = document.querySelector('.bar-3');

icon.addEventListener('click', () => {
    menuMobile.classList.toggle('menu-show');
    bar1.classList.toggle('bar-active1');
    bar2.classList.toggle('bar-active2');
    bar3.classList.toggle('bar-active3');
});

// efeito de foco ao abrir a pagina
const elements = document.querySelectorAll('.hidden');

const myObserver = new IntersectionObserver(entry => {
    entry.forEach(el => {
        if (el.isIntersecting) {
            el.target.classList.add('show');
        } else {
            el.target.classList.remove('show');
        }
        console.log(el);
    });
});

elements.forEach(e => myObserver.observe(e));
