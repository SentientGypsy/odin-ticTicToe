

function createBoard(){

    let gameBoard = [
        ['','',''],
        ['','',''],
        ['','','']
    ];
    // indexs are accessed like gameboard[row][element in row] ----> gameboard[1][2] would be middle row last element


    //add function that prints the board to the console
    // add functions that update the state of the board when an element changes
    const checkWinner = (board) => {
        // this function exists to check the board for any winners.
         // Check rows for a winner
    for (let row = 0; row < 3; row++) {
        if (board[row][0] !== '' && board[row][0] === board[row][1] && board[row][1] === board[row][2]) {
            return board[row][0] + "is the winner!"; // Return 'X' or 'O'
        }
    }

     // Check columns for a winner
     for (let col = 0; col < 3; col++) {
        if (board[0][col] !== '' && board[0][col] === board[1][col] && board[1][col] === board[2][col]) {
            return board[0][col] + "is the winner!"; // Return 'X' or 'O'
        }
    }

    // Check diagonals for a winner
    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        return board[0][0] + "is the winner!"; // Return 'X' or 'O'
    }

    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        return board[0][2] + "is the winner!"; // Return 'X' or 'O'
    }

    // Check for a draw (no empty cells left)
    const isDraw = board.every(row => row.every(cell => cell !== ''));
    if (isDraw) {
        return 'Draw';
    }

    // No winner yet
    return null;
    }

    return {gameBoard, checkWinner}
}

function createPlayer(name){
    const playerName = name;    
    
    let playerOne = true;
    let score = 0;
    const getScore = () => score;
    const increaseScore = () => score++;
    // add a function that takes an index of the two-dimensional array and depending on which player calls it place X or O
    const chooseIndex = (board, firstIndex, secondIndex, player) => {
        if (player.playerOne === true){
            board[firstIndex][secondIndex] = "X";
            console.log(board);
        } else {
            board[firstIndex][secondIndex] = "O";
            console.log(board);
        }
    }

    return{playerName, getScore, increaseScore, chooseIndex, playerOne};
}

let theBoard = createBoard();


const playerOne = createPlayer("chance");
const playerTwo = createPlayer("caroline");
playerTwo.playerOne = false;
playerOne.chooseIndex(theBoard.gameBoard, 0, 2, playerOne);
playerOne.chooseIndex(theBoard.gameBoard, 1, 1, playerOne);
playerOne.chooseIndex(theBoard.gameBoard, 2, 0, playerOne);


console.log(theBoard.checkWinner(theBoard.gameBoard));
