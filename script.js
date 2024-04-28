
let gameInfo = document.querySelector("#game-info");
let playerTurn = document.querySelector("#playerTurn");
let winsInfo = document.querySelector("#wins");
let lossesInfo = document.querySelector("#losses");
let drawsInfo = document.querySelector("#draws");
let turnInfo = document.querySelector("#turn");
let reset = document.querySelector("#reset");
let playerImg = document.querySelector("#playerImg");
let computerImg = document.querySelector("#computerImg");

//Creating Variables
let turn = 0;
let wins = 0;
let losses = 0;
let ties = 0;
let computerHand;

const computerTurn = () => {

    //Array of possible moves
    let hands = ['rock', 'paper', 'scissors'];

    //Generates a random number between 0 and 2
    let randomNum = Math.floor(Math.random() * 3);

    //returns the value of the hands array at randomNum index
    return hands[randomNum];
}


playerTurn.addEventListener("keydown", (event) => {
    let playerValue = playerTurn.value;
    playerValue = playerValue.toLowerCase();

    if(event.key === 'Enter') {

        turn++;
        turnInfo.innerText = `Turn: ${turn}`;
        computerHand = computerTurn();

        if (playerValue == computerHand) {
            ties++;
            gameInfo.innerText = `You chose ${playerValue} and the computer chose ${computerHand}. Its a Tie!`; 
            drawsInfo.innerText = `Ties: ${ties}`;

        } else if (
            (playerValue == 'rock' && computerHand == 'scissors') ||
            (playerValue == 'scissors' && computerHand == 'paper') ||
            (playerValue == 'paper' && computerHand == 'rock')
        ){
            wins++;
            gameInfo.innerText = `You chose ${playerValue} and the computer chose ${computerHand}, ${playerValue} beats ${computerHand}. You win!`; 
            winsInfo.innerText = `Wins: ${wins}`;
        } else if (
            (playerValue == 'rock' && computerHand == 'paper') ||
            (playerValue == 'scissors' && computerHand == 'rock') ||
            (playerValue == 'paper' && computerHand == 'scissors')
        ){
            losses++;
            gameInfo.innerText = `You chose ${playerValue} and the computer chose ${computerHand}. You Lose!`; 
            lossesInfo.innerText = `Losses: ${losses}`;
        } else {
            alert('Please Enter A Valid Response');
            turn--;
        }
    };
});

reset.addEventListener('click', () => {
    turn = 0;
    turnInfo.innerText = "Turn: 1";
    wins = 0;
    winsInfo.innerText = "Wins: 0";
    losses = 0;
    lossesInfo.innerText = "Losses: 0";
    ties = 1;
    drawsInfo.innerText = "Ties: 0";
});
