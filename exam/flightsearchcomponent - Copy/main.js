var trips = document.querySelector('.trips');
var chevron = document.querySelector('.trips span')
var tripTypes = document.querySelector('.trip-types');
var ways = document.querySelectorAll('.trip-types span');
var displayWays = document.querySelector('#ways');
var searchComponent = document.querySelectorAll('.search_component');
var multicitydiv = document.querySelector('.multi_city > *:first-child')
var multi_citycomponent = document.querySelector('.multi-city')

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

var swapButton = document.querySelectorAll('.swap-btn');

var focusInput = document.querySelectorAll('.focus-input')
var fromInput = document.querySelectorAll('.from-input');
var toInput = document.querySelectorAll('.to-input');
var fromfieldInput = document.querySelectorAll('.search-field input');

var searchField = document.querySelectorAll('.search-field');

var searchfieldfromInput = document.querySelectorAll('.from-div .search-field input');
var searchfieldtoInput = document.querySelectorAll('.to-div .search-field input');

var signIn = document.querySelector('.from-div .search-field .fa-userr');
var wheretoGo = document.querySelector('.to-div .search-field .bi-globee');
var bixlg = document.querySelectorAll('.bi-x');

var addFlight = document.querySelector('.addsearchdiv >*:first-child')

var searchBtn = document.querySelector('.search-div');

var count = 0;

btns.forEach((b, index) => {
    b.addEventListener('click', function () {
        types.forEach(t => t.classList.remove('active'))
        types[index].classList.add('active')
    })
})

// trips

ways.forEach((w, index) => {
    w.addEventListener('click', function () {
        ways.forEach(bg => bg.classList.remove('activeBg'));
        w.classList.add('activeBg');
        displayWays.innerText = w.innerText;
        tripTypes.classList.remove('active');
        searchComponent.forEach(s => s.classList.remove('active'));
        searchComponent[index].classList.add('active')
        chevron.classList.remove('active');
    })
    ways[2].click()
})

function clone() {
    var cloneSearchcomponent = multi_citycomponent.cloneNode(true);
    var date = cloneSearchcomponent.lastElementChild
    var x = document.createElement('div');
    var txt = document.createTextNode("\u00D7");
    x.className = "delete";
    cloneSearchcomponent.setAttribute('id','clone')
    x.appendChild(txt);
    date.appendChild(x);
    multicitydiv.appendChild(cloneSearchcomponent);
    var delete_x = document.querySelectorAll('.delete');
    const clone_component = document.querySelectorAll('#clone')

    delete_x.forEach((d,index) => {
        d.onclick = function() {
            clone_component[index].style.display = 'none'
        }
    });
    console.log(':::length',delete_x.length);
}
clone()

// delete btn length base

addFlight.onclick = function() {
    clone()
}

// input search focus

focusInput.forEach((f, index) => {
    f.addEventListener('focus', function () {
        searchField.forEach(ff => ff.classList.remove('active'))
        searchField[index].classList.add('active');
        fromfieldInput[index].focus()
    })
})
bixlg.forEach((x, index) => {
    x.onclick = function () {
        searchField.forEach(ff => ff.classList.remove('active'))
        searchField[index].classList.remove('active')
    }
})
fromfieldInput.forEach((i, index) => {
    i.addEventListener('change', function () {
        focusInput[index].value = this.value
    })
})

// swap button

swapButton.forEach((btn, index) => {
    btn.onclick = function () {
        this.firstElementChild.classList.toggle('active');

        var fromValue = window.sessionStorage.getItem('fromvalue');
        var toValue = window.sessionStorage.getItem('tovalue');

        fromInput.forEach(p => {
            if (p.placeholder === "From?") {
                p.placeholder = "To?"
            } else {
                p.placeholder = "From?"
            }
            window.sessionStorage.setItem('fromvalue', p.value)
            if (p.value === fromValue) {
                p.value = toValue
            }
        })
        toInput.forEach(t => {
            if (t.placeholder === "To?") {
                t.placeholder = "From?"
            } else {
                t.placeholder = "To?"
            }
            window.sessionStorage.setItem('tovalue', t.value);
            if (t.value === toValue) {
                t.value = fromValue
            }
        })

        var searchfieldfromValue = window.sessionStorage.getItem('searchfieldfromValue')
        var searchfieldtoValue = window.sessionStorage.getItem('searchfieldtoValue')

        searchfieldfromInput.forEach(sf => {
            if (sf.placeholder === "From?") {
                sf.placeholder = "To?"
            } else {
                sf.placeholder = "From?"
            }
            window.sessionStorage.setItem('searchfieldfromValue', sf.value);
            if (sf.value === searchfieldfromValue) {
                sf.value = searchfieldtoValue
            }
        })
        searchfieldtoInput.forEach(st => {
            if (st.placeholder === "To?") {
                st.placeholder = "From?"
            } else {
                st.placeholder = "To?"
            }
            window.sessionStorage.setItem('searchfieldtoValue', st.value);
            if (st.value === searchfieldtoValue) {
                st.value = searchfieldfromValue
            }
        })

    }
})

// passengers



// classes

classess.forEach((w) => {
    w.addEventListener('click', function () {
        classess.forEach(bg => bg.classList.remove('activeBg'));
        w.classList.add('activeBg');
        displayClasses.innerText = w.innerText;
        classTypes.classList.remove('active');
        chevronClass.classList.remove('active')
    })
    classess[0].click()
})

// bags


// window click function
window.onclick = function (e) {
    if (e.target === document.documentElement) {
        classTypes.classList.remove('active')
        chevronClass.classList.remove('active')
        tripTypes.classList.remove('active')
        chevron.classList.remove('active')
        passengerTypes.classList.remove('active')
        bagTypes.classList.remove('active')
        searchField.forEach(ff => ff.classList.remove('active'))
    }
}