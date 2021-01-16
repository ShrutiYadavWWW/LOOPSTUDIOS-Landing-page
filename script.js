burger = document.querySelector('.burger');
nav = document.querySelector('.nav__list');

burger.onclick = () => {
	burger.classList.toggle('open');
	nav.classList.toggle('open');
}