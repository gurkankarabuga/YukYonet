function onClickMenu() {
    const menu = document.getElementById('menu');
    const nav = document.getElementById('nav');
    menu.classList.toggle('change');
    nav.classList.toggle('change');
}

window.addEventListener('scroll', () => {
    const toTop = document.querySelector('.to-top');
    if (window.pageYOffset > 100) {
        toTop.classList.add('active');
    } else {
        toTop.classList.remove('active');
    }
});
