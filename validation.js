// //Global variables.
// var user_name = document.assign.field1;
// var myemail = document.assign.field2;
// var phone = document.assign.field3;
// var about = document.assign.field4;
// var interest = document.assign.field5;
// var additional_Info = document.assign.field6;

// /*Creating functions for validation.
// Validating name to not have less than five characters.
// Name should not be empty and should be strings not numbers.
// Email should be a valid email .
// Number should not have strings.
// About yourself can be empty but values should not exceed fifty words.
// Additional information can be left empty.
// Use of an event listener to call a function within a function.

// */
// //Calling name for validation.
// var name1 = () => {
//   if (user_name.value == '') {
//     user_name.style.border = '2px solid red';
//     return false;
//   }

//   //Variable min to check if name has five characters.
//   let min = 5;
//   if (user_name.value.length < min) {
//     alert('Please input name of five characters');
//     user_name.style.border = '2px solid red';
//     return false;
//   }
//   var letters = /^[A-Za-z]+$/;
//   if (user_name.value.match(letters)) {
//     return true;
//   } else {
//     alert('Please name should not have numbers');
//   }
// };
// //Validating email to be valid.
// var myEmail = () => {
//   if (myemail.value == '') {
//     myemail.style.border = '2px solid red';
//   }
//   //Email value should match myemail1 regular expression .
//   let myemail1 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//   if (myemail.value.match(myemail1)) {
//     myemail.style.border = '2px solid red';
//     return true;
//   } else {
//     alert('Please input a valid email');
//     myemail.style.border = '2px solid red';
//     return false;
//   }
// };

// var phone1 = () => {
//   //Regular expression for my phone number to be in numbers not strings.+
//   let format1 = /^\+[0-9]+$/;
//   if (phone.value == '') {
//     phone.style.border = '2px solid red';
//     return false;
//   }
//   if (phone.value.match(format1)) {
//     return true;
//   } else {
//     alert('Please input a valid phone number');
//     phone.style.border = '2px solid red';
//     return false;
//   }
// };
// //About yourself function.
// let about1 = () => {
//   if (about.value == '') {
//     return false;
//   }
//   //Characters should not exceed 50.
//   let maxlength = 50;
//   if (about.value.length > maxlength) {
//     alert('Should not exceed 50 characters');

//     return false;
//   }
// };

// let interest1 = () => {
//   if (interest.value !== '') {
//     interest.style.border = '2px solid red';
//     return false;
//   }

//   //Regular expression for options listed in interest
//   var letters = /^[A-Za-z]+$/;
//   if (interest.value.match(letters)) {
//     return true;
//   } else {
//     alert('Please select you choice');
//   }
// };

// //Additional info function if addition info is continue.
// let additionalInfo = () => {
//   if (additional_Info.value == '') {
//     return false;
//   }
// };

// //Validation function.
// let validation = () => {
//   name1();
//   myEmail();
//   phone1();
//   about1();
//   interest1();
//   additionalInfo();
// };

// // An eventlistener  when one clicks on apply.
// document.assign.addEventListener('submit', validation);
