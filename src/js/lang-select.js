const select = document.querySelector('.header_select_lang');
const allLang = ['en', 'ua'];

// Визначення активної мови
let currentLang =
  localStorage.getItem('language') || checkBrowserLang() || 'en';

// Встановлення значення у select
select.value = currentLang;

// Проставити переклади
changeLanguage(currentLang);

// Слухач на зміну мови
select.addEventListener('change', () => {
  const selectedLang = select.value;
  localStorage.setItem('language', selectedLang);
  changeLanguage(selectedLang);
});

// Функція зміни мови
function changeLanguage(lang) {
  const elements = document.querySelectorAll('[data-lang]');

  elements.forEach(elem => {
    const key = elem.getAttribute('data-lang');

    if (langArr[key]) {
      // Якщо є ключ — беремо переклад або англійський запасний варіант
      const translatedText = langArr[key][lang] || langArr[key]['en'];
      elem.textContent = translatedText;
    } else {
      // Якщо взагалі немає ключа в langArr — нічого не змінюємо
      // (залишаємо початковий текст як є)
      console.warn(`Translation key '${key}' not found in langArr`);
    }
  });
}

// Перевірка мови браузера
function checkBrowserLang() {
  const browserLand = navigator.language.slice(0, 2).toLowerCase();
  return allLang.includes(browserLand) ? browserLand : null;
}
