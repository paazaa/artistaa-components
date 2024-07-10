// Section loader
function loadHTML(sectionId, filePath) {
	fetch(filePath)
		.then((response) => response.text())
		.then((data) => {
			document.getElementById(sectionId).innerHTML = data
		})
		.catch((error) => console.error('Error loading section:', error))
}

loadHTML('services', 'sections/services.html')
loadHTML('kickoff', 'sections/kickoff.html')
loadHTML('portfolio', 'sections/portfolio.html')
loadHTML('features', 'sections/features.html')
loadHTML('testimonials', 'sections/testimonials.html')
loadHTML('team', 'sections/team.html')
loadHTML('blog', 'sections/blog.html')
loadHTML('connect', 'sections/connect.html')
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
