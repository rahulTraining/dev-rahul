var stars = document.querySelectorAll(".star");
var clicked = 0;
stars.forEach(function(s,i){
    s.addEventListener('click',function(){
        if(i === 0) {
            stars.forEach(function(s){s.className = "star"})
            stars[0].classList.add('red');
            clicked = 1;
        }
        if (i === 1) {
            stars.forEach(function(s){s.className = "star"})
            stars[0].classList.add("red");
            stars[1].classList.add("red");

            clicked = 2;
        }
        if (i === 2) {
            stars.forEach(function(s){s.className = "star"})
            stars[0].classList.add("orange")
            stars[1].classList.add("orange")
            stars[2].classList.add("orange")

            clicked = 3
        }
        if (i === 3) {
            stars.forEach(function(s){s.className = "star"})
            stars[0].classList.add("green")
            stars[1].classList.add("green")
            stars[2].classList.add("green")
            stars[3].classList.add("green")

            clicked = 4
        }
        if (i === 4) {
            stars.forEach(function(s){s.classList.add("green")})
            clicked = 5
        }
        console.log(clicked);
    })
    s.addEventListener('mouseenter',function(){
        if(i === 0) {
            stars.forEach(function(s){s.className = "star"})
            stars[0].classList.add('red')

        }
        if (i === 1) {
            stars.forEach(function(s){s.className = "star"})
            stars[0].classList.add("red");
            stars[1].classList.add("red")
        }
        if (i === 2) {
            stars.forEach(function(s){s.className = "star"})
            stars[0].classList.add("orange")
            stars[1].classList.add("orange")
            stars[2].classList.add("orange")
        }
        if (i === 3) {
            stars.forEach(function(s){s.className = "star"})
            stars[0].classList.add("green")
            stars[1].classList.add("green")
            stars[2].classList.add("green")
            stars[3].classList.add("green")
        }
        if (i === 4) {
            stars.forEach(function(s){s.className = "green star"})
        }
    })
    s.addEventListener('mouseleave',function(){
        if(i === 0) {
            stars[0].className = "star gray"

            if (clicked === 1) {
                stars[0].className = "star red"
            }
            if (clicked === 2) {
                stars[0].className = "star red"
                stars[1].className = "star red"
            }
            if (clicked === 3) {
                stars[0].className = "star orange"
                stars[1].className = "star orange"
                stars[2].className = "star orange"
            }
            if(clicked === 4) {
                stars[0].className = "star green"
                stars[1].className = "star green"
                stars[2].className = "star green"
                stars[3].className = "star green"
            }
            if(clicked === 5) {
                stars.forEach(function(s){s.className = "star green"})
            }
        } 
        if (i === 1) {
            stars[0].className = "star gray"
            stars[1].className = "star gray"

            if (clicked === 1) {
                stars[0].className = "star red"
            }
            if (clicked === 2) {
                stars[0].className = "star red"
                stars[1].className = "star red"
            }
            if (clicked === 3) {
                stars[0].className = "star orange"
                stars[1].className = "star orange"
                stars[2].className = "star orange"
            }
            if(clicked === 4) {
                stars[0].className = "star green"
                stars[1].className = "star green"
                stars[2].className = "star green"
                stars[3].className = "star green"
            }
            if(clicked === 5) {
                stars.forEach(function(s){s.className = "star green"})
            }
        }
        if (i === 2) {
            stars[0].className = "star gray"
            stars[1].className = "star gray"
            stars[2].className = "star gray"

            if (clicked === 1) {
                stars[0].className = "star red"
            }
            if (clicked === 2) {
                stars[0].className = "star red"
                stars[1].className = "star red"
            }
            if (clicked === 3) {
                stars[0].className = "star orange"
                stars[1].className = "star orange"
                stars[2].className = "star orange"
            }
            if(clicked === 4) {
                stars[0].className = "star green"
                stars[1].className = "star green"
                stars[2].className = "star green"
                stars[3].className = "star green"
            }
            if(clicked === 5) {
                stars.forEach(function(s){s.className = "star green"})
            }
        }
        if (i === 3) {
            stars[0].className = "star gray"
            stars[1].className = "star gray"
            stars[2].className = "star gray"
            stars[3].className = "star gray"

            if (clicked === 1) {
                stars[0].className = "star red"
            }
            if (clicked === 2) {
                stars[0].className = "star red"
                stars[1].className = "star red"
            }
            if (clicked === 3) {
                stars[0].className = "star orange"
                stars[1].className = "star orange"
                stars[2].className = "star orange"
            }
            if(clicked === 4) {
                stars[0].className = "star green"
                stars[1].className = "star green"
                stars[2].className = "star green"
                stars[3].className = "star green"
            }
            if(clicked === 5) {
                stars.forEach(function(s){s.className = "star green"})
            }
        }
        if (i === 4) {
            stars.forEach(function(s){s.className = "star gray"})

            if (clicked === 1) {
                stars[0].className = "star red"
            }
            if (clicked === 2) {
                stars[0].className = "star red"
                stars[1].className = "star red"
            }
            if (clicked === 3) {
                stars[0].className = "star orange"
                stars[1].className = "star orange"
                stars[2].className = "star orange"
            }
            if(clicked === 4) {
                stars[0].className = "star green"
                stars[1].className = "star green"
                stars[2].className = "star green"
                stars[3].className = "star green"
            }
            if(clicked === 5) {
                stars.forEach(function(s){s.className = "star green"})
            }
        }
    })
})