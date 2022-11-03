document.addEventListener('DOMContentLoaded', () => {
	/*
		1. по клику на пункты верхнего меню открывать дропдаун
		2. по клику (повторному) на эти пункты - закрывать дропдаун
		3. по клику в любое место сайта, кроме меню - закрывать дропдаун
	*/
	document.querySelector('.header__mobileMenuBtn').addEventListener('click', () =>{
		document.querySelector('.mobileMenu').classList.toggle('mobileMenu_active');
	})
	document.querySelector('.mobileMenu__close').addEventListener('click', () =>{
		document.querySelector('.mobileMenu').classList.toggle('mobileMenu_active');
	})

	const menuBtns = document.querySelectorAll('.header__menuItemBtn');
	const drops = document.querySelectorAll('.header__menuDropdown');

	menuBtns.forEach(el => {
		el.addEventListener('click', (e) => {
			let currentBtn = e.currentTarget;
			let drop = currentBtn.closest('.header__menuItem').querySelector('.header__menuDropdown');

			menuBtns.forEach(el => {
				if (el !== currentBtn) {
					el.classList.remove('header__menuItemBtn_active');
				}
			});

			drops.forEach(el => {
				if (el !== drop) {
					el.classList.remove('header__menuDropdown_active');
				}
			});

			drop.classList.toggle('header__menuDropdown_active');
			currentBtn.classList.toggle('header__menuItemBtn_active');
		});
	});

	document.addEventListener('click', (e) => {
		if (!e.target.closest('.header__menu')) {
			menuBtns.forEach(el => {
				el.classList.remove('header__menuItemBtn_active');
			});

			drops.forEach(el => {
				el.classList.remove('header__menuDropdown_active');
			});
		}
	});
});