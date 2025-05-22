(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const burgerBtn = document.querySelector('.js-open-menu');
  const menuLinks = mobileMenu.querySelectorAll('a[href]');
  const body = document.body;

  const toggleMenu = () => {
    const isOpen = mobileMenu.classList.contains('is-open');

    // Тогл класів
    mobileMenu.classList.toggle('is-open');
    burgerBtn.classList.toggle('change');
    burgerBtn.setAttribute('aria-expanded', String(!isOpen));

    if (!isOpen) {
      body.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
    }
  };

  // Клік по бургеру (відкриває або закриває)
  burgerBtn.addEventListener('click', toggleMenu);

  // Клік по кожному посиланню всередині меню — теж закриває
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu.classList.contains('is-open')) {
        toggleMenu();
      }
    });
  });

  // Додатково — закривати меню при переході на десктоп
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (e.matches) {
      mobileMenu.classList.remove('is-open');
      burgerBtn.classList.remove('change');
      burgerBtn.setAttribute('aria-expanded', 'false');
      body.classList.remove('no-scroll');
    }
  });
})();
