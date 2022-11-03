document.addEventListener('DOMContentLoaded', () => {
	
	document.querySelector('.header__mobileMenuBtn').addEventListener('click', () =>{
		document.querySelector('.mobileMenu').classList.toggle('mobileMenu_active');
	})
	document.querySelector('.mobileMenu__close').addEventListener('click', () =>{
		document.querySelector('.mobileMenu').classList.toggle('mobileMenu_active');
	})

	const accordions = document.querySelectorAll('.faq__accordionItem');

	accordions.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const content = self.querySelector('.faq__accordionContent');

			self.classList.toggle('open');

			if (self.classList.contains('open')) {
				content.style.maxHeight = 400 + 'px';
			} else {
				content.style.maxHeight = null;
			}
		});
	});
});