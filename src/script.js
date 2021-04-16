const hamburger = document.querySelector('.ham'),
      menu = document.querySelector('.menu');

//toggle menu and hamburger
hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.toggle('show');
    hamburger.classList.toggle('active')
})

//close on overlay click
menu.addEventListener('click', (e) => {
    e.preventDefault;
    const target = e.target;

    if (target.classList.contains('menu__overlay')) {
        menu.classList.toggle('show');
        hamburger.classList.toggle('active');
    }
} )