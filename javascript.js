

function createBoard(){

    let gameBoard = [
        ['','',''],
        ['','',''],
        ['','','']
    ];
    // indexs are accessed like gameboard[row][element in row] ----> gameboard[1][2] would be middle row last element


    //add function that prints the board to the console
    // add functions that update the state of the board when an element changes
    const checkWinner = (board, player) => {
        // this function exists to check the board for any winners.
         // Check rows for a winner
        for (let row = 0; row < 3; row++) {
            if (board[row][0] !== '' && board[row][0] === board[row][1] && board[row][1] === board[row][2]) {

                if (board[row][0] === 'X') {
                    console.log("player one has won this round");
                    player.increaseScore(player);
                    
                } else {
                    console.log("player two has won this round");
                    player.increaseScore(player);
                }

                return board[row][0] + " is the winner!"; // Return 'X' or 'O'
            }
        }

        // Check columns for a winner
        for (let col = 0; col < 3; col++) {
            if (board[0][col] !== '' && board[0][col] === board[1][col] && board[1][col] === board[2][col]) {

                if (board[col][0] === 'X') {
                    console.log("player one has won this round");
                    player.increaseScore(player);
                    
                } else {
                    console.log("player two has won this round");
                    player.increaseScore(player);
                }



                return board[0][col] + " is the winner!"; // Return 'X' or 'O'
            }
        }

        // Check diagonals for a winner
        if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
            if (board[0][0] === 'X') {
                console.log("player one has won this round");
                player.increaseScore(player);
                
            } else {
                console.log("player two has won this round");
                player.increaseScore(player);
            }

            return board[0][0] + " is the winner!"; // Return 'X' or 'O'
        }

        if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {

            if (board[0][2] === 'X') {
                console.log("player one has won this round");
                player.increaseScore(player);
                
            } else {
                console.log("player two has won this round");
                player.increaseScore(player);
            }



            return board[0][2] + " is the winner!"; // Return 'X' or 'O'
        }

        // Check for a draw (no empty cells left)
        const isDraw = board.every(row => row.every(cell => cell !== ''));
        if (isDraw) {
            return 'Draw';
        }

    // No winner yet
        return null;
    }


    const resetBoard = (board) => {
        // this map operation resets the board back to '', like after one side wins
        board = board.map(row => row.map(() => ''));
    }

    let playerTurn = true;




    return {gameBoard, checkWinner, resetBoard, playerTurn}
}

function createPlayer(name){
    const playerName = name;    
    const playerOneScoreboard = document.getElementById("player-one-score");
    playerOneScoreboard.style.fontSize = "32px";

    const playerTwoScoreboard = document.getElementById("player-two-score");
    playerTwoScoreboard.style.fontSize = "32px";

    let playerOne = true;
    let score = 0;
    const getScore = (player) => {
        if (player.playerOne === true) {
            playerOneScoreboard.textContent = score;
        } else {
            playerTwoScoreboard.textContent = score;
        }
    };
    const increaseScore = (player) => {
        if (player.playerOne === true) {
            playerOneScoreboard.textContent = ++score;
        } else {
            playerTwoScoreboard.textContent = ++score;
        }
        
    };
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

    return{playerName, getScore, increaseScore, chooseIndex, playerOne, playerOneScoreboard, playerTwoScoreboard};
}


function domObject() {
    


    const createTicTacToeBoard = (board, boardObject, playerOneObject, playerTwoObject) => {
        // Create a container for the board
        const boardContainer = document.createElement('div');
        boardContainer.style.display = 'grid';
        boardContainer.style.gridTemplateColumns = `repeat(${board[0].length}, 1fr)`;
        boardContainer.style.gap = '5px';
        boardContainer.style.width = '150px'; // Adjust size as needed
        
        // Loop through the 2D array to create buttons
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                const button = document.createElement('button');
                button.textContent = board[i][j] || ''; // Display the board value or empty if null
                button.style.width = '100px';
                button.style.height = '100px';
                button.style.fontSize = '32px';
                button.style.textAlign = 'center';
    
                button.addEventListener('click', () => {
                    if (!button.textContent && boardObject.playerTurn) {
                        button.textContent = 'X'; 
                        board[i][j] = 'X'; // Update the board array
                        console.log(boardObject.checkWinner(board, playerOneObject));
                        boardObject.playerTurn = false;
                        
                    } else if (!button.textContent && !boardObject.playerTurn){

                        button.textContent = 'O'; 
                        board[i][j] = 'O'; // Update the board array
                        console.log(boardObject.checkWinner(board, playerTwoObject));
                        boardObject.playerTurn = true;

                    }
                });
    
                // Append button to the board container
                boardContainer.appendChild(button);
            }
        }
    
        // Clear previous board (optional) and append the new board to the body or a specific element
         // Remove if you want to append instead of replace
        document.body.appendChild(boardContainer);
    }
    
    // Example usage
   
    

    const appendToDoc = (parent, element) => {
        parent.appendChild(element);
    }
    return {appendToDoc, createTicTacToeBoard}
}

let theBoard = createBoard();
let theDom = domObject();


const playerOne = createPlayer("chance");

const playerTwo = createPlayer("caroline");
playerTwo.playerOne = false;

console.log(playerOne.playerName);

theDom.createTicTacToeBoard(theBoard.gameBoard, theBoard, playerOne, playerTwo);

console.log(theBoard.checkWinner(theBoard.gameBoard));
