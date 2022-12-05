/**
 * As a User need to enter a valid First Name
    - First name starts with Cap and has minimum 3 characters
 * 
 * @author : Krunal Lad
 * @since : 27-07-2021
 */

/**
 * Update the salary value when scrolled from left to right and vice-versa
 */

 const salary = document.querySelector('#salary');
 const output = document.querySelector('.salary-output');
 output.textContent = salary.value;
 salary.addEventListener('input', function () {
     output.textContent = salary.value;
 });
 
 /**
  * To validate the name field using the REGEX expression
  */
 
 const text = document.querySelector('#text');
 const textError = document.querySelector('.text-error');
 text.addEventListener('input', function () {
     let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
     if (nameRegex.test(text.value))
         textError.textContent = "";
     else textError.textContent = "Name is Incorrect";
 });
 
 const password = document.querySelector('#password');
 const passwordError = document.querySelector('.pwd-error');
 password.addEventListener('input',function(){
     let nameRegex = RegExp("[A-Za-z0-9!@#&()–{}:;',?/*~$^+=<>]{8,}");
     if(nameRegex.test(password.value))
         passwordError.textContent = "";
     else passwordError.textContent = "Password is Incorrect";
 });

 var myInput = document.getElementById("psw");
 var letter = document.getElementById("letter");
 var capital = document.getElementById("capital");
 var number = document.getElementById("number");
 var length = document.getElementById("length");
 
 // When the user clicks on the password field, show the message box
 myInput.onfocus = function () {
     document.getElementById("message").style.display = "block";
 }
 
 // When the user clicks outside of the password field, hide the message box
 myInput.onblur = function () {
     document.getElementById("message").style.display = "none";
 }
 
 // When the user starts to type something inside the password field
 myInput.onkeyup = function () {
     // Validate lowercase letters
     var lowerCaseLetters = /[a-z]/g;
     if (myInput.value.match(lowerCaseLetters)) {
         letter.classList.remove("invalid");
         letter.classList.add("valid");
     } else {
         letter.classList.remove("valid");
         letter.classList.add("invalid");
     }
 
     // Validate capital letters
     var upperCaseLetters = /[A-Z]/g;
     if (myInput.value.match(upperCaseLetters)) {
         capital.classList.remove("invalid");
         capital.classList.add("valid");
     } else {
         capital.classList.remove("valid");
         capital.classList.add("invalid");
     }
 
     // Validate numbers
     var numbers = /[0-9]/g;
     if (myInput.value.match(numbers)) {
         number.classList.remove("invalid");
         number.classList.add("valid");
     } else {
         number.classList.remove("valid");
         number.classList.add("invalid");
     }
 
     // Validate length
     if (myInput.value.length >= 8) {
         length.classList.remove("invalid");
         length.classList.add("valid");
     } else {
         length.classList.remove("valid");
         length.classList.add("invalid");
     }
 }

 /**
 * To validate the email field using the REGEX expression
 */

  const email = document.querySelector('#email');
  const emailError = document.querySelector('.email-error');
  text.addEventListener('input', function() {
      let emailRegex = RegExp("^[A-Za-z0-9!#$%&*+\\\\=?`{|}~^-]+(?:\\.[A-Za-z!#$%&*+\\\\=?`{|}~^-]+)*@(?:([0-9-]{1}|[a-zA-Z]{3,5})\\.)+[a-zA-Z]{2,3}$");
      if(emailRegex.test(email.value))
          emailError.emailContent = "";
      else emailError.emailContent = "Email is Incorrect";
  });

  /**
 * To validate the mobile field using the REGEX expression
 */

// When the user starts to type something inside the number field
var myInput1 = document.getElementById("tel");
myInput1.onkeyup = function() {
    // Validate numbers
    var numbers = /[0-9]/g;
    if(myInput1.value.match(numbers)) {  
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }
    // Validate space
    var space = /[\s]/g;
    if(myInput1.value.match(space)) {  
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }
}