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
