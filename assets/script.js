// Définition de la liste des diapositives
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

// Initialisation de l'index de la diapositive et récupération des éléments HTML
let index_slides = 0
let banner = document.getElementById("banner")
let tagLine = banner.getElementsByTagName('p')[0]
let banner_img = banner.getElementsByClassName("banner-img")[0]

// Récupération de la flèche gauche et ajout d'un événement de clic
const left_slide = document.getElementsByClassName("arrow_left");
left_slide[0].addEventListener('click', () => {
	if (index_slides > 0) {
		index_slides = index_slides - 1
	} else {
		index_slides = slides.length - 1
	}
	slide_select(index_slides)
})

// Récupération de la flèche droite et ajout d'un événement de clic
const right_slide = document.getElementsByClassName("arrow_right");
right_slide[0].addEventListener('click', () => {
	if (index_slides >= slides.length - 1) {
		index_slides = 0
	} else {
		index_slides = index_slides + 1
	}
	slide_select(index_slides)
})

// Création des points de navigation
const dots = document.getElementsByClassName("dots")[0];
const dot_list = document.getElementsByClassName("dot");
if (dots) {
	for (let index = 0; index < slides.length; index++) {
		const dot = document.createElement("div")
		dot.className = 'dot'
		dots.appendChild(dot)
	}
	// Ajout d'un événement de clic sur chaque point
	if (dot_list) {
		dot_list[0].classList.add('dot_selected')
		for (let index = 0; index < dot_list.length; index++) {
			dot_list[index].addEventListener("click", (element) => {
				index_slides = index
				slide_select(index)
			})
		}
	}
}

// Fonction de sélection de la diapositive
function slide_select(slider_load) {
	for (let dot_index = 0; dot_index < dot_list.length; dot_index++) {
		dot_list[dot_index].classList.remove("dot_selected")
	}
	dot_list[slider_load].classList.add("dot_selected")
	index_slides = slider_load

	banner_img.src = "assets/images/slideshow/" + slides[slider_load].image

	tagLine.innerHTML = slides[slider_load].tagLine
}