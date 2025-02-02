const validatePassword = () => {
  const pw1 = document.getElementById('password').value;
  const pw2 = document.getElementById('password-confirm').value;

  if (pw1 === pw2) {
    console.log('Passwords match');
    return true;
  } else {
    alert('Passwords do not match');
    return false;
  }
};

const btn = document.getElementById('submit-btn');

btn.addEventListener('click', (event) => {
  validatePassword();
});
