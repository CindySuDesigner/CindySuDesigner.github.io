const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".portfolio-gallery").children;


for (let i = 0; i < filterButtons.length; i++) {
	filterButtons[i].addEventListener("click", function () {
		for (let j = 0; j < filterButtons.length; j++) {
			filterButtons[j].classList.remove("active")
		}
		this.classList.add("active");
		const target = this.getAttribute("data-target")

		for (let k = 0; k < items.length; k++) {
			items[k].style.display = "none";
			if (target == items[k].getAttribute("data-id")) {
				items[k].style.display = "block";
			}
			if (target == "all") {
				items[k].style.display = "block"
			}
		}
	})
}



//header fixed
let previousActive = null;
window.addEventListener('scroll', () => {
	const docScrollTop = document.documentElement.scrollTop;

	const homeRect = document.getElementById('home').getBoundingClientRect();
	const aboutRect = document.getElementById('about').getBoundingClientRect();
	const portfolioRect = document.getElementById('portfolio').getBoundingClientRect();
	const contactRect = document.getElementById('contact').getBoundingClientRect();
	const homeNav = document.getElementById("homeNav")
	const aboutNav = document.getElementById("aboutNav")
	const portfolioNav = document.getElementById("portfolioNav")
	const contactNav = document.getElementById("contactNav")

	const navbarRefs = [
		[homeRect, homeNav],
		[aboutRect, aboutNav],
		[portfolioRect, portfolioNav],
	];

	const header = document.querySelector("header")

	if (window.innerWidth > 991) {	
		if (docScrollTop > header.scrollHeight) {
			header.classList.add("fixed")
		}
		else {
			header.classList.remove("fixed")
		}
	}


	for (const [rect, nav] of navbarRefs) {
		if (rect.top <= window.innerHeight && rect.bottom > header.scrollHeight) {
			if (previousActive) {
				previousActive.classList.remove('active');
			}
			previousActive = nav;
			nav.classList.add('active');
			break;
		} else {
			nav.classList.remove('active');
		}
	}

	if (contactRect.top <= window.innerHeight && contactRect.bottom >= 0) {
		if (previousActive) {
			previousActive.classList.remove('active');
		}
		previousActive = contactNav;
		contactNav.classList.add('active');
	}

});


// navbar links
const navbar = document.querySelector(".navbar");
a = navbar.querySelectorAll("a");

a.forEach(function (element) {
	element.addEventListener("click", function () {
		for (let i = 0; i < a.length; i++) {
			a[i].classList.remove("active");
		}
		if (previousActive) {
			previousActive.classList.remove('active');
		}
		this.classList.add("active")
		previousActive = this;
		document.querySelector(".navbar").classList.toggle("show");
	})
})


//page scroll




//ham-burger

const hamBurger = document.querySelector(".ham-burger");

hamBurger.addEventListener("click", function () {
	document.querySelector(".navbar").classList.toggle("show");
})






















