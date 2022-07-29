const navButton = document.querySelector('.nav_button');
const mobileNav = document.querySelector('.mobile_nav');
navButton.addEventListener('click', function(){
    mobileNav.classList.toggle('mobile_nav_active');
    navButton.classList.toggle('nav_button_close');
});

