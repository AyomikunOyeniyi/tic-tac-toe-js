function Gameboard() {
    let players = Players();
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
        console.log('Your turn!');
    };

    //function to check if all array indexes are full. If they are then, it's a tie
    //it scans through the board and pushes any cell with a marker into the fullBoard array
    function checkIfFull () {
        let fullBoard = [];
        for (i = 0; i < 9; i++) {
            if (board[i] !== '') {
                fullBoard.push(board[i]);
            };
        };

        if (fullBoard.length == 9) {
            return 1;
        } else {
            return 0; 
        };
    };

    //function to check win conditions
    function checkWins () {
        if (board[0] == 'X' && board[1] == 'X' && board[2] == 'X') {
            console.log(`${players.humanPlayer} wins!`);

        } else if (board[3] == 'X' && board[4] == 'X' && board[5] == 'X') {
            console.log(`${players.humanPlayer} wins!`);

        } else if (board[6] == 'X' && board[7] == 'X' && board[8] == 'X') {
            console.log(`${players.humanPlayer} wins!`);

        } else if (board[0] =='X' && board[3] == 'X' && board[6] == 'X') {
            console.log(`${players.humanPlayer} wins!`);

        } else if (board[1] == 'X' && board[4] == 'X' && board[7] == 'X') {
            console.log(`${players.humanPlayer} wins!`);

        } else if (board[2] == 'X' && board[5] == 'X' && board[8] == 'X') {
            console.log(`${players.humanPlayer} wins!`);

        } else if (board[0] == 'X' && board[4] == 'X' && board[8] == 'X') {
            console.log(`${players.humanPlayer} wins!`);

        } else if (board[2] == 'X' && board[4] == 'X' && board[6] == 'X') {
            console.log(`${players.humanPlayer} wins!`);

        } else if (board[0] == 'O' && board[1] == 'O' && board[2] == 'O') {
            console.log(`${players.computerPlayer} wins!`);

        } else if (board[3] == 'O' && board[4] == 'O' && board[5] == 'O') {
            console.log(`${players.computerPlayer} wins!`);

        } else if (board[6] == 'O' && board[7] == 'O' && board[8] == 'O') {
            console.log(`${players.computerPlayer} wins!`);

        } else if (board[0] =='O' && board[3] == 'O' && board[6] == 'O') {
            console.log(`${players.computerPlayer} wins!`);

        } else if (board[1] == 'O' && board[4] == 'O' && board[7] == 'O') {
            console.log(`${players.computerPlayer} wins!`);

        } else if (board[2] == 'O' && board[5] == 'O' && board[8] == 'O') {
            console.log(`${players.computerPlayer} wins!`);

        } else if (board[0] == 'O' && board[4] == 'O' && board[8] == 'O') {
            console.log(`${players.computerPlayer} wins!`);

        } else if (board[2] == 'X' && board[4] == 'X' && board[6] == 'X') {
            console.log(`${players.computerPlayer} wins!`);
        } 
    };

    //function to check for ties
    function checkTies () {
        checkIfFull();
        if (checkIfFull == 1) {
            return 'A tie!'
        } else {
            return 'Continue playing!'
        }
    }
    return {board, dropToken, computerMove, checkWins, checkIfFull, checkTies,}
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

    return {createPlayer, humanPlayer, computerPlayer, humanMarker,computerMarker,}
};



function Game() {
    let board = Gameboard();

    function playRound () {
        let playerChoice = prompt('Choose a cell', '');
        board.dropToken(playerChoice * 1, 'X');
        board.computerMove();
        board.checkWins();
        board.checkTies();
    }
    
    return {playRound,}
};


