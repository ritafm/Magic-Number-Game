// set up magic number variable between 19-120
var magicNumber = Math.floor((Math.random() * 101) + 19);

// link magic number variable show to html
document.getElementById("num").innerHTML = magicNumber;


//set up 4 variables for the gems.  the values should be between 1 -12
var shark = Math.floor((Math.random() * 1) + 13);

var fish = Math.floor((Math.random() * 1) + 13);

var manatee = Math.floor((Math.random() * 1) + 13);

var stingray = Math.floor((Math.random() * 1) + 13);

//set up variables for total, wins, and losses
var total = 0;
var win = 0;
var lose = 0;

//link win and lose values to html
document.getElementById("wins").innerHTML = win;

document.getElementById("losses").innerHTML = lose;

//write win function gotIt
function gotIt() {
    alert ("You win!");
    win++;
    reset();    
}
//write lose function tooHigh
function tooHigh() {
    alert ("You lose!")
    lose++;
    reset();    
}
//create game reset
function reset(){
    document.getElementById("userTotal").innerHTML = '0';
    magicNumber = Math.floor((Math.random() * 101) + 19);
    document.getElementById("num").innerHTML = magicNumber;
}

//make click events for each gem that add to total and compare the total to magic number
function sharkGo() {
    userTotal = shark + total;
    console.log("new user total " + userTotal);
    document.getElementById("userTotal").innerHTML = userTotal;
}
//write if loop for wins (total = magic number)

//write else loop for losses (total > magic number)

