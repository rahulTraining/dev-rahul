var forms = document.querySelectorAll('form');
var signin_up = document.querySelectorAll('small');

var Sign_up_submit = document.querySelector('.Sign-up-submit');
var Sign_in_submit = document.querySelector('.Sign-in-submit');

var fourInputs = document.querySelectorAll(`.sign-up input:not(input[type="submit"]`);
var signupLabels = document.querySelectorAll('.signUp-form label');
var nameInputs = document.querySelectorAll(`[name="name"]`);
var passInputs = document.querySelectorAll(`[name="pass"]`);

// var users = {firstName:[],lastName:[],password:[],confirmPassword:[]};
// const signupuserValues = {
//     firstName: "",
//     lastName: "",
//     password: "",
//     confirmPassword: ""
// };

var signupUsers = [];
var signinUsers = [];

var signupdetails;
var signindetails;

forms[0].classList.add('active');

signin_up[0].addEventListener('click', function () {
    forms[0].classList.remove('active');
    forms[1].classList.add('active');
})
signin_up[1].addEventListener('click', function () {
    forms[1].classList.remove('active');
    forms[0].classList.add('active');
})

// form preventDefault function

forms[0].addEventListener('click', function (e) {
    e.preventDefault();
})
forms[1].addEventListener('click', function (e) {
    e.preventDefault()
});

function signUp() {
    var signupuserValues = {};
    var fname = document.querySelector('#fname').value;
    var lname = document.querySelector('#lname').value;
    var signUp_passw = document.querySelector('#signUp_passw').value;
    var signUp_confirm_passw = document.querySelector('#signUp_confirm_passw').value;

    signupuserValues.firstName = fname;
    signupuserValues.lastName = lname;
    signupuserValues.password = signUp_passw;
    signupuserValues.confirmPassword = signUp_confirm_passw;
    signupUsers.push(signupuserValues);
    localStorage.setItem('signupdetails', JSON.stringify(signupUsers));
    signupdetails = JSON.parse(localStorage.getItem('signupdetails'));

    if (fname == "") {
        signupLabels[0].style.color = "red"
        fourInputs[0].style.borderColor = "red"
    } else {
        signupLabels[0].style.color = "initial"
        fourInputs[0].style.borderColor = "initial"
    }
    if (lname == "") {
        signupLabels[1].style.color = "red"
        fourInputs[1].style.borderColor = "red"
    } else {
        signupLabels[1].style.color = "initial"
        fourInputs[1].style.borderColor = "initial"
    }
    if (signUp_passw == "") {
        signupLabels[2].style.color = "red"
        fourInputs[2].style.borderColor = "red"
    } else {
        signupLabels[2].style.color = "initial"
        fourInputs[2].style.borderColor = "initial"
    }
    if (signUp_confirm_passw == "") {
        signupLabels[3].style.color = "red"
        fourInputs[3].style.borderColor = "red"
    } else {
        signupLabels[3].style.color = "initial"
        fourInputs[3].style.borderColor = "initial"
    }
    
    fourInputs.forEach(fi => {
        fi.addEventListener('input',function() {
            if (fi.value.length > 1) {
                
            } else {
                
            }
        })
    })
    if (signUp_passw !== signUp_confirm_passw) {
        fourInputs[3].insertAdjacentHTML('afterend',`<div class="error-msg">Both passwords must be equal<div>`)
    }
    signupdetails.map(su => {
    })
}

function signIn() {
    var signinuserValues = {};
    var username = document.querySelector('#username').value;
    var password = document.querySelector('#password').value;

    signinuserValues.username = username;
    signinuserValues.password = password;

    signinUsers.push(signinuserValues);
    localStorage.setItem('signindetails', JSON.stringify(signinUsers));
    signindetails = JSON.parse(localStorage.getItem('signindetails'));
    console.log(signindetails);
}

// localStorage.setItem('signindetails',signinUsers)

