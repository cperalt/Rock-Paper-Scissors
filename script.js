
const computerTurn = () => {

    //Array of possible moves
    let hands = ['rock', 'paper', 'scisscors'];

    //Generates a random number between 0 and 2
    let randomNum = Math.floor(Math.random() * 3);

    //returns the value of the hands array at randomNum index
    return hands[randomNum];
}


console.log(computerTurn());
