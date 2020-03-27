// NAV ---------------------- NAV

const iconBurger = document.querySelector('.fa-bars');
const nav = document.querySelector('nav.burger');
const navHeight = nav.scrollHeight;
const divMove = document.querySelector('div.move');

const toggleMenu = function () {
	nav.classList.toggle('active');
	// div.classList.toggle('start')
	if (nav.classList.contains('active')) {
		divMove.style.top = navHeight + 'px';
	} else {
		divMove.style.top = 0;
	}
}

iconBurger.addEventListener('click', toggleMenu)