function game() {
    // DOM elements
    const scissors = document.querySelector("#scissors");
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");

    const message = document.querySelector("#message");
    const playerScore = document.querySelector("#user-score span");
    const computerScore = document.querySelector("#computer-score span");

    const options = ["rock", "paper", "scissors"];
    const MAX_SCORE = 5;

    const getComputerChoice = () => {
        const randomNumber = Math.floor(Math.random() * 3);
        return options[randomNumber];
    };

    const handlePlayerChoice = (playerChoice) => {
        const computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
    };

    function toggleDisableButtons(option) {
        [scissors, rock, paper].forEach((button) => {
            button.disabled = option;
        });
    }

    // Event listeners
    [scissors, rock, paper].forEach((button) => {
        button.addEventListener("click", () => {
            handlePlayerChoice(button.id);
        });
    });

    function resetGame() {
        playerScore.textContent = 0;
        computerScore.textContent = 0;
        message.textContent = "";
        const resetButton = document.querySelector("#reset-wrapper button");
        resetButton.remove();

        toggleDisableButtons(false);
    }

    function createResetButton() {
        const resetButton = document.createElement("button");
        resetButton.textContent = "Reset";
        resetButton.addEventListener("click", resetGame);

        const resetWrapper = document.querySelector("#reset-wrapper");

        resetWrapper.appendChild(resetButton);
    }

    function chekForGameOver() {
        const playerScoreValue = parseInt(playerScore.textContent);
        const computerScoreValue = parseInt(computerScore.textContent);

        if (
            playerScoreValue === MAX_SCORE ||
            computerScoreValue === MAX_SCORE
        ) {
            createResetButton();
            toggleDisableButtons(true);

            if (playerScoreValue === MAX_SCORE) {
                message.textContent = "You won the game!";
                return;
            }

            message.textContent = "You lost the game! Try again!";

            return;
        }
    }

    function playRound(playerSelection, computerSelection) {
        // Tie
        if (playerSelection === computerSelection) {
            message.textContent = "It's a tie!";

            chekForGameOver();
            return;
        }

        // Win
        if (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "rock")
        ) {
            message.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
            playerScore.textContent = parseInt(playerScore.textContent) + 1;

            chekForGameOver();
            return;
        }

        // Lose
        message.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        computerScore.textContent = parseInt(computerScore.textContent) + 1;

        chekForGameOver();
    }
}

window.onload = function () {
    game();
};
