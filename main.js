/* ----------------------------------------------------- */
/* NAV ------------------  NAV  ------------------- NAV */
/* --------------------------------------------------- */

const iconBurger = document.querySelector('.fa-bars');
const divMove = document.querySelector('div.move');
const nav = document.querySelector('nav.burger');
const footer = document.querySelector('footer');

// Podczas rozwijania menu div.move zmienia swoja wlasciowosc "top"
const toggleMenu = function () {
	const navHeight = nav.scrollHeight;
	nav.classList.toggle('active');
	if (nav.classList.contains('active')) {
		divMove.style.top = navHeight + 'px';
		footer.style.bottom = `-${navHeight}px`;
	} else {
		divMove.style.top = 0;
		footer.style.bottom = 0;
	}
}

iconBurger.addEventListener('click', toggleMenu)

window.addEventListener('resize', function () {
	const navHeight = nav.scrollHeight;
	// Zmiana wartosci top/bottom zaleznie od szerokosci strony w jakiej sie znajdujemy
	if (window.innerWidth <= 639 && nav.classList.contains('active')) {
		divMove.style.top = navHeight + 'px';
		footer.style.bottom = `-${navHeight}px`;
	} else if (window.innerWidth >= 640 && window.innerWidth < 768 && nav.classList.contains('active')) {
		divMove.style.top = navHeight + 'px';
		footer.style.bottom = `-${navHeight}px`;
	} else if (window.innerWidth >= 768) { // zamykanie menu po przekroczeniu szerokosci okna 768px
		divMove.style.top = 0;
		nav.classList.remove('active');
		footer.style.bottom = 0;
	}
})

// Przewijanie stronu do poczatku
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