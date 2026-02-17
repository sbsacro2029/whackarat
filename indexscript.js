var s = 0;
var boxes = document.querySelectorAll(".box");
var timer;

window.add = function() {
  if (this.classList.contains("up")) {
    s++;
    document.getElementById("s").innerHTML = s;
    this.classList.remove("up");
  }
}

for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", add);
}

function pop() {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].classList.remove("up");
  } //checks all boxes and removes 'up' class if they have it

  var r = Math.floor(Math.random() * boxes.length);
  boxes[r].classList.add("up");
} //gives one random box the 'up' class

function popHarder() {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].classList.remove("up");
  } //checks all boxes and removes 'up' class if they have it

  var r = Math.floor(Math.random() * boxes.length);
  var q = Math.floor(Math.random() * boxes.length);
  while (q==r) {
    var q = Math.floor(Math.random() * boxes.length);
  }
  
  boxes[r].classList.add("up");
  boxes[q].classList.add("up");
} //gives two random box the 'up' class

function popHardest() {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].classList.remove("up");
  } //checks all boxes and removes 'up' class if they have it

  var r = Math.floor(Math.random() * boxes.length);
  var q = Math.floor(Math.random() * boxes.length);
  var p = Math.floor(Math.random() * boxes.length);
  while (q==r) {
    var q = Math.floor(Math.random() * boxes.length);
  }
  while (p==r || p==q) {
    var p = Math.floor(Math.random() * boxes.length);
  }
  
  boxes[r].classList.add("up");
  boxes[q].classList.add("up");
  boxes[p].classList.add("up");
} //gives three random box the 'up' class

function decreaseTimer() {
  timer--;
  document.getElementById('time').innerHTML = timer;
}
function startGame() {
  timer=60;
  s=0;
  document.getElementById("s").innerHTML = s;
  document.getElementById('time').innerHTML = timer;
  const startTimer = setInterval(decreaseTimer, 1000);
  document.getElementById('button').innerHTML ="";
  setTimeout(() => {
    clearInterval(startTimer);
    document.getElementById('button').innerHTML ='<button class="start" onclick="startGame()"><h2>Click me to play again!</h2></button>';
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].classList.remove("up");
    }
  }, 60000);
  waveOne();
}



function waveOne() {
  const waveone = setInterval(pop, 2000);
  setTimeout(() => {
    clearInterval(waveone);
    waveTwo();
  }, 10000);
}

function waveTwo() {
  const wavetwo = setInterval(pop, 1500);
  setTimeout(() => {
    clearInterval(wavetwo);
    waveThree();
  }, 10000);
}

function waveThree() {
  const wavethree = setInterval(popHarder, 1500);
  setTimeout(() => {
    clearInterval(wavethree);
    waveFour();
  }, 10000);
}

function waveFour() {
  const wavefour = setInterval(popHarder, 1250);
  setTimeout(() => {
    clearInterval(wavefour);
    waveFive();
  }, 10000);
}

function waveFive() {
  const wavefive = setInterval(popHardest, 1250);
  setTimeout(() => {
    clearInterval(wavefive);
    waveSix();
  }, 10000);
}

function waveSix() {
  const wavesix = setInterval(popHardest, 1000);
  setTimeout(() => {
    clearInterval(wavesix);
  }, 10000);
}