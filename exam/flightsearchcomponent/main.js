var trips = document.querySelector('.trips');
var chevron = document.querySelector('.trips span')
var tripTypes = document.querySelector('.trip-types');
var ways = document.querySelectorAll('.trip-types span');
var displayWays = document.querySelector('#ways');

var classes = document.querySelector('.classes');
var chevronClass = document.querySelector('.classes span');
var classTypes = document.querySelector('.class-types');
var classess = document.querySelectorAll('.class-types span');
var displayClasses = document.querySelector('#classes');


trips.onclick = function() {
    tripTypes.classList.add('active');
    chevron.classList.add('active');
    classTypes.classList.remove('active');
    chevronClass.classList.remove('active')
}

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

// classes

classes.onclick = function() {
    classTypes.classList.add('active');
    chevronClass.classList.add('active');
    tripTypes.classList.remove('active');
    chevron.classList.remove('active');
}
window.onclick = function(e) {
    if (e.target === document.documentElement) {
        classTypes.classList.remove('active')
        chevronClass.classList.remove('active')
        tripTypes.classList.remove('active')
        chevron.classList.remove('active')
    }
}
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