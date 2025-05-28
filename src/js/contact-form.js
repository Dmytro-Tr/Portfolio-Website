const form = document.querySelector('.contact_form');
const messageBox = document.getElementById('formMessage');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const elements = event.currentTarget.elements;
  const info = {
    name: elements.name.value.trim(),
    contact: elements.contact.value.trim(),
    comment: elements.comment.value.trim(),
  };

  fetch('https://backend-portfolio-p9ul.onrender.com/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(info),
  })
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      showMessage('Message sent successfully!', 'success');
    })
    .catch(error => {
      console.error('Error sending message:', error);
      showMessage('Failed to send message. Try again later.', 'error');
    });

  event.target.reset();

  function showMessage(message, type) {
    messageBox.textContent = message;
    messageBox.className = `contact_message ${type}`;
    messageBox.style.display = 'block';

    setTimeout(() => {
      messageBox.style.display = 'none';
    }, 3000);
  }
}
