//Defining the form elements.
var first_name = document.register.firstname;
var last_name = document.register.lastname;
var user_name = document.register.username;
var passCode = document.register.password;
var reEnterpassCode = document.register.reEnterpassword;

//Regex to be used for name  and contact respectively.
const usernameRegex = /^[A-Z a-z]+$/;
const contactRegex = /^[0-9a-zA-Z+]+$/;

//Constants for validating the  length of name,national ID,maximum words, contact and inputs.
const minName = 2;
const minNin = 13;
const maxWord = 50;

//Validating the form inputs.
let validation = () => {
  if (first_name.value == '') {
    first_name.focus();
    first_name.style.border = '2px solid red';
    alert('Please enter name.');
    return false;
  }

  if (first_name.value.length < minName) {
    first_name.focus();
    first_name.style.border = '2px solid red';
    alert('Please enter a valid name (at least 2 characters).');
    return false;
  }
  if (first_name.value.length > maxWord) {
    first_name.focus();
    first_name.style.border = '2px solid red';
    alert('Please enter a valid name (not more than 50 characters).');
    return false;
  }

  if (!first_name.value.match(usernameRegex)) {
    first_name.focus();
    first_name.style.border = '2px solid red';
    alert('Please enter a valid name.');
    return false;
  }
  if (last_name.value == '') {
    last_name.focus();
    last_name.style.border = '2px solid red';
    alert('Please enter lastname.');
    return false;
  }

  if (last_name.value.length < minName) {
    last_name.focus();
    last_name.style.border = '2px solid red';
    alert('Please enter a valid name (at least 2 characters).');
    return false;
  }
  if (last_name.value.length > maxWord) {
    last_name.focus();
    last_name.style.border = '2px solid red';
    alert('Please enter a valid name (not more than 50 characters).');
    return false;
  }

  if (!last_name.value.match(usernameRegex)) {
    last_name.focus();
    last_name.style.border = '2px solid red';
    alert('Please enter a valid lastname.');
    return false;
  }
  if (user_name.value == '') {
    user_name.focus();
    user_name.style.border = '2px solid red';
    alert('Please enter a valid username.');
    return false;
  }
  if (passCode.value == '') {
    passCode.focus();
    passCode.style.border = '2px solid red';
    alert('Please enter a password.');
    return false;
  }

};
