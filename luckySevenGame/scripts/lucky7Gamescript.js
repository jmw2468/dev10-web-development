/*
Creator: Julie White
Date created: September 28, 2018
Date last modified: September 30, 2018
*/

function noDisplay() {
    document.getElementById("results").style.display = "none";
} 

function rollDice() {
	var die1 = Math.floor(Math.random() * 6) + 1;
    var die2 = Math.floor(Math.random() * 6) + 1;
    var diceRoll = die1 + die2;
	return diceRoll;
}
 
 function displayResults(startBet, rollCount, maxAmount, rollMaxAmount) {
    document.getElementById("results").style.display = "inline";
    document.getElementById("playButton").innerHTML = "Play Again";
    document.getElementById("startBet").innerHTML = "$" + startBet +".00";
    document.getElementById("numRoll").innerHTML = rollCount;
    document.getElementById("maxWin").innerHTML = "$" + maxAmount + ".00";
    document.getElementById("winRoll").innerHTML = rollMaxAmount;
    };


function playGame() {
    var startingBet = document.getElementById("startingBet").value;
    var gameMoney = 0;
	var winnings = [];
	
	if (startingBet == 0){
		alert("Please input Starting Bet higher than $0");
	}
	else { gameMoney = startingBet; }
	
	
    while (gameMoney > 0) {
		
		var result = rollDice();
	
        if (result == 7) {
            gameMoney = gameMoney + 4;
        } else { gameMoney = gameMoney - 1; }
		
        winnings.push(gameMoney)
    }

    var rollCounter = winnings.length;
    var mostWon = Math.max.apply(Math, winnings);
    var mostWonIndex = winnings.indexOf(mostWon);
    var rollOfMaxWin = rollCounter - mostWonIndex;

    displayResults(startingBet, rollCounter, mostWon, rollOfMaxWin);
} 
