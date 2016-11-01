function rockPaperScissors(userChoice) {
    var computerChoice = Math.random();
    var myOutput = document.getElementById("rpsOutput");
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if (computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    console.log("Computer: " + computerChoice);

    var compare = function(choice1, choice2) {
        if (choice1 == choice2) {
            myOutput.innerHTML = "The result is a tie!";
        } else if (choice1 == "rock") {
            if (choice2 == "scissors") {
                myOutput.innerHTML = "The Computer chose Scissors, you win with Rock. <br>";
            } else {
                myOutput.innerHTML = "The Computer chose Paper, you lose with Rock. <br>";
            }
        } else if (choice1 == "paper") {
            if (choice2 == "rock") {
                myOutput.innerHTML = "The Computer chose Rock, you win with Paper. <br>";
            } else {
                myOutput.innerHTML = "The Computer chose scissors, you lose with Paper. <br>";
            }
        } else if (choice1 == "scissors") {
            if (choice2 == "rock") {
                myOutput.innerHTML = "The Computer chose Rock, you lose with Scissors. <br>";
            } else {
                myOutput.innerHTML = "The Computer chose Paper, you win with Scissors. <br>";
            }
        } else {
            myOutput.innerHTML = "Please choose 'rock','paper', or 'scissors'"
        }
    }
    compare(userChoice, computerChoice);
}
