// Section loader
function loadHTML(sectionId, filePath) {
	fetch(filePath)
		.then((response) => response.text())
		.then((data) => {
			document.getElementById(sectionId).innerHTML = data
		})
		.catch((error) => console.error('Error loading section:', error))
}
loadHTML('hero', 'sections/hero/hero.html')
loadHTML('about', 'sections/about/about.html')
loadHTML('service', 'sections/service/service.html')
loadHTML('testimonials', 'sections/testimonials/testimonials.html')
loadHTML('blog', 'sections/blog/blog.html')
loadHTML('get-in-touch', 'sections/get-in-touch/get-in-touch.html')
loadHTML('footer', 'sections/footer/footer.html')

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
