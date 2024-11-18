

function createBoard(){

    const gameBoard = [
        ['','',''],
        ['','',''],
        ['','','']
    ];
    // indexs are accessed like gameboard[row][element in row] ----> gameboard[1][2] would be middle row last element

    
    //add function that prints the board to the console
    // add functions that update the state of the board when an element changes
    // add a function that takes an index of the two-dimensional array and depending on which player calls it place X or O

    return {board: gameBoard}
}

function createPlayer(name){
    const playerName = name;
    
    let score = 0;
    const getScore = () => score;
    const increaseScore = () => score++;

    return{playerName, getScore, increaseScore};
}

function gameLoop () {

}

const playerOne = createPlayer("chance");
const playerTwo = createPlayer("caroline");
playerTwo.increaseScore();
playerTwo.increaseScore();
playerTwo.increaseScore();

playerOne.increaseScore();
playerOne.increaseScore();

console.log({score: playerOne.getScore(),
            name:playerOne.playerName
});
console.log({score: playerTwo.getScore(),
    name:playerTwo.playerName
});