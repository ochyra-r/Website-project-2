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