
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm_password');

const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');

emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);
confirmPasswordInput.addEventListener('input', validateConfirmPassword);

function validateEmail() {
  const email = emailInput.value.trim();
  if (!isValidEmail(email)) {
    emailError.textContent = 'Invalid email';
  } else {
    emailError.textContent = '';
  }
}

function validatePassword() {
    const password = passwordInput.value;
    let errorMessage = '';
  
    if (password.length < 6) {
      errorMessage = 'Password must be at least 6 characters long';
    } else if (!/[a-z]/.test(password)) {
      errorMessage = 'Password must contain at least one lowercase letter';
    } else if (!/[A-Z]/.test(password)) {
      errorMessage = 'Password must contain at least one uppercase letter';
    } else if (!/\d/.test(password)) {
      errorMessage = 'Password must contain at least one digit';
    } else if (!/[^a-zA-Z\d]/.test(password)) {
      errorMessage = 'Password must contain at least one special character';
    }
  
    passwordError.textContent = errorMessage;
  }
  

function validateConfirmPassword() {
  const confirmPassword = confirmPasswordInput.value;
  const password = passwordInput.value;
  if (confirmPassword !== password) {
    confirmPasswordError.textContent = 'Passwords do not match';
  } else {
    confirmPasswordError.textContent = '';
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPassword(password) {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,])(?=.*[a-zA-Z]).{6,}$/;
  return passwordRegex.test(password);
}

document.getElementById('login-form').addEventListener('submit', function(event) {
  if (!isValidEmail(emailInput.value.trim())) {
    emailError.textContent = 'Invalid email';
    event.preventDefault();
  }

  if (!isValidPassword(passwordInput.value)) {
    passwordError.textContent = 'Password must contain at least 6 characters including uppercase, lowercase, and a special character';
    event.preventDefault();
  }

  if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordError.textContent = 'Passwords do not match';
    event.preventDefault();
  }
});
