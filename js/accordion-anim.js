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
			const control = self.querySelector('.faq__accordionControl');
			const content = self.querySelector('.faq__accordionContent');

			self.classList.toggle('open');

			if (self.classList.contains('open')) {
				control.setAttribute('aria-expanded', true);
				content.setAttribute('aria-hidden', false);
				content.style.maxHeight = 400 + 'px';
			} else {
				control.setAttribute('aria-expanded', false);
				content.setAttribute('aria-hidden', true);
				content.style.maxHeight = null;
			}
		});
	});
});