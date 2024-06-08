
/* Elementos */
let page_header = document.querySelector('header')
let main = document.querySelector('main')
let logo_container = document.querySelector(".logo-container")

/* Estilos */

let upper_logo_text = getComputedStyle(logo_container, ':before')
let lower_logo_text = getComputedStyle(logo_container, ':after')

/* Cores */
let brand_purple = getComputedStyle(document.documentElement).getPropertyValue('--brand-purple')
let brand_white = getComputedStyle(document.documentElement).getPropertyValue('--brand-white')

function css_update() {

	/* Serve pra ajustar o tamanho do header quando scrolla a pagina pra baixo */
	if(globalThis.scrollY > 0) {
		page_header.style.maxHeight = "11vh"
		logo_container.className = "logo-container text-off"
	}

	else {
		page_header.style.maxHeight = "15vh"
		logo_container.className = "logo-container"
	}

	/* Coloca um espaço onde estaria o header. Tem que fazer isso pq o tamanho do header é variável */
	let header_height = page_header.style.maxHeight
	document.documentElement.style.setProperty("--header-height", header_height)
}

setInterval(css_update, 10)