// Section loader
function loadHTML(sectionId, filePath) {
	fetch(filePath)
		.then((response) => response.text())
		.then((data) => {
			document.getElementById(sectionId).innerHTML = data
		})
		.catch((error) => console.error('Error loading section:', error))
}
loadHTML('hero', 'sections/hero.html')
loadHTML(
	'featured-properties-real-estate-1',
	'sections/featured-properties.html'
)
loadHTML('services-real-estate-1', 'sections/services.html')
loadHTML('explore-real-estate-1', 'sections/explore.html')
loadHTML('sell-real-estate-1', 'sections/sell.html')
loadHTML('featured-agents-real-estate-1', 'sections/featured-agents.html')
loadHTML('download-real-estate-1', 'sections/download.html')
loadHTML('footer', 'sections/footer.html')

// hamburger menu toggler
// hamburger menu toggler
const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
	btn.classList.toggle('open')
	nav.classList.toggle('flex')
	nav.classList.toggle('hidden')
})

// scroll animation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth',
		})
	})
})
