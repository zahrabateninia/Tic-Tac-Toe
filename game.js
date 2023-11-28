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
        resetGame,
    };
})();