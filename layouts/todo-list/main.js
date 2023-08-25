// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// creating new data

function newdata() {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    var inputData1 = document.querySelector("#inputData1").value
    var inputData2 = document.querySelector("#inputData2").value
    var inputData3 = document.querySelector("#inputData3").value
    var inputData4 = document.querySelector("#inputData4").value

    if (inputData1 == '' || inputData2 == '' || inputData3 == '' || inputData4 == '') {
      console.log('empty');
    }
    td1.innerText = inputData1
    td2.innerText = inputData2
    td3.innerText = inputData3
    td4.innerText = inputData4
    
    document.querySelector("#myTable").appendChild(tr);
    modal.style.display = "none";
}

// var inputData = document.querySelectorAll('#inputData');
// inputData.forEach((inp,i)=>{
//     inp.addEventListener('change',function() {
        
//     })
// })

