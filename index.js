let number = document.querySelector(".number");
let hint = document.querySelector(".hint");
let goButton = document.querySelector(".go");
let result = Math.ceil(Math.random() * 10);
console.log(result);

goButton.addEventListener("click", showResult);

function showResult(e) {
  //Checking Warnings
  let gameSection = document.querySelector(".gameSection");
  if (number.value == "") {
    alert("Fields can't empty");
  } else if (Number(number.value) != number.value) {
    alert("Number must be integer value");
  } else if (number.value > 10) alert("Number Must be smaller then 11");
  //Checking Results
  else {
    gameSection.classList = " animated fadeOutRight ";
    loadResult();
    gameSection.classList = "d-none";
  }
}

let resultScreen = document.createElement("div");
let row = document.createElement("div");
let col1 = document.createElement("div");
let col2 = document.createElement("div");
let playbutton = document.createElement("button");

function loadResult() {
  //appendingChilds
  document.body.appendChild(resultScreen);
  resultScreen.appendChild(row);
  resultScreen.appendChild(playbutton);
  row.appendChild(col1);
  row.appendChild(col2);

  //class adding
  resultScreen.classList =
    "text-white animated fadeInLeft container text-center btn-lg";
  row.classList = "row";
  col1.classList = "col-lg-6 bg-dark";
  col2.classList = "col-lg-6";
  playbutton.classList = "btn btn-success block mt-4";

  //Styling
  resultScreen.style.marginTop = "80px";

  //innerHTML

  col1.innerHTML = `${result == number.value ? win() : lose()}`;

  playbutton.innerHTML = `Play Again`;
  playbutton.addEventListener("click", () => location.reload());
}
function Givehint() {
  hint.innerHTML = `<strong>Hint:</strong> Number is ${
    result % 2 == 0 ? "Even" : "Odd"
  }`;
}

Givehint();

function win() {
  col2.innerHTML = `<img src="images/win.jpeg" alt="win" class="img-fluid img-circle" >    `;
  return `<h1 class="display-4 bg-success text-center">You Win</h1> <br/> 
  
   <h1 class="display-2 bg-primary p-4 text-center" style="border-radius:100%"   >${result}</h1> <br/>
   <h1 class="display-3 bg-dark text-center">Congratulations</h1>`;
}

function lose() {
  col2.innerHTML = `<img src="images/looser.jpeg" alt="lose" class="img-fluid img-circle" >    `;
  return `<h1 class="display-4 bg-danger text-center">You Lose</h1> <br/> 
    
     <h1 class="display-2 bg-primary p-4 text-center" style="border-radius:100%"   >${result}</h1> <br/>
     <h1 class="display-3 bg-dark text-center">Oops!!!</h1>`;
}
