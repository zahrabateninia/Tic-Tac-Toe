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
    }

    return{

    }
})();