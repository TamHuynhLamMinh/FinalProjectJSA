const email = localStorage.getItem('email');

if (email) {
  
  console.log('Email is stored in local storage: ' + email);
} else {
  
  console.log('Email is not stored in local storage');
}

function submitForm(event) {
  event.preventDefault(); 

  const inputEmail = document.getElementById('my-email');
  const email = inputEmail.value;
  localStorage.setItem('email', email);

  console.log('Email stored in local storage: ' + email);

  
  if (email === 'example@example.com') {
    window.location.href = 'https://www.youtube.com/watch?v=J14BfxOUxIs';
  } else {
    window.location.href = 'https://www.youtube.com/watch?v=g_tOJzDBvSI';
  }
}

document.getElementById('emailForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const inputEmail = document.getElementById('my-email');
  const email = inputEmail.value;
  localStorage.setItem('email', email);

  console.log('Email stored in local storage: ' + email);

  if (email === 'example@example.com') {
    window.location.href = 'log.html';
  } else {
    window.location.href = 'sign-up.html';
  }
});

document.getElementById('submitBtn').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent button click from submitting the form

  const inputEmail = document.getElementById('my-email');
  const email = inputEmail.value;
  localStorage.setItem('email', email);

  console.log('Email stored in local storage: ' + email);


  if (email === 'example@example.com') {
    window.location.href = 'log.html';
  } else {
    window.location.href = 'sign-up.html';
  }
});

