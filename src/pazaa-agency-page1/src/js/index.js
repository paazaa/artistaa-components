// Section loader
function loadHTML(sectionId, filePath) {
	fetch(filePath)
		.then((response) => response.text())
		.then((data) => {
			document.getElementById(sectionId).innerHTML = data
		})
		.catch((error) => console.error('Error loading section:', error))
}
// loadHTML('hero', 'components/hero.html')
// loadHTML(
// 	'services-agency-page-1',
// 	'components/services.html'
// )
loadHTML('services', 'components/services.html')
loadHTML('kickoff', 'components/kickoff.html')
loadHTML('portfolio', 'components/portfolio.html')
loadHTML('features', 'components/features.html')
loadHTML('testimonials', 'components/testimonials.html')
loadHTML('team', 'components/team.html')
loadHTML('footer', 'components/footer.html')

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
