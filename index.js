function game(){

    const options = ["rock", "paper", "scissors"];

    const getComputerChoice = () => {
        const randomNumber = Math.floor(Math.random() * 3);
        return options[randomNumber];
    }

    function playRound(playerSelection, computerSelection){}


}

window.onload = function(){
    game();
}