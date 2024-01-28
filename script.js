function Gameboard() {
    
    let board = ['','','','','','','','',''];
    
    function dropToken(number, marker) {
        if (board[number] !== '') {
            console.log('This cell is taken. Choose another!'); 
            
        } else {
            board[number] = marker;
            console.log(`${marker} was played on Cell ${number}`) ;
        };
    };

    function randomNumber(min, max) {
        return Math.floor(Math.random()* (max - min) + min);
    };

    function computerMove () {
        let computerChoice = randomNumber(1, 10);
        dropToken(computerChoice, 'O');
        console.log(board);
        console.log('Your turn!')
    };
    
    return {board, dropToken, computerMove}
};



function Players() {
    let humanPlayer;
    let computerPlayer = '@AI';

    let humanMarker = 'X';
    let computerMarker = 'O';

    function createPlayer(name) {
        humanPlayer = '@' + name;
        return humanPlayer;
    };

    return {createPlayer,
            humanPlayer, 
            computerPlayer,
            humanMarker, 
            computerMarker,}
};



function Game() {
    let board = Gameboard();

    function playRound () {
        let playerChoice = prompt('Choose a cell', '');
        board.dropToken(playerChoice * 1, 'X');
        board.computerMove();

    }
    
    return {playRound,}
};


