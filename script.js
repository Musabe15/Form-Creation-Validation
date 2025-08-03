document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registration-form');
  const feedbackDiv = document.getElementById('form-feedback')

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').Value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let isValid = true;
    let messages = [];

    if (username.length < 3) {
      isValid = false;
      messages.push('User name must be at least 3 characters long');
    }
    if (!email.includes('@') || !email.includes('.')) {
      isValid = false;
      messages.push('please enter valid email address');
    }
    if (password.length < 8) {
      isValid = false;
      messages.push('Password must be at least 8 characters long');
    }

    feedbackDiv.style.display ="block";
    if (isValid) {
      feedbackDiv.textContent = 'Registration successful!';
      feedbackDiv.style.display = 'green';
    } else {
      feedbackDiv.textContent = messages.join('<br>');
      feedbackDiv.style.display = 'red';
    }
  })
});
