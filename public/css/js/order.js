//Defining the form elements.
var user_name = document.order.username;
var nationalID = document.order.nin;
var contacts = document.order.contact;
var locations = document.order.location;
var services = document.order.service;
// var service = document.getElementById(services);
var subscription = document.order.request;
var requestTime = document.order.time;
var conductorsNumber = document.order.conductors;
var fees = document.order.servicefee;
//Regex to be used for name  and contact respectively.
const usernameRegex = /^[A-Z a-z]+$/;
const contactRegex = /^[0-9a-zA-Z+]+$/;

//Constants for validating the  length of name,national ID,maximum words, contact and inputs.
const minName = 2;
const minNin = 13;
const maxWord = 50;
const minContanct =10;

//Validating the form inputs.
let validation = () => {
  if (user_name.value.length < minName) {
    user_name.focus();
    user_name.style.border = '2px solid red';
    alert('Please enter a valid name (at least 2 characters).');
    return false;
  }
   if (user_name.value.length > maxWord) {
     user_name.focus();
     user_name.style.border = '2px solid red';
     alert('Please enter a valid name (not more than 50 characters).');
     return false;
   }

    if (!user_name.value.match(usernameRegex)) {
      user_name.focus();
      user_name.style.border = '2px solid red';
      alert('Please enter a valid name.');
      return false;
    }
  

  if (nationalID.value.length < minNin ) {
    nationalID.focus();
    nationalID.style.border = '2px solid red';
    alert('Please enter a valid national ID.');
    return false;
  }

  if (contacts.value.length != minContanct) {
    contacts.focus();
    contacts.style.border = '2px solid red';
    alert('Please enter a valid contact.');
    return false;
  }
  // if (contacts.value.match(contactRegex)) {
  //   return true;
  // }

  if (locations.value == '') {
    locations.focus();
    locations.style.border = '2px solid red';
    alert('Please enter a location.');
    return false;
  }
  



  if (services.value == 'Choose') {
    services.focus();
    services.style.border = '2px solid red';
    alert('Please enter a valid service.');
    return false;
  }
  if (subscription.value == 'Choose') {
    subscription.focus();
    subscription.style.border = '2px solid red';
    alert('Please enter subscription.');
    return false;
  }
  if (requestTime.value == '') {
    requestTime.focus();
    requestTime.style.border = '2px solid red';
    alert('Please enter time.');
    return false;
  }
   if (conductorsNumber.value == '') {
     conductorsNumber.focus();
     conductorsNumber.style.border = '2px solid red';
     alert('Please enter number of conductors.');
     return false;
   }
   if (fees.value == '') {
     fees.focus();
     fees.style.border = '2px solid red';
     alert('Please enter service fee.');
     return false;
   }
   
};

// const emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if (!email.value.match(emailregex)) {
//       alert("please put in a correct email address");
//       return false;
//     }