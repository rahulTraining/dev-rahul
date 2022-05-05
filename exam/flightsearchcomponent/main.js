var trips = document.querySelector('.trips');
var chevron = document.querySelector('.trips span')
var tripTypes = document.querySelector('.trip-types');
var ways = document.querySelectorAll('.trip-types span');
var displayWays = document.querySelector('#ways');

var passengers = document.querySelector('.passengers');
var passengerTypes = document.querySelector('.passenger-types')

var classes = document.querySelector('.classes');
var chevronClass = document.querySelector('.classes span');
var classTypes = document.querySelector('.class-types');
var classess = document.querySelectorAll('.class-types span');
var displayClasses = document.querySelector('#classes');

var bags = document.querySelector('.bags');
var bagTypes = document.querySelector('.bag-types');

var btns = document.querySelectorAll('.btns');
var types = document.querySelectorAll('.types');

var swapButton = document.querySelector('.swap-btn i');
var fromInput = document.querySelector('.from-input');
var toInput = document.querySelector('.to-input');
var fromInput = document.querySelector('.from-input');
var fromSearchField = document.querySelector('.from-search-field')

btns.forEach((b,index) => {
    b.addEventListener('click',function() {
        types.forEach(t => t.classList.remove('active'))
        types[index].classList.add('active')
    })
})

// trips

ways.forEach((w) => {
    w.addEventListener('click',function() {
        ways.forEach(bg => bg.classList.remove('activeBg'));
        w.classList.add('activeBg');
        displayWays.innerText = w.innerText;
        tripTypes.classList.remove('active');
        chevron.classList.remove('active')
    })
    ways[0].click()
})

// swap button

swapButton.onclick = function() {
    this.classList.toggle('active');

    if(fromInput.placeholder === "From?") {
        fromInput.placeholder = "To?";
    } else {
        fromInput.placeholder = "From?"
    }
    if (toInput.placeholder === "To?") {
        toInput.placeholder = "From?"
    } else {
        toInput.placeholder = "To?"
    }

    var fromValue = fromInput.value;
    var toValue = toInput.value;

    if(fromInput.value === fromValue || toInput.value === toValue) {
        fromInput.value = toValue;
        toInput.value = fromValue
    }

}
// passengers



// classes

classess.forEach((w) => {
    w.addEventListener('click',function() {
        classess.forEach(bg => bg.classList.remove('activeBg'));
        w.classList.add('activeBg');
        displayClasses.innerText = w.innerText;
        classTypes.classList.remove('active');
        chevronClass.classList.remove('active')
    })
    classess[0].click()
})

// bags



// input search focus

fromInput.onfocus = function() {
    fromSearchField.classList.add('active')
}


// window click function
window.onclick = function(e) {
    if (e.target === document.documentElement) {
        classTypes.classList.remove('active')
        chevronClass.classList.remove('active')
        tripTypes.classList.remove('active')
        chevron.classList.remove('active')
        passengerTypes.classList.remove('active')
        bagTypes.classList.remove('active')
    }
}