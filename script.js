//Storing targeted html elements in variables
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

//Function to randomize computer hand picks, returns move
const computerTurn = () => {

    //Array of possible moves
    let hands = ['rock', 'paper', 'scissors'];

    //Generates a random number between 0 and 2
    let randomNum = Math.floor(Math.random() * 3);

    //returns the value of the hands array at randomNum index
    return hands[randomNum];
}


playerTurn.addEventListener("keydown", (event) => {

    //Sets input value equal to what has been entered
    let playerValue = playerTurn.value;

    //Converts input value to all lowercase letters so the inputs are not case sensitive
    playerValue = playerValue.toLowerCase();

    //Execute the following upon pressing enter or return
    if(event.key === 'Enter') {

        //Increase Turn count, update turn display info, execute computerTurn() and assign to computerHand, update Images
        turn++;
        turnInfo.innerText = `Turn: ${turn}`;
        computerHand = computerTurn();
        playerImg.src = `/SVGs/${playerValue}.svg`;
        computerImg.src = `/SVGs/${computerHand}.svg`;

        //Conditonals that check playerValue and computerHand values to determine who wins, looses, or ties
        //first if checks ties, next else if checks wins, next else if checks losses.
        //Last else statement is for invalid inputs
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
            playerImg.src = `/SVGs/hand.svg`;
            computerImg.src = `/SVGs/hand.svg`;
            gameInfo.innerText = "Try again. The computer is waiting for your turn";
        }
    };
});

//Reset button clears stat values
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
