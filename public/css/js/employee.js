//Defining the form elements.
var first_name = document.employee.firstname;
var last_name = document.employee.lastname;
var nationalID = document.employee.nin;
var user_name = document.employee.username;
var permit = document.employee.licence;
var sex = document.employee.gender;
var date_of_birth = document.employee.date;
var roles = document.employee.role;
var incidents = document.employee.pastincidents;
// var incidents = document.getElementById('accidents');
// var incidents = document.getElementById('fights');
// var incidents = document.getElementById('fuelthefts');

//Regex to be used for name  and contact respectively.
const usernameRegex = /^[A-Z a-z]+$/;
const contactRegex = /^[0-9a-zA-Z+]+$/;

//Constants for validating the  length of name,national ID,maximum words, contact and inputs.
const minName = 2;
const minNin = 13;
const maxWord = 50;
const minContanct = 10;

//Validating the form inputs.
let validation = () => {
  if (first_name.value == '') {
    first_name.focus();
    first_name.style.border = '2px solid red';
    alert('Please enter a valid name .');
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
    alert('Please enter a valid last name.');
    return false;
  }
  if (nationalID.value.length < minNin) {
    nationalID.focus();
    nationalID.style.border = '2px solid red';
    alert('Please enter a valid national ID.');
    return false;
  }

  if (user_name.value == '') {
    user_name.focus();
    user_name.style.border = '2px solid red';
    alert('Please enter a valid username.');
    return false;
  }
  // if (!contacts.value.match(contactRegex)) {
  //   return false;
  // }

  if (permit.value == '') {
    permit.focus();
    permit.style.border = '2px solid red';
    alert('Please enter licence.');
    return false;
  }

  if (sex.value == 'Choose') {
    sex.focus();
    sex.style.border = '2px solid red';
    alert('Please enter a valid service.');
    return false;
  }
  if (date_of_birth.value  >30) {
    date_of_birth.focus();
    date_of_birth.style.border = '2px solid red';
    alert('Please selcect date of birth.');
    return false;
  }
  if (roles.value == 'Choose') {
    roles.focus();
    roles.style.border = '2px solid red';
    alert('Please enter a valid choice.');
    return false;
  }
  if (
    accidents.checked == false &&
    fights.checked == false &&
    fuelthefts.checked == false &&
    none.checked == false
  ) {
    alert('Please select past incident');
    return false;
  }
};
