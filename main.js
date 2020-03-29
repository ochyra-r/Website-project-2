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

const divArrow = document.querySelector('div.scroll-up');

window.addEventListener('scroll', function () {
	if (window.scrollY > 150) {
		divArrow.classList.add('active')
	} else {
		divArrow.classList.remove('active');
	}
})

divArrow.addEventListener('click', function () {
	// window.scroll(0, 0);
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
})