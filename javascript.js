

function createBoard(){

    const gameBoard = ['','','','','','','','',''];

    return {board: gameBoard}
}

function createPlayer(name){
    const playerName = name;
    
    let score = 0;
    const getScore = () => score;
    const increaseScore = () => score++;

    return{playerName, getScore, increaseScore};
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