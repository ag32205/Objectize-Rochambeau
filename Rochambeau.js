function Player() {
    this.choice = null;
}

var player = new Player();
var computer = new Player();



var choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];



var score = {
    wins: 0,
    losses: 0,
    ties: 0
};

var score2 = {
    wins2: 0,
    losses2: 0,
    ties2: 0
};

function storePlayerChoice(choice) {
    player.choice = choice;
    console.log("My choice = " + player.choice);
    storeComputerChoice();
}

// Generate the computer's random choice
function storeComputerChoice() {
    // Generate computer's random choice
    computer.choice = Math.floor(Math.random() * 5);
    console.log("Computer choice = " + computer.choice);
}

function playGame() {
    // Here is the game ruleset algorithm
    if (player.choice == computer.choice) {
        // We have a tie!
        ++score.ties;
        ++score2.ties2;
        displayGameResult("tie")
    } else if (player.choice == 0 && computer.choice == 2) {
        // Rock beats scissors - a win!
        ++score.wins;
        ++score2.losses2;
        displayGameResult("win")
    } else if (player.choice == 0 && computer.choice == 3) {
        // Rock beats scissors - a win!
        ++score.wins;
        ++score2.losses2;
        displayGameResult("win")
    } else if (player.choice == 1 && computer.choice == 0) {
        // Paper beats rock - a win!
        ++score.wins;
        ++score2.losses2;
        displayGameResult("win")
    } else if (player.choice == 1 && computer.choice == 4) {
        // Paper beats rock - a win!
        ++score.wins;
        ++score2.losses2;
        displayGameResult("win")
    } else if (player.choice == 2 && computer.choice == 3) {
        // Paper beats rock - a win!
        ++score.wins;
        ++score2.losses2;
        displayGameResult("win")
    } else if (player.choice == 2 && computer.choice == 1) {
        // Scissors beats paper - a win!
        ++score.wins;
        ++score2.losses2;
        displayGameResult("win")
    } else if (player.choice == 3 && computer.choice == 1) {
        // Scissors beats paper - a win!
        ++score.wins;
        ++score2.losses2;
        displayGameResult("win")
    } else if (player.choice == 3 && computer.choice == 4) {
        // Scissors beats paper - a win!
        ++score.wins;
        ++score2.losses2;
        displayGameResult("win")
    }  else if (player.choice == 4 && computer.choice == 2) {
        // Scissors beats paper - a win!
        ++score.wins;
        ++score2.losses2;
        displayGameResult("win")
    }  else if (player.choice == 4 && computer.choice == 0) {
        // Scissors beats paper - a win!
        ++score.wins;
        ++score2.losses2;
        displayGameResult("win")
    } else {
        // All other combinations are losses
        ++score.losses;
        ++score2.wins2;
        displayGameResult("lose")
    }
}

function displayGameResult(result) {

    var message = "Your choice was " + choices[player.choice] + " and the computer's choice was " + choices[computer.choice] + ".";

    if (result === "win") {
        // Display that it was a win
        document.getElementById("result").textContent = message + " YOU WIN!";
        document.getElementById("result").className = "alert alert-success";
    } else if (result === "lose") {
        // Display that it was a loss
        document.getElementById("result").textContent = message + " YOU LOSE!";
        document.getElementById("result").className = "alert alert-danger";
    } else {
        // Display that it was a tie
        document.getElementById("result").textContent = message + " A tie.";
        document.getElementById("result").className = "alert alert-info";
    }

    displayScoreBoard();
}





function displayScoreBoard(winsId, lossesId, tiesId, wins2Id, losses2Id, ties2Id) {
    document.getElementById("wins").textContent = score.wins;
    document.getElementById("losses").textContent = score.losses;
    document.getElementById("ties").textContent = score.ties;
    document.getElementById("wins2").textContent = score2.wins2;
    document.getElementById("losses2").textContent = score2.losses2;
    document.getElementById("ties2").textContent = score2.ties2;

}

var rockButton = document.getElementById("rock");
var paperButton = document.getElementById("paper");
var scissorsButton = document.getElementById("scissors");
var lizardButton = document.getElementById("lizard");
var spockButton = document.getElementById("spock");
var playButton = document.getElementById("play");

rockButton.addEventListener('click', () => {
    storePlayerChoice(0)
});
paperButton.addEventListener('click', () => {
    storePlayerChoice(1)
});
scissorsButton.addEventListener('click', () => {
    storePlayerChoice(2)
});
lizardButton.addEventListener('click', () => {
    storePlayerChoice(3)
});
spockButton.addEventListener('click', () => {
    storePlayerChoice(3)
});
playButton.addEventListener('click', () => {
    playGame()
});
