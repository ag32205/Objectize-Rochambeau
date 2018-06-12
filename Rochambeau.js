function Player() {
    this.choice = null;
}

var player = new Player();
var computer = new Player();



var choices = ["Rock", "Paper", "Scissors"];



var score = {
    wins: 0,
    losses: 0,
    ties: 0
};

function storePlayerChoice(choice) {
    player.choice = choice;
    console.log("My choice = " + player.choice);
    storeComputerChoice();
}

// Generate the computer's random choice
function storeComputerChoice() {
    // Generate computer's random choice
    computer.choice = Math.floor(Math.random() * 3);
    console.log("Computer choice = " + computer.choice);
}

function playGame() {
    // Here is the game ruleset algorithm
    if (player.choice == computer.choice) {
        // We have a tie!
        ++score.ties;
        displayGameResult("tie")
    } else if (player.choice == choices.ROCK && computer.choice == choices.SCISSORS) {
        // Rock beats scissors - a win!
        ++score.wins;
        displayGameResult("win")
    } else if (player.choice == choices.PAPER && computer.choice == choices.ROCK) {
        // Paper beats rock - a win!
        ++score.wins;
        displayGameResult("win")
    } else if (player.choice == choices.SCISSORS && computer.choice == choices.PAPER) {
        // Scissors beats paper - a win!
        ++score.wins;
        displayGameResult("win")
    } else {
        // All other combinations are losses
        ++score.losses;
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





function displayScoreBoard(winsId, lossesId, tiesId) {
    document.getElementById("wins").textContent = score.wins;
    document.getElementById("losses").textContent = score.losses;
    document.getElementById("ties").textContent = score.ties;
}

var rockButton = document.getElementById("rock");
var paperButton = document.getElementById("paper");
var scissorsButton = document.getElementById("scissors");
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
playButton.addEventListener('click', () => {
    playGame()
});
