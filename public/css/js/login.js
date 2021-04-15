//Validating login page
var user_name = document.login.username;
var password = document.login.password;



// 
var userName = () => {
  if (user_name.value == '') {
    user_name.focus();
    user_name.style.border = '2px solid red';
    alert('Please enter username');
    return false;
  }
 
};

var userpassword = () => {
  if (password.value == '') {
    password.focus();
    password.style.border = '2px solid red';
    alert('Please enter password');
    return false;
  }
};

let validation = () => {
  userName();
  userpassword();
  
};

// An event Listener for the event of submitting
document.login.addEventListener('submit', validation);