// NAV ---------------------- NAV

const iconBurger = document.querySelector('.fa-bars');
const nav = document.querySelector('nav.burger');

const toggleMenu = function () {
	nav.classList.toggle('active');
}

iconBurger.addEventListener('click', toggleMenu)