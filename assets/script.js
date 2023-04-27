const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]





const left_slide = document.getElementsByClassName("arrow_left");
console.log('arrow_left');
left_slide[0].addEventListener('click', () => {
	console.log(-1)})

const right_slide = document.getElementsByClassName("arrow_right");
console.log('arrow_right');
right_slide[0].addEventListener('click', () => {
	console.log(1)})