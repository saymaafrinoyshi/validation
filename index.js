function validation() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    var conpass = document.getElementById("conpass").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    var email = document.getElementById("email").value;





    if (user == "") {
        document.getElementById('username').innerHTML = " ** please fill the username fild";
        return false;
    }
    if ((user.length <= 2) || (user.length > 20)) {
        document.getElementById('username').innerHTML = " ** user length most be between 2 and 20";
        return false;
    }
    if (!isNAN(user)) {
        document.getElementById('username').innerHTML = " ** only characters allowed";
        return false;
    }









    if (pass == "") {
        document.getElementById('Passe').innerHTML = " ** please fill the password fild";
        return false;
    }

    if ((pass.length <= 5) || (pass.length > 20)) {
        document.getElementById('Passe').innerHTML = " ** password length most be between 5 and 20";
        return false;
    }


    if (pass != conpass) {
        document.getElementById('Conpass').innerHTML = " ** password are not matching";
        return false;
    }



    if (conpass == "") {

        document.getElementById('Conpass').innerHTML = " ** please fill the confirm password fild";
        return false;

    }







    if (mobileNumber == "") {
        document.getElementById('Number').innerHTML = " ** please fill the number fild";
        return false;
    }
    if (isNaN(mobileNumber)) {
        document.getElementById('Number').innerHTML = " ** uesr must write digit only not characters";
        return false;
    }
    if (mobileNumber.length != 10) {
        document.getElementById('Number').innerHTML = " ** user must be writing 11 digit only";
        return false
    }





    if (email == "") {
        document.getElementById('Email').innerHTML = " ** please fill the email fild";
        return false;
    }
    if (email.indexOf('@') <= 0) {
        document.getElementById('Email').innerHTML = " ** @ invalid position";
        return false;
    }

    if ((email.charAt(email.length - 4) != ".") && (email.charAt(email.length - 3) != ".")) {
        document.getElementById('Email').innerHTML = " ** . invalid position";
        return false;
    }

}

function dateformat() {
    var date = document.getElementById('date').value;
    date = moment(date).format('D MMM, YYYY');
    console.log(date)
    return false;
}