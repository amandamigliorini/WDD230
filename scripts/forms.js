const rangeValue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangeValue.innerHTML = range.value;
}

// password confirmation

const labelConfirmation = document.getElementById("labelConfirmation");
const password = document.getElementById("password");
const cPassword = document.getElementById("cpassword");

cPassword.addEventListener('change', confirmPassword);

function confirmPassword(){
    if (password.value != cPassword.value){
        labelConfirmation.textContent = "Password and password confirmation do not match";
        password.focus();
    }
    else{
        labelConfirmation.textContent = "";
    }

}