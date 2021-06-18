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
    return email.length > 0
        && at > 0
        && dot > at + 1
        && dot < email.length
        && email[at + 1] !== "."
        && email.indexOf(" ") === -1
        && email.indexOf("..") === -1;
}

function validate() {
    getDOM();
    if(username == "") {
        document.getElementById("error-message").innerHTML = "Please enter your username";
        $("#username").css("border", "red 2px solid");
        return false;
    } else if(username.length < 3) {
        document.getElementById("error-message").innerHTML = "Username must be more than 3 characters";
        $("#username").css("border", "red 2px solid");
        return false;
    } else {
        document.getElementById("error-message").innerHTML = "";
        $("#username").css("border", "none");
    }
    
    if (email === "") {
        document.getElementById("error-message2").innerHTML = "Please enter your email address";
        $("#email").css("border", "red 2px solid");
        return false;
    }else if(validateEmail(email) === false) {
        document.getElementById("error-message2").innerHTML = "Please enter a valid email address";
        $("#email").css("border", "red 2px solid");
        return false;
    }else {
        document.getElementById("error-message2").innerHTML = "";
        $("#email").css("border", "none");
    }
    
    if(password === "") {
        document.getElementById("error-message3").innerHTML = "Please enter your password";
        $("#password").css("border", "red 2px solid");
        return false;
    }else if(password.length < 8) {
        document.getElementById("error-message3").innerHTML = "Password must be at least 8 characters";
        $("#password").css("border", "red 2px solid");
        return false;
    }else {
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
            document.getElementById("error-message3").innerHTML = "Your password must contain at least one uppercase letter.";
            $("#password").css("border", "red 2px solid");
            return false;
        }else if(!small) {
            document.getElementById("error-message3").innerHTML = "Your password must contain at least one lowercase letter.";
            $("#password").css("border", "red 2px solid");
            return false;
        }else if(!num) {
            document.getElementById("error-message3").innerHTML = "Your password must contain at least one digit.";
            $("#password").css("border", "red 2px solid");
            return false;
        }else if(!special) {
            document.getElementById("error-message3").innerHTML = "Your password must contain at least one special character.";
            $("#password").css("border", "red 2px solid");
            return false;
        } else {
            document.getElementById("error-message3").innerHTML = "";
            $("#password").css("border", "none");
        }
    }

    if(region == 0) {
        document.getElementById("error-message4").innerHTML = "You must choose your region";
        $("#regions").css("border", "red 2px solid");
        return false;
    }else {
        document.getElementById("error-message4").innerHTML = "";
        $("#regions").css("border", "none");
    }

    if(!dob) {
        document.getElementById("error-message5").innerHTML = "Please enter your date of birth";
        $("#dob").css("border", "red 2px solid");
        return false;
    }else {
        document.getElementById("error-message5").innerHTML = "";
        $("#dob").css("border", "none");
    }

    if(agreement.checked != true) {
        document.getElementById("error-message6").innerHTML = "You must agree to the terms and conditions";
        return false;
    }else {
        document.getElementById("error-message6").innerHTML = "";
    }

    return true;
}