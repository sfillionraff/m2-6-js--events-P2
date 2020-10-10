let checkbox = document.getElementById('termsOfService');
let originalPassword = document.getElementById('originalPassword');
let confirmPassword = document.getElementById('confirmPassword');
let errorMessage = document.querySelector('.errorMessage');
let userInput = document.querySelector('#userInput');
let submitButton = document.querySelector('#submitButton');
let form = document.querySelector('form');
form.addEventListener('submit', submitFunction);

function submitFunction (event) {
    event.preventDefault();
    if (!checkbox.checked) {
        window.alert('You must agree to the terms and conditions to submit the form');
    }
    else if (originalPassword.value.length < 10){
        errorMessage.innerHTML = 'Your password is too short! Please provide a password that is at least 10 characters long.';
        originalPassword.style.border = '1px solid red';
    }
    else if (originalPassword.value !== confirmPassword.value) {
        originalPassword.style.border = '1px solid red';
        confirmPassword.style.border = '1px solid red';
        errorMessage.innerHTML = 'Passwords don\'t match';
        return false;
    }
    else {
        errorMessage.style.display = 'none';
        errorMessage.style.border = 'none';
        alert("Success!");
    }
}


// try one:
// let checkbox = document.getElementById('termsOfService');
// function checkTheCheckbox(event) {
//     if (checkbox.checked = false) {
//         window.alert('You must agree to the terms and conditions');
//         console.log('checked')
//     }
//     checkbox.addEventListener('change',checkTheCheckBox);
// }

// let originalPassword = document.getElementById('originalPassword');
// let confirmPassword = document.getElementById('confirmPassword');
// let errorMessage = document.getElementsByClassName('errorMessage');
// function passwordCheck(event) {
//     if (originalPassword.value != confirmPassword.value || originalPassword.value.length < 10) {
//         errorMessage.innerHTML = "Your password is too short! Please provide a password that is at least 10 characters long.";
//         passwordBox.style.border = 'red';
//         return false;
//     }
//     originalPassword.eventListener('input', passwordCheck);
//     confirmPassword.eventListener('input', passwordCheck);
//     console.log('password');
//     return true;
// }

// let userInput = document.querySelector('#userInput');
// let submitButton = document.querySelector('#submitButton');
// function formSubmit(event) {
//     if (userInput.value.length > 1 && checkbox.checked && originalPassword === confirmPassword && originalPassword.length < 10) {
//         alert("Success!");
//     } else {
//         event.preventDefault();
//     }
//     submitButton.addEventListener('click', formSubmit);
// }