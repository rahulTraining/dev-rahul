var form1 = document.querySelector(".form1")
var form2 = document.querySelector(".form2")

let randomNo1 = Math.random();
let randomNo2 = Math.random();

// let percentage = Math.floor((randomNo1/50) * 100);
// let percentage = Math.floor(100 * randomNo1 / randomNo2 - 10);

function generateRandom(maxLimit = 100) {
    let rand = Math.random() * maxLimit;
    rand = Math.floor(rand);
    return rand;
}
var randomNo = generateRandom(100);
console.log(randomNo <= 50,randomNo,'gegee');

if (randomNo < 50) {
    console.log("below 50");
    form1.className = "block"
    if (form1.classList.contains("block")) {
        var star1 = document.querySelectorAll(".star1")
        forms(star1)
        console.log('true1');
    }
}
if  (randomNo > 50) {
    console.log("above 50");
    form2.className = "block"
    if (form2.classList.contains("block")) {
        var star2 = document.querySelectorAll(".star2")
        forms(star2)
        console.log('true2');
    }
}

// if (form1.classList.contains("block")) {
//     var star1 = document.querySelectorAll(".star1")
//     forms(star1)
//     console.log('true1');
// }

// if (form2.classList.contains("block")) {
//     var star2 = document.querySelectorAll(".star2")
//     forms(star2)
//     console.log('true2');
// }

function forms(ss) {
    var clicked = 0;
    ss.forEach(function (s, i) {
        s.addEventListener('click', function () {
            if (i === 0) {
                console.log('true');
                ss.forEach(function (s) { s.className = "star" })
                ss[0].classList.add('red');
                clicked = 1;
            }
            if (i === 1) {
                ss.forEach(function (s) { s.className = "star" })
                ss[0].classList.add("red");
                ss[1].classList.add("red");

                clicked = 2;
            }
            if (i === 2) {
                ss.forEach(function (s) { s.className = "star" })
                ss[0].classList.add("orange")
                ss[1].classList.add("orange")
                ss[2].classList.add("orange")

                clicked = 3
            }
            if (i === 3) {
                ss.forEach(function (s) { s.className = "star" })
                ss[0].classList.add("green")
                ss[1].classList.add("green")
                ss[2].classList.add("green")
                ss[3].classList.add("green")

                clicked = 4
            }
            if (i === 4) {
                ss.forEach(function (s) { s.classList.add("green") })
                clicked = 5
            }
            console.log(clicked);
        })
        s.addEventListener('mouseenter', function () {
            if (i === 0) {
                ss.forEach(function (s) { s.className = "star" })
                ss[0].classList.add('red')

            }
            if (i === 1) {
                ss.forEach(function (s) { s.className = "star" })
                ss[0].classList.add("red");
                ss[1].classList.add("red")
            }
            if (i === 2) {
                ss.forEach(function (s) { s.className = "star" })
                ss[0].classList.add("orange")
                ss[1].classList.add("orange")
                ss[2].classList.add("orange")
            }
            if (i === 3) {
                ss.forEach(function (s) { s.className = "star" })
                ss[0].classList.add("green")
                ss[1].classList.add("green")
                ss[2].classList.add("green")
                ss[3].classList.add("green")
            }
            if (i === 4) {
                ss.forEach(function (s) { s.className = "green star" })
            }
        })
        s.addEventListener('mouseleave', function () {
            if (i === 0) {
                ss[0].className = "star gray"

                if (clicked === 1) {
                    ss[0].className = "star red"
                }
                if (clicked === 2) {
                    ss[0].className = "star red"
                    ss[1].className = "star red"
                }
                if (clicked === 3) {
                    ss[0].className = "star orange"
                    ss[1].className = "star orange"
                    ss[2].className = "star orange"
                }
                if (clicked === 4) {
                    ss[0].className = "star green"
                    ss[1].className = "star green"
                    ss[2].className = "star green"
                    ss[3].className = "star green"
                }
                if (clicked === 5) {
                    ss.forEach(function (s) { s.className = "star green" })
                }
            }
            if (i === 1) {
                ss[0].className = "star gray"
                ss[1].className = "star gray"

                if (clicked === 1) {
                    ss[0].className = "star red"
                }
                if (clicked === 2) {
                    ss[0].className = "star red"
                    ss[1].className = "star red"
                }
                if (clicked === 3) {
                    ss[0].className = "star orange"
                    ss[1].className = "star orange"
                    ss[2].className = "star orange"
                }
                if (clicked === 4) {
                    ss[0].className = "star green"
                    ss[1].className = "star green"
                    ss[2].className = "star green"
                    ss[3].className = "star green"
                }
                if (clicked === 5) {
                    ss.forEach(function (s) { s.className = "star green" })
                }
            }
            if (i === 2) {
                ss[0].className = "star gray"
                ss[1].className = "star gray"
                ss[2].className = "star gray"

                if (clicked === 1) {
                    ss[0].className = "star red"
                }
                if (clicked === 2) {
                    ss[0].className = "star red"
                    ss[1].className = "star red"
                }
                if (clicked === 3) {
                    ss[0].className = "star orange"
                    ss[1].className = "star orange"
                    ss[2].className = "star orange"
                }
                if (clicked === 4) {
                    ss[0].className = "star green"
                    ss[1].className = "star green"
                    ss[2].className = "star green"
                    ss[3].className = "star green"
                }
                if (clicked === 5) {
                    ss.forEach(function (s) { s.className = "star green" })
                }
            }
            if (i === 3) {
                ss[0].className = "star gray"
                ss[1].className = "star gray"
                ss[2].className = "star gray"
                ss[3].className = "star gray"

                if (clicked === 1) {
                    ss[0].className = "star red"
                }
                if (clicked === 2) {
                    ss[0].className = "star red"
                    ss[1].className = "star red"
                }
                if (clicked === 3) {
                    ss[0].className = "star orange"
                    ss[1].className = "star orange"
                    ss[2].className = "star orange"
                }
                if (clicked === 4) {
                    ss[0].className = "star green"
                    ss[1].className = "star green"
                    ss[2].className = "star green"
                    ss[3].className = "star green"
                }
                if (clicked === 5) {
                    ss.forEach(function (s) { s.className = "star green" })
                }
            }
            if (i === 4) {
                ss.forEach(function (s) { s.className = "star gray" })

                if (clicked === 1) {
                    ss[0].className = "star red"
                }
                if (clicked === 2) {
                    ss[0].className = "star red"
                    ss[1].className = "star red"
                }
                if (clicked === 3) {
                    ss[0].className = "star orange"
                    ss[1].className = "star orange"
                    ss[2].className = "star orange"
                }
                if (clicked === 4) {
                    ss[0].className = "star green"
                    ss[1].className = "star green"
                    ss[2].className = "star green"
                    ss[3].className = "star green"
                }
                if (clicked === 5) {
                    ss.forEach(function (s) { s.className = "star green" })
                }
            }
        })
    })
}