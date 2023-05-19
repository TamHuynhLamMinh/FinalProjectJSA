function validateLoginForm() {
    // Get input values
    const emailInput = document.getElementById('emailInput').value;
    const passwordInput = document.getElementById('passwordInput').value;
  
    // Store values in local storage
    localStorage.setItem('email', emailInput);
    localStorage.setItem('password', passwordInput);
  
    // Redirect to a different page or perform other actions
    // Example: Redirect to a success page
    window.location.href = 'main.html';
}

const storedEmail = localStorage.getItem('email');
const storedPassword = localStorage.getItem('password');

// Use the stored email and password as needed
console.log('Stored Email:', storedEmail);
console.log('Stored Password:', storedPassword);
  