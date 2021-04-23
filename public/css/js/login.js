//Validating login page.

var user_name = document.login.username;
var password = document.login.password;

//Regex to be used for username.
const usernameRegex = /[STC][0-9]/;

//Validation for the login page.
let validation = () => {
  if (user_name.value == '') {
    user_name.focus();
    user_name.style.border = '2px solid red';
    alert('Please enter username');
    return false;
  }
  if (!user_name.value.match(usernameRegex)) {
    user_name.focus();
    user_name.style.border = '2px solid red';
    alert('Please begin with STC and any number of your choice');
    return false;
  }
  if (password.value == '') {
    password.focus();
    password.style.border = '2px solid red';
    alert('Please enter password');
    return false;
  }
};
