const btns = document.querySelectorAll(".navbar-toggler-btn");

for (let i = 0; i < btns.length; i++) {
	const cls = { open: "open-btn", close: "close-btn" };
	let btnsClass = cls.open;

	btns[i].addEventListener("click", () => {
		if (btns[i].classList.contains(cls.open)) {
			btns[i].classList.remove(btnsClass);
			btnsClass = cls.close;
		} else if (btns[i].classList.contains(cls.close)) {
			btns[i].classList.remove(btnsClass);
			btnsClass = cls.open;
		}

		void btns[i].offsetWidth;
		btns[i].classList.add(btnsClass);
	});
}
