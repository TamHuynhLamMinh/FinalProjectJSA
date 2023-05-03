const form = document.querySelector('.email-signup');
const emailInput = document.querySelector('#my-email');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = emailInput.value.trim();
  
  if (!isValidEmail(email)) {
    alert('Invalid email address!');
    return;
  }
  
  // submit the form if the email is valid
  form.submit();
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
