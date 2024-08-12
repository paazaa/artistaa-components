// Section loader
function loadHTML(sectionId, filePath) {
	fetch(filePath)
		.then((response) => response.text())
		.then((data) => {
			document.getElementById(sectionId).innerHTML = data
		})
		.catch((error) => console.error('Error loading section:', error))
}

loadHTML('services', 'sections/Services/services.html')
loadHTML('kickoff', 'sections/Kickoff/kickoff.html')
loadHTML('portfolio', 'sections/Portfolio/portfolio.html')
loadHTML('features', 'sections/Features/features.html')
loadHTML('testimonials', 'sections/Testimonials/testimonials.html')
loadHTML('team', 'sections/Team/team.html')
loadHTML('blog', 'sections/Blog/blog.html')
loadHTML('connect', 'sections/Connect/connect.html')
loadHTML('footer', 'sections/Footer/footer.html')

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
