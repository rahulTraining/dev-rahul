var forms = document.querySelectorAll('form');
var signin_up = document.querySelectorAll('small');

var Sign_up_submit = document.querySelector('.Sign-up-submit');
var Sign_in_submit = document.querySelector('.Sign-in-submit');

var fourInputs = document.querySelectorAll(`.sign-up input:not(input[type="submit"]`);
var signupLabels = document.querySelectorAll('.signUp-form label');
var nameInputs = document.querySelectorAll(`[name="name"]`);
var passInputs = document.querySelectorAll(`[name="pass"]`);

var div = document.createElement('div');
div.className = "error-msg";
div.textContent = "Please enter valid details"
var error_msg = document.querySelector('.error-msg');
fourInputs.forEach(sl => {
    sl.insertAdjacentHTML('afterend','<div class="error-msg">Please enter valid details</div>');
})
fourInputs.forEach(sl => {
    sl.nextElementSibling.style.display = "none"
})

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
        fourInputs[0].nextElementSibling.style.display = "block"
    } else {
        fourInputs[0].nextElementSibling.style.display = "none"
    }
    if (lname == "") {
        fourInputs[1].nextElementSibling.style.display = "block"
    } else {
        fourInputs[1].nextElementSibling.style.display = "none"
    }
    if (signUp_passw == "") {
        fourInputs[2].nextElementSibling.style.display = "block"
    } else {
        fourInputs[2].nextElementSibling.style.display = "none"
    }
    if (signUp_confirm_passw == "") {
        fourInputs[3].nextElementSibling.style.display = "block"
    } else {
        fourInputs[3].nextElementSibling.style.display = "none"
    }
    
    fourInputs.forEach(fi => {
        fi.addEventListener('input',function() {
            if (fi.value.length > 1) {
                fi.nextElementSibling.style.display = "none"
            } else {
                fi.nextElementSibling.style.display = "block"
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
