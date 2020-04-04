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

/* ----------------------------------------------------- */
/* ABOUT ---------------  ABOUT  ---------------- ABOUT */
/* --------------------------------------------------- */

// Zmiana slajdów w zakładce about.html

const hobbyList = [{
		img: 'img/m1_640x427.jpg',
		txt: 'Pierwszy tekst'
	},
	{
		img: 'img/m2_640x426.jpg',
		txt: 'Drugi tekst'
	},
	{
		img: 'img/m3_640x427.jpg',
		txt: 'Trzeci tekst'
	},
	{
		img: 'img/m4_640x426.jpg',
		txt: 'Czwarty tekst'
	}
]

const hobbyImage = document.querySelector('.slide-img');
const hobbyText = document.querySelector('.slide-text');
const hobbyLeft = document.querySelector('.fa-angle-left');
const hobbyRight = document.querySelector('.fa-angle-right');

const time = 2000;
let activeHobby = 0;

const changeHobby = () => {
	activeHobby++;
	if (activeHobby == hobbyList.length) {
		activeHobby = 0;
	}
	hobbyImage.src = hobbyList[activeHobby].img;
	hobbyText.textContent = hobbyList[activeHobby].txt;
}

let hobbySlides = setInterval(changeHobby, time);

const arrowChangeHobby = (e) => {
	if (e.target.classList.contains('fa-angle-left')) {
		activeHobby--;
		if (activeHobby < 0) {
			activeHobby = 3;
		}
	} else if (e.target.classList.contains('fa-angle-right')) {
		activeHobby++;
		if (activeHobby > 3) {
			activeHobby = 0;
		}
	}
	hobbyImage.src = hobbyList[activeHobby].img;
	hobbyText.textContent = hobbyList[activeHobby].txt;

	clearInterval(hobbySlides);
	hobbySlides = setInterval(changeHobby, time);
}

hobbyLeft.addEventListener('click', arrowChangeHobby)
hobbyRight.addEventListener('click', arrowChangeHobby)