function validate() {
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;
  if (password != confirmPassword) {
    document.getElementById('password').style.border = 'red 3px solid';
    document.getElementById('confirmPassword').style.border = 'red 3px solid';
  } else {
    document.getElementById('password').style.border = 'green 3px solid';
    document.getElementById('confirmPassword').style.border = 'green 3px solid';
  }
}
