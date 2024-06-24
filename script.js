function playGame(){

    var humanScore = 0
    var computerScore = 0

    function getComputerChoice(){
        var choice = Math.floor(Math.random() * 3);

        if (choice == 0){
            return "ROCK";
        }
        else if (choice == 1){
            return "PAPER";
        }
        else{
            return "SCISSORS";
        }
    }

    function getHumanChoice(){
        return prompt("Choose between rock, paper, scissors", );
    }

    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toUpperCase()

        if (humanChoice == computerChoice){
            console.log("Tie");
        }
        else if (humanChoice == "PAPER" && computerChoice == "ROCK"){
            humanScore += 1;
            return console.log("Human won");
        }
        else if (humanChoice == "SCISSORS" && computerChoice == "PAPER"){
            humanScore += 1;
            return console.log("Human won");
        }
        else if (humanChoice == "ROCK" && computerChoice == "SCISSORS"){
            humanScore += 1;
            return console.log("Human won");
        }
        else{
            computerScore += 1;
            return console.log("PC won");
        }
    }

    var humanSelection = getHumanChoice();
    var computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);


    if (computerScore > humanScore){
        return console.log("PC won");
    }
    else{
        return console.log("Human won");
    }
}

playGame();
