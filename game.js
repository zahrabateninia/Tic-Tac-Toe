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

        const cells = document.querySelectorAll('.cell');
        cells.forEach((cell)=>{
            cell.textContent = "";
        })
    }

    return{
        getGameboard,
        placeMarker,
        winningCombinations,
        resetGame,
    };
})();