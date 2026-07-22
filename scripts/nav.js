const navBar = document.querySelector(".navContainer");
const stickyOffset = navBar.offsetTop;

function updateNavOnScroll() {
	if (window.pageYOffset >= stickyOffset) {
		navBar.classList.add("navContainerScrolled");
	} else {
		navBar.classList.remove("navContainerScrolled");
	}
}

window.onscroll = updateNavOnScroll;
