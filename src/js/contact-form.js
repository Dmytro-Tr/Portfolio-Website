const form = document.querySelector('.contact_form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const elements = event.currentTarget.elements;
  const info = {
    name: elements.name.value,
    contact: elements.contact.value,
    comment: elements.comment.value,
  };
  console.dir(info);

  event.target.reset();
}
