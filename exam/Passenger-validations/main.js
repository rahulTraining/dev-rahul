var passengers = document.querySelector('.passengers');
var body = document.documentElement;
var caret = document.querySelector('.caret');
var travellers = document.querySelector('.travellers')

passengers.addEventListener('click',function() {
    passengers.style.color = "rgb(29,106,211)";
    caret.classList.toggle('active');
    travellers.classList.toggle('active')
})

window.onclick = function(e) {
    if (e.target === body) {
        passengers.style.color = 'initial'
        caret.classList.remove('active');
        travellers.classList.remove('active')
    }
}

var input1 = document.querySelector('.input1');
var input2 = document.querySelector('.input2');
var arrow = document.querySelector('.arrow');
var arrowIcon = arrow.querySelector('span');


// first input

input1.addEventListener('mouseenter',function() {
    input1.style.cssText = `border: 1px solid #666;`;
    arrow.style.cssText = `border-bottom-color: #666;`
})
input1.addEventListener('mouseleave',function() {
    input1.style.cssText = `border: 1px solid rgba(200, 200, 200,1);`;
    arrow.style.cssText = `border-bottom-color: rgb(200, 200, 200);`
})

// second input

input2.addEventListener('mouseenter',function() {
    input2.style.cssText = `border: 1px solid #666;`;
    arrow.style.cssText = `border-top-color: #666;`
})
input2.addEventListener('mouseleave',function() {
    input2.style.cssText = `border: 1px solid rgba(200, 200, 200,1);`;
    arrow.style.cssText = `border-top-color: rgb(200, 200, 200);`
})

arrow.onclick = function() {
    if (arrowIcon.classList.contains('active')) {
        arrowIcon.classList.remove('active')
    } else {
        arrowIcon.classList.add('active')
    }

    // exchange placeholders

    if (input1.placeholder === "Where from?" ) {
        input1.placeholder = "Where to?";
    } else {
        input1.placeholder = "Where from?"
    }
     if (input2.placeholder === "Where to?") {
        input2.placeholder = "Where from?"
    } 
    else {
        input2.placeholder = "Where to?"
    }

    // exchange content

    var fromValue = input1.value
    var toValue = input2.value

    if (fromValue === input1.value || toValue === input2.value) {
        input2.value = fromValue
        input1.value = toValue
    }
    if (fromValue !=input1.value || toValue != input2.value) {
        input1.value = toValue
        input2.value = fromValue
    }
    
}
