function Gameboard() {
    let gameboard = [];

    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            gameboard.push('');
            gameboard[i]
        }
    }

    return {gameboard};
};

console.log(Gameboard())


function Players() {
    let playerList = [];

    const createPlayer = (name) => {
        const playerName = name;
        let playerMarker;
        playerList.push(name)

        if (playerList[0] == name) {
            playerMarker = 'X';
        } else if (playerList[1] == name) {
            playerMarker = 'O';
        } else {
            alert('Two players are already in the game')
        }
        return {playerName, playerMarker,}
    };
    
    return {createPlayer}
};




function Game() {
   
};



