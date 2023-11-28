const Gameboard = (()=>{
    let gameboard = ["","","","","","","","",""];

    const getGameboard= ()=>{
        return gameboard;
    };

    const placeMarker= (index, marker)=>{
        if(gameboard[index]==""){
            gameboard[index]= marker;
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
        gameboard = ["","","","","","","","",""];
    }

    return{
        getGameboard,
        placeMarker,
        winningCombinations,
        resetGame,
    };
})();

const players= (()=>{
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
    const gameboard = document.querySelector('#gameboard');
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell=>{
        const cellIndex = cell.getAttribute('data-cell-index');
    })
    const restartBtn = document.querySelector('.restartBtn');
    const displayResult = document.querySelector('.displayResult');    
    
    const resetGame = ()=>{
        Gameboard.resetGame();
        // additional UI reset
        const cells = document.querySelectorAll('.cell');
        cells.forEach((cell)=>{
            cell.textContent = "";
        })
    };
    
    const updateGameBoard = () => {
        // Logic to update the displayed game board based on Gameboard state
        // Use Gameboard.getGameboard() to get the game board state

    };


    return {
        
    };

})();

