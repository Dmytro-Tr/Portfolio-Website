// const items = document.querySelectorAll('.mywork_content');
// const button = document.querySelector('.mywork_button');

// let visibleCount = 3;

// button.addEventListener('click', () => {
//   const hiddenItems = Array.from(items).slice(visibleCount);

//   if (button.textContent === 'Hide all') {
//     // Hide all except first 3
//     items.forEach((item, index) => {
//       if (index >= 3) item.classList.add('hidden');
//     });
//     visibleCount = 3;
//     button.textContent = 'Load more';
//     // Scroll to the last visible item (3rd item)
//     if (items.length >= 3) {
//       items[2].scrollIntoView({ behavior: 'smooth', block: 'center' });
//     }
//     return;
//   }

//   const toShow = hiddenItems.slice(0, 3);
//   toShow.forEach(item => item.classList.remove('hidden'));

//   visibleCount += toShow.length;

//   if (visibleCount >= items.length) {
//     button.textContent = 'Hide all';
//   }
// });

const items = document.querySelectorAll('.mywork_content');
const loadMoreBtn = document.querySelector(
  '[data-lang="mywork_button_loadMore"]'
);
const hideAllBtn = document.querySelector(
  '[data-lang="mywork_button_hideAll"]'
);

let visibleCount = 3;

function updateView() {
  items.forEach((item, index) => {
    item.classList.toggle('hidden', index >= visibleCount);
  });

  if (visibleCount >= items.length) {
    loadMoreBtn.classList.add('hidden');
    hideAllBtn.classList.remove('hidden');
  } else {
    loadMoreBtn.classList.remove('hidden');
    hideAllBtn.classList.add('hidden');
  }
}

loadMoreBtn.addEventListener('click', () => {
  visibleCount = Math.min(visibleCount + 3, items.length);
  updateView();
});

hideAllBtn.addEventListener('click', () => {
  visibleCount = 3;
  updateView();

  if (items.length >= 3) {
    items[2].scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
});

// Ініціалізація
updateView();
