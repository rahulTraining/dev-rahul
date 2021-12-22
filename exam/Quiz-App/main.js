var b = document.querySelector('b');
var q = document.querySelector('h1');
var opt1 = document.querySelector('.option1')
var opt2 = document.querySelector('.option2')
var opt3 = document.querySelector('.option3')
var opt4 = document.querySelector('.option4')

var prv = document.querySelector('.prev');
var nxt = document.querySelector('.next');
var container = document.querySelector('.container')
var score = document.querySelector('.score')
// score.style.display="none"

var input = document.querySelectorAll('input');
var currentTab = 0;
var count = 0;
var ans = 1;
var localData = JSON.parse(localStorage.getItem("rahul"));
// console.log('localData:::',localData);
var array = []

fetch('data.json').then(res => { let data = res.json(); return data }).then(data => {
    // console.log('data:::', data);
    window.localStorage.setItem("rahul", JSON.stringify(data));
    b.innerText = data[0].qno;
    q.innerText = data[0].question;
    opt1.innerText = data[0].a;
    opt2.innerText = data[0].b;
    opt3.innerText = data[0].c;
    opt4.innerText = data[0].d;
}).catch(err => console.error('somwthing is fishy in json file'))

showTab(currentTab)
function showTab(n) {
    if (n == 0) {
        document.querySelector('.prev').style.display = "none"
    } else if (n > 0) {
        document.querySelector('.prev').style.display = "inline-block"
    }

    if (n == 4) {
        document.querySelector('.next').style.display = "none"
        // score.style.display="block"
        // result()
    }
    else if (n < 5) {
        document.querySelector('.next').style.display = "inline-block"
    }
}

function checkAns() {
    input.forEach(c => {
        c.addEventListener('click', function (e) {
            if (c.checked) {
                var clicked = e.target.nextElementSibling.innerText
                console.log(clicked)
                var output = clicked === localData[count].ans
                console.log(output)
                if (output) {
                    document.querySelector('.score span').innerText = ans
                }
            }
        },{ once: true })
    })
}
checkAns()
function next() {
    currentTab++;
    showTab(currentTab)
    count++;
    ans++
    b.innerText = localData[count].qno;
    q.innerText = localData[count].question;
    opt1.innerText = localData[count].a;
    opt2.innerText = localData[count].b;
    opt3.innerText = localData[count].c;
    opt4.innerText = localData[count].d;
    // input.forEach(c => c.checked = false)
    checkAns()
}


function Prev() {
    count--;
    currentTab--;
    showTab(currentTab)
    ans--
    b.innerText = localData[count].qno;
    q.innerText = localData[count].question;
    opt1.innerText = localData[count].a;
    opt2.innerText = localData[count].b;
    opt3.innerText = localData[count].c;
    opt4.innerText = localData[count].d;
    // input.forEach(c => c.pointerEvents ="none")
}
function result() {
    score.style.display = "grid"
}
document.querySelector('.score .percentage').onclick = function () {
    this.innerHTML = ans / localData.length * 100 + '%'
}
// input.forEach(c =>{
//     c.onclick=function(e){
//         // console.log(e)
//         var clicked = e.target.nextSibling.nextSibling.innerText
//         console.log(clicked)
//         // var label = document.querySelectorAll('label');

//         var input = clicked == localData[count].ans
//         console.log(input)
//         if(input){
//             document.querySelector('.score span').innerText=++ans
//         }
//     }
// })

// input.forEach(c => {
//     c.addEventListener('click', function (e) {
//         var clicked = e.target.nextElementSibling.innerText
//         console.log(clicked)
//         var output = clicked === localData[count].ans
//         console.log(output)
//         if (output) {
//             ans++
//             document.querySelector('.score span').innerText = ans
//         }
//     }, { once: true })
// })