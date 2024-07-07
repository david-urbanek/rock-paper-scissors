function playGame(){

    var humanScore = 0
    var computerScore = 0

    const winner = document.querySelector("#winner");
    const whoWin= document.querySelector("#who-win");

    const humanScoreboard = document.querySelector("#human-scoreboard");
    humanScoreboard.textContent = `${humanScore}`;

    const pcScoreboard = document.querySelector("#pc-scoreboard");
    pcScoreboard.textContent = `${computerScore}`;

    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            humanChoice = event.target.id
            playRound(humanChoice, getComputerChoice())
        });
    });

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

    function checkWinner(){
        if (computerScore == 5 || humanScore == 5) {
            if (computerScore == 5) {
                winner.textContent = "Pc is winner"
                playGame()
                }
            else{
                winner.textContent = "Human is winner"
                playGame()
                }
            }
    }

    function playRound(humanChoice, computerChoice){

        if (humanChoice == computerChoice){
            whoWin.textContent = "Tie";
        }
        else if (humanChoice == "PAPER" && computerChoice == "ROCK"){
            humanScore += 1;
            humanScoreboard.textContent = `${humanScore}`;
            whoWin.textContent = "Human win";
            checkWinner();
        }
        else if (humanChoice == "SCISSORS" && computerChoice == "PAPER"){
            humanScore += 1;
            humanScoreboard.textContent = `${humanScore}`;
            whoWin.textContent = "Human win";
            checkWinner();
        }
        else if (humanChoice == "ROCK" && computerChoice == "SCISSORS"){
            humanScore += 1;
            humanScoreboard.textContent = `${humanScore}`;
            whoWin.textContent = "Human win";
            checkWinner();
        }
        else{
            computerScore += 1;
            pcScoreboard.textContent = `${computerScore}`;
            whoWin.textContent = "Pc win";
            checkWinner();
        }
    }

}

playGame();
