// Знаходимо кнопку за ID
var btn = document.getElementById('button');

// Коли користувач скролить сторінку
window.addEventListener('scroll', function () {
  // Дізнаємось, наскільки вниз прокрутили
  var scrollPosition = window.scrollY;

  // Якщо більше ніж 300 пікселів — показуємо кнопку
  if (scrollPosition > 300) {
    btn.classList.add('show');
  } else {
    // Інакше — ховаємо
    btn.classList.remove('show');
  }
});

// Коли користувач натискає на кнопку
btn.addEventListener('click', function (event) {
  event.preventDefault(); // Щоб не було переходу по посиланню

  // Плавно прокручуємо сторінку до самого верху
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
