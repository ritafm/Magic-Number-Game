$(document).ready(function(){
// set up magic number variable between 19-120
var magicNumber = Math.floor((Math.random() * 101) + 19);

// link magic number variable show to html
$('#num').html(magicNumber);


//set up 4 variables for the gems.  the values should be between 1 -12
var shark = Math.floor((Math.random() * 11 + 1));

var fish = Math.floor((Math.random() * 11 + 1));

var manatee = Math.floor((Math.random() * 11 + 1));

var stingray = Math.floor((Math.random() * 11 + 1));

//set up variables for total, wins, and losses
var total = 0;
var win = 0;
var lose = 0;

//link win and lose values to html
$('#wins').html(win);

$('#losses').html(lose);

//write win function gotIt
function gotIt() {
    alert ("You won!");
    win++;
    $('#wins').text(win);
    reset();
    
}
    
//write lose function tooHigh
function tooHigh() {
    alert ("You lost");
    lose++;
    $('#losses').text(lose);
    reset();

    
}
//create game reset
function reset() {
    document.getElementById("userTotal").innerHTML = 0;
    magicNumber = Math.floor((Math.random() * 101) + 19);
    document.getElementById("num").innerHTML = magicNumber;
    shark = Math.floor((Math.random() * 11 + 1));
    fish = Math.floor((Math.random() * 11 + 1));
    manatee = Math.floor((Math.random() * 11 + 1));
    stingray = Math.floor((Math.random() * 11 + 1));
    userTotal = 0
    total = 0
}

//make click events for each gem that add to total and compare the total to magic number

    $("#sharkPic").on('click' , function () {
        total = total + shark;
        console.log("new user total " + total);
        $('#userTotal').text(total);
        if (total === magicNumber) {gotIt()    
        }else if (total > magicNumber) {tooHigh()
        }
    });

    $("#fishPic").on('click' , function () {
        total = total + fish;
        console.log("new user total " + total);
        $('#userTotal').text(total);
        if (total === magicNumber) {gotIt()    
        }else if (total > magicNumber) {tooHigh()
        }
    });

    $("#manPic").on('click' , function () {
        total = total + manatee;
        console.log("new user total " + total);
        $('#userTotal').text(total);
        if (total === magicNumber) {gotIt()    
        }else if (total > magicNumber) {tooHigh()
        }
    });
    
    $("#stingPic").on('click' , function () {
        total = total + stingray;
        console.log("new user total " + total);
        $('#userTotal').text(total);
        if (total === magicNumber) {gotIt()    
        }else if (total > magicNumber) {tooHigh()
        }
    });
})
 
//write if statement for wins (total = magic number)

//write else statement for losses (total > magic number)

