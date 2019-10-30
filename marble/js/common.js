(function () {
	var burger = document.querySelector(".burger-container"),
		header = document.querySelector(".navigation-mobile");

	burger.onclick = function () {
		header.classList.toggle("navigation-opened");
	};
})();