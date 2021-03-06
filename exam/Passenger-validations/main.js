var passengers = document.querySelector('.passengers');
var cancel = document.querySelector('.confirm >*:first-child')
var body = document.documentElement;
var caret = document.querySelector('.caret');
var travellers = document.querySelector('.travellers');
var submit = document.querySelector('#submit');
var total = 0;

passengers.addEventListener('click',function() {
    passengers.style.color = "rgb(29,106,211)";
    caret.classList.toggle('active');
    travellers.classList.toggle('active')
})

cancel.addEventListener('click',function() {
    travellers.classList.remove('active');
    caret.classList.remove('active');
    passengers.style.color = 'initial'
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

// toggle

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

// validations

// adult

var adultDecrement = document.querySelector('#adultDecrement');
var adultIncrement  = document.querySelector('#adultIncrement');
var adultCount = document.querySelector('#adultCount');
var adultText = document.querySelector('.increment.adults p');
var confirmDiv = document.querySelector('.confirm');
// var alertMsg = document.querySelector('.alert')

adultDecrement.style.cssText = `background-color:rgb(231,232,232);color:rgb(177,178,179);pointer-events:none`;

var count = 0;
var countAdult = 1;
adultIncrement.onclick = function() {
    countAdult ++;
    total = countAdult
    adultCount.textContent = countAdult;
    if (countAdult > 1) {
        adultDecrement.style.cssText = `background-color: rgb(232,240,254);color: rgb(60,126,217);pointer-events:auto`;
        confirmDiv.style.cssText = `justify-content: end;`
        confirmDiv.innerHTML = `<div role="button">Cancel</div>
        <div role="button">Done</div>`
        adultText.style.cssText = `color: hsl(0, 0%, 50%);`
    }
    if (countAdult === 9) {
        adultIncrement.style.cssText = `background-color:rgb(231,232,232);color:rgb(177,178,179);pointer-events:none`
    }
    //  getValue()
}

adultDecrement.onclick = function() {
    countAdult--;
    total = countAdult
    adultCount.textContent = countAdult;
   
    if (countAdult < 9) {
        adultIncrement.style.cssText = `background-color: rgb(232,240,254);color: rgb(60,126,217);;pointer-events:auto`;
    }
    if (countAdult === 1) {
        adultDecrement.style.cssText = `background-color:rgb(231,232,232);color:rgb(177,178,179);pointer-events:none`;
        confirmDiv.style.cssText = `justify-content: start;`
        confirmDiv.innerHTML = `<div style="font-size:0.7rem;;color:red;margin:0;padding:0;">
                                    <i class="bi bi-exclamation-octagon-fill" style="margin-right:6px"></i>
                                    must have at least one traveller
                                </div>`
        adultText.style.cssText = `color:red`
    }
    // getValue()
}

// children

var childrenDecrement = document.querySelector('#childrenDecrement');
var childrenIncrement  = document.querySelector('#childrenIncrement');
var childrenCount = document.querySelector('#childrenCount');
var childrenTextP = document.querySelector('.increment.children >*:first-child p');
var childrenTextsmall = document.querySelector('.increment.children >*:first-child small');

childrenIncrement.addEventListener('click',function() {
    adultText.style.cssText = `color: hsl(0, 0%, 50%);`
    confirmDiv.style.cssText = `justify-content: end;`
        confirmDiv.innerHTML = `<div role="button">Cancel</div>
        <div role="button">Done</div>`
    count++;
    total = count
    childrenCount.textContent = count;

    if (count === 7) {
        childrenIncrement.classList.add('disable');
        confirmDiv.innerHTML = `<div style="font-size:0.7rem;;color:red;margin:0;padding:0;">
                                    Searches cannot have more than 7 children
                                </div>`;
        childrenTextP.style.cssText = `color:red`
        childrenTextsmall.style.cssText = `color:red`
    }
    if (count >= 1) {
        childrenDecrement.classList.remove('disable');
    }
    // getValue()
})

childrenDecrement.addEventListener('click',function() {
    count--;
    total = count
    childrenCount.textContent = count;

    if (count == 0) {
        childrenDecrement.classList.add('disable');
    }
    if (count < 7) {
        childrenTextP.style.cssText = `color: hsl(0, 0%, 50%);`
        childrenTextsmall.style.cssText = `color: hsl(0, 0%, 50%);`
        childrenIncrement.classList.remove('disable');
        childrenIncrement.classList.add('enable');
        confirmDiv.style.cssText = `justify-content: end;`
        confirmDiv.innerHTML = `<div role="button">Cancel</div>
        <div role="button">Done</div>`
    }
    //  getValue()
})

// sum  of all the values

function getValue() {
    var allInputs = document.querySelectorAll('.inputValue');
    

    // total += (adultCount.innerText + childrenCount);
    var totalCount = document.querySelector('.count');
    totalCount.innerText = total
    // for (var i=1;i<=allInputs.length;i++) {
    //     if (parseInt(allInputs[i].innerText)) {
    //         total += parsInt(allInputs[i].innerText)
    //         console.log(total);
    //     }
    // }
    // var totalCount = document.querySelector('.count');
    // totalCount.innerText = total
    // console.log(total);
}

submit.onclick = function() {
    getValue()
}
