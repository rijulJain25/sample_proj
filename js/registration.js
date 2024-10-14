function func(fieldId) {
    var name = document.getElementById(fieldId).value;
    var nameError = document.getElementById("nameError");
    if (name.length <= 3) {
        nameError.textContent = "Field can't have less than 3 characters";
        document.getElementById(fieldId).focus();
    } 
}

function funcPass(fieldId){
    var password = document.getElementById(fieldId).value;
    var passwordError = document.getElementById("passwordError");
    var strength = 0; 
    var hasUpperCase = /[A-Z]/.test(password);
    var hasLowerCase = /[a-z]/.test(password);
    var hasNumbers = /[0-9]/.test(password);
    var hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long";
        document.getElementById(fieldId).focus();
    } else if (!hasUpperCase) {
        passwordError.textContent = "Password must contain at least one uppercase letter";
        document.getElementById(fieldId).focus();
    } else if (!hasLowerCase) {
        passwordError.textContent = "Password must contain at least one lowercase letter";
        document.getElementById(fieldId).focus();
    } else if (!hasNumbers) {
        passwordError.textContent = "Password must contain at least one number";
        document.getElementById(fieldId).focus();
    } else if (!hasSpecialChars) {
        passwordError.textContent = "Password must contain at least one special character";
        document.getElementById(fieldId).focus();
    } else {
        passwordError.textContent = "";
        strength += 1;
    }
}

function funcEmail(fieldId) {
    var email = document.getElementById(fieldId).value;
    var emailError = document.getElementById("emailError");
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email address";
    } else {
        emailError.textContent = "";
    }
}