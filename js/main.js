const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".burger-btn");
const allNavItems = document.querySelectorAll(".nav__item");

//toogle sprawdza, czy dana klasa jest, czy jej nie ma, classList przeszukuje listy klas
const handleNav = () => {
	nav.classList.toggle("nav--active");

	//dla każdegoo elementu w obiekcie talicopodobnym (kadego pojedynczego linku, który jest przechowywany przez 'item' mamy nadać nasluchiwanie na 'clicka' i w momencie, kiedy klik zostanie wyłapany, zostanie usunięta klasa 'nav--active')
	allNavItems.forEach(item => {
		item.addEventListener("click", () => {
			nav.classList.remove("nav--active");
		});
	});

	handleNavItemsAnimation();
};

const handleNavItemsAnimation = () => {
	let delayTime = 0;

	allNavItems.forEach(item => {
		item.classList.toggle("nav-items-animation");
		item.style.animationDelay = "0" + "." + delayTime + "s";
		delayTime++;
	});
};

navBtn.addEventListener("click", handleNav);
