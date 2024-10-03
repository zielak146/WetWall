const body = document.querySelector('body');
const nav = document.querySelector('.nav');
const modeToggle = document.querySelector('.navbar__optionsbox-lights');
const menuToggle = document.querySelector('.navbar__optionsbox-menu');
const burgerBtn = document.querySelector('.navbar__optionsbox-menu');
const navMenu = document.querySelector('.navbar__menu');
const headerBox = document.querySelector('.header__box');
const about = document.querySelectorAll('.about__box-text');
const packages = document.querySelectorAll('.packages');

modeToggle.addEventListener('click', () => {
	modeToggle.classList.toggle('active');

	body.classList.toggle('dark-mode');
	nav.classList.toggle('dark-mode');
	navMenu.classList.toggle('dark-mode');
	headerBox.classList.toggle('dark-mode-gradient');
	about.classList.toggle('dark-mode');
});

burgerBtn.addEventListener('click', () => {
	navMenu.classList.toggle('active-menu');
	menuToggle.classList.toggle('active');
});

const sliderBox = document.querySelector('.slider-box');
const leftBtn = document.querySelector('.btn-left');
const rightBtn = document.querySelector('.btn-right');
const carouselImages = document.querySelectorAll('.slider-img');
const carouselWidth = 1000;
const carouselspeed = 3000;

let index = 0;

const handleCarousel = () => {
	index++;
	changeImage;
};

let startCarousel = setInterval(handleCarousel, carouselspeed);

const changeImage = () => {
	if (index > carouselImages.length - 1) {
		index = 0;
	} else if (index < 0) {
		index = carouselImages.length - 1;
	}

	sliderBox.computedStyleMap.transform = `translateX(${
		-index * carouselWidth
	}px)`;
};
