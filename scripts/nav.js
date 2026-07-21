const navBar = document.querySelector(".navContainer");
const stickyOffset = navBar.offsetTop;

function updateNavOnScroll() {
	if (window.pageYOffset >= stickyOffset) {
		navBar.classList.add("navContainer--scrolled");
	} else {
		navBar.classList.remove("navContainer--scrolled");
	}
}

window.onscroll = updateNavOnScroll;
