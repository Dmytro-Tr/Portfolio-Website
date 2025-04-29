const items = document.querySelectorAll('.mywork_content');
const button = document.querySelector('.mywork_button');

let visibleCount = 3;

button.addEventListener('click', () => {
  const hiddenItems = Array.from(items).slice(visibleCount);

  if (button.textContent === 'Hide all') {
    // Hide all except first 3
    items.forEach((item, index) => {
      if (index >= 3) item.classList.add('hidden');
    });
    visibleCount = 3;
    button.textContent = 'Load more';
    // Scroll to the last visible item (3rd item)
    if (items.length >= 3) {
      items[2].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return;
  }

  const toShow = hiddenItems.slice(0, 3);
  toShow.forEach(item => item.classList.remove('hidden'));

  visibleCount += toShow.length;

  if (visibleCount >= items.length) {
    button.textContent = 'Hide all';
  }
});
