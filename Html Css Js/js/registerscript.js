var username;
var password;
var email;
var agreement;
var region;
var dob
var capital = false;
var small = false;
var num = false;
var special = false;

function getDOM() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    email = document.getElementById("email").value;
    agreement = document.getElementById("tos");
    region = document.getElementById("regions").value;
    dob = document.getElementById("dob").value;
}

function validateEmail(email) {
    var at = email.indexOf("@");
    var dot = email.lastIndexOf("\.");
    return email.length > 0 &&
    at > 0 &&
    dot > at + 1 &&
    dot < email.length &&
    email[at + 1] !== "." &&
    email.indexOf(" ") === -1 &&
    email.indexOf("..") === -1;
}

function validate() {
    getDOM();
    if(username == "") {
        document.getElementById("error_message").innerHTML = "Please enter your username";
        return false;
    }else document.getElementById("error_message").innerHTML = "";
    if(username.length < 3) {
        document.getElementById("error_message").innerHTML = "Username must be more than 3 characters";
        return false;
    }else document.getElementById("error_message").innerHTML = "";
    if (email === "") {
        document.getElementById("error_message2").innerHTML = "Please enter your email address";
        return false;
    }else document.getElementById("error_message2").innerHTML = "";
    if(validateEmail(email) === false) {
        document.getElementById("error_message2").innerHTML = "Please enter a valid email address";
        return false;
    }else document.getElementById("error_message2").innerHTML = "";
    if(password === "") {
        document.getElementById("error_message3").innerHTML = "Please enter your password";
        return false;
    }else document.getElementById("error_message3").innerHTML = "";
    if(password.length < 8) {
        document.getElementById("error_message3").innerHTML = "Password must be at least 8 characters";
        return false;
    }else document.getElementById("error_message3").innerHTML = "";
   
    for(var i = 0; i < password.length; ++i) {
        var charCode = password.charCodeAt(i);
        if(charCode > 47 && charCode < 58)
            num = true;
        if(charCode > 64 && charCode < 91)
            capital = true;
        if(charCode > 96 && charCode < 123)
            small = true;
        if(charCode > 32 && charCode < 48)
            special = true;
    }
    if(!capital) {
        document.getElementById("error_message3").innerHTML = "Your password must contain at least one uppercase letter.";
        return false;
    }else document.getElementById("error_message3").innerHTML = "";


    if(!small) {
        document.getElementById("error_message3").innerHTML = "Your password must contain at least one lowercase letter.";
        return false;
    }else document.getElementById("error_message3").innerHTML = "";

    if(!num) {
        document.getElementById("error_message3").innerHTML = "Your password must contain at least one digit.";
        return false;
    }else document.getElementById("error_message3").innerHTML = "";
    if(!special) {
        document.getElementById("error_message3").innerHTML = "Your password must contain at least one special character.";
        return false;
    } else document.getElementById("error_message3").innerHTML = "";
    if(region == 0) {
        document.getElementById("error_message4").innerHTML = "You must choose your region";
        return false;
    }else document.getElementById("error_message4").innerHTML = "";
    if(!dob) {
        document.getElementById("error_message5").innerHTML = "Please enter your date of birth";
        return false;
    }else document.getElementById("error_message5").innerHTML = "";
    if(agreement.checked != true) {
        document.getElementById("error_message6").innerHTML = "You must agree to the terms and conditions";
        return false;
    }else document.getElementById("error_message6").innerHTML = "";
    return true;
}