const GameBoard = (()=>{
    let gameBoard = ["","","","","","","","",""];

    const getGameBoard= ()=>{
        return gameBoard;
    };

    const placeMarker= (index, marker)=>{
        if(gameBoard[index]==""){
            gameBoard[index]= marker;
            return true;
        }
        return false;
    };

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6], 
        [1, 4, 7], 
        [2, 5, 8], 
        [0, 4, 8], 
        [2, 4, 6] 
    ];


    const resetGame= ()=>{
        gameBoard = ["","","","","","","","",""];
    }

    return{
        getGameBoard,
        placeMarker,
        winningCombinations,
        resetGame,
    };
})();

const Players= (()=>{
    let currentPlayer = 1;
    const players = [
        {
            name : 'Player1',
            marker : 'X'
        },
        {
            name : 'Player2',
            marker : 'O'
        }
    ];

    const getCurrentPlayer = ()=>{
        return players[currentPlayer - 1];
    }


    const switchPlayer = ()=>{
        currentPlayer = currentPlayer === 1 ? 2 : 1;   
    }
     
    const resetPlayer = ()=>{
        currentPlayer = 1;
    }

    return{
        getCurrentPlayer,
        switchPlayer,
        resetPlayer
    }

})();


// Game flow controller logic

// displayController factory is responsible for updating the 
// UI based on the game state, handling user inputs, 
// displaying the game board, player information, and game results.

const displayController = (()=>{
    const gameBoard = document.querySelector('#gameBoard');
    const cells = document.querySelectorAll('.cell');
    const restartBtn = document.querySelector('.restartBtn');
    const displayResult = document.querySelector('.displayResult');    
    

    const resetGame = ()=>{
        GameBoard.resetGame();
        // reset UI
        cells.forEach((cell)=>{
            cell.textContent = "";
        });
        displayResult.textContent = "";
        displayResult.style.display = "none";
    };

    const updateGameBoard = () => {
        
        let gameOver = false;

        cells.forEach(cell=>{
            cell.addEventListener('click',()=>{

                if(gameOver){
                    return; // prevent further interaction
                }

                const cellIndex = cell.getAttribute('data-cell-index');
                const currentPlayer = Players.getCurrentPlayer();

                if(GameBoard.placeMarker(cellIndex, currentPlayer.marker)){
                    cell.textContent = currentPlayer.marker;
                    Players.switchPlayer();

                    const winner = findWinner();
                    const draw = checkDraw();

                    if(winner){
                        displayResult.textContent  = `${winner} wins`
                        displayResult.style.display = "block";
                        gameOver = true;

                    }else if(draw){
                        displayResult.textContent = "It's a Draw";
                        displayResult.style.display = 'block';
                        gameOver = true;
                    }else{
                    return;
                    }
                }
            })
        });

        restartBtn.addEventListener('click',()=>{
            resetGame();
            gameOver = false;
        })
    };

    const findWinner = ()=>{
        const combinations = GameBoard.winningCombinations;
        const board = GameBoard.getGameBoard();

        for (const combination of combinations){
            const [a, b, c] = combination; // array destructuring
            if(board[a] !=='' && board[b] == board[a] && board[c] == board[a]){
                return board[a]; // return marker of winner
            }
        }
        return; // if no winner do nth
        
    };

    const checkDraw = ()=>{
        const board = GameBoard.getGameBoard();
        return board.every(cell => cell !== '') // tests if every element is not ''
    };

    return {
        resetGame,
        findWinner,
        updateGameBoard
    };

})();


document.addEventListener('DOMContentLoaded', () => {
    displayController.updateGameBoard();
    

});


