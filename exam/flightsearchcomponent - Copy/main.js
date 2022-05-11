var trips = document.querySelector('.trips');
var chevron = document.querySelector('.trips span')
var tripTypes = document.querySelector('.trip-types');
var ways = document.querySelectorAll('.trip-types span');
var displayWays = document.querySelector('#ways');
var typeofClass = document.querySelector('.travelingModes .type-of-class');
var typesofBags = document.querySelector('.travelingModes .types-of-bags')
var searchComponent = document.querySelectorAll('.search_component');
var multicitydiv = document.querySelector('.multi_city > *:first-child')
var multi_citycomponent = document.querySelector('.multi-city')

var passengers = document.querySelector('.passengers');
var passengerTypes = document.querySelector('.passenger-types')

var classes = document.querySelector('.classes');
var chevronClass = document.querySelector('.classes span');
var classTypes = document.querySelector('.class-types');
var classess = document.querySelectorAll('.travelingModes .class-types span');

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

var clone_economy = document.querySelector('#clone .classes');
var clone_economyclasses = document.querySelector('#clone .class-types');
var clone_economyclassesHeading = document.querySelector('#clone #classes');
var clone_economyclassesSpans = document.querySelectorAll('#clone .class-types span');

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
    ways[2].click();
    ways[2].addEventListener('click', function () {
        typeofClass.style.display = "none";
        typesofBags.style.display = "none"
    });
    ways[0].addEventListener('click', function () {
        typeofClass.style.display = "block";
        typesofBags.style.display = "block"
    });
    ways[1].addEventListener('click', function () {
        typeofClass.style.display = "block";
        typesofBags.style.display = "block"
    });
    ways[3].addEventListener('click', function () {
        typeofClass.style.display = "block";
        typesofBags.style.display = "block"
    });
})

// multi-city economy

clone_economy.onclick = function () {
    clone_economyclasses.classList.add('active');
}
clone_economyclassesSpans.forEach((cecs, index) => {
    cecs.onclick = function () {
        clone_economyclassesSpans.forEach(ces => ces.classList.remove('activeBg'))
        clone_economyclassesSpans[index].classList.add('activeBg');
        clone_economyclassesHeading.innerText = clone_economyclassesSpans[index].innerText
        clone_economyclasses.classList.remove('active');
    }
    clone_economyclassesSpans[0].click();
});

// clone and add flight

function clone() {
    var cloneSearchcomponent = multi_citycomponent.cloneNode(true);
    var date = cloneSearchcomponent.lastElementChild
    var x = document.createElement('div');
    var txt = document.createTextNode("\u00D7");
    x.className = "delete";
    cloneSearchcomponent.setAttribute('id', 'cloned')
    x.appendChild(txt);
    date.appendChild(x);
    multicitydiv.appendChild(cloneSearchcomponent);
    var delete_x = document.querySelectorAll('.delete');
    var economy = document.querySelectorAll('#cloned .classes');
    var economyclasses = document.querySelectorAll('#cloned .class-types');
    var economyclassesHeading = document.querySelectorAll('#cloned #classes');
    var economyclassesSpans = document.querySelectorAll('#cloned .class-types span');

    economy.forEach((e, index) => {
        e.onclick = function () {
            economyclasses.forEach(ec => ec.classList.remove('active'))
            economyclasses[index].classList.add('active');
        }
    })
    economyclassesSpans.forEach((ecs, index) => {
        ecs.onclick = function () {
            economyclassesSpans.forEach(ecs => ecs.classList.remove('activeBg'))
            ecs.classList.add('activeBg');
            economyclasses.forEach(ec => ec.classList.remove('active'))
            economyclassesHeading.forEach(ech => {
                economyclassesHeading[0].innerText = ecs.innerText
            })
        }
    })

    delete_x.forEach((d, index) => {
        d.onclick = function () {
            // clone_component[index].style.display = 'none';
            this.parentElement.parentElement.remove()
            addFlight.style.transform = "scale(1)"
        }
    });
    if (delete_x.length == 5) {
        addFlight.style.transform = "scale(0)"
    }
}
clone()

addFlight.onclick = function () {
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
        clone_economyclasses.classList.remove('active')
    }
}