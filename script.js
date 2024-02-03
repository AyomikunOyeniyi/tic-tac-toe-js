function Gameboard() {
    let players = Players();
    let board = ['','','','','','','','',''];
    
    //function to drop player's token
    function dropPlayerToken(index) {
        if (board[index] !== '') {
            return 'Cell is taken! Retry!'; 
        } else {
            board[index] = 'X';
        };
    };

    function randomIndex(min, max) {
        return Math.floor(Math.random()* (max - min) + min);
    };

    
    function checkFreeIndexes () {
        let freeIndexes = [];
        //since we run checkFreeIndexes before computerMove, the length of the free index array is one less than the actual number of free indexes. To adjust for that, the loop must be one less than the length of the board.
        for (i = 0; i < 8; i++) {
            if (board[i] == '') {
                freeIndexes.push(board[i]);
            };
        };
        if (freeIndexes.length == 0) {
            return true;
        } else {
            return false;
        };
    };

    function dropCompToken (index) {
        if (board[index] !== ''){
            computerMove();
        } else {
            board[index] = 'O';
        };
    };

    function computerMove () {
        let computerChoice = randomIndex(1, 9);
        dropCompToken(computerChoice);
        
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
            return true;
        } else {
            return false; 
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
        if (checkIfFull) {
            return 'A tie!'
        } else {
            return 'Continue playing!'
        };
    };
    return {board, dropPlayerToken, dropCompToken, computerMove, checkWins, checkIfFull, checkTies, checkFreeIndexes,}
};
Gameboard();



function Players() {
    let computerPlayer = '@AI';
    let humanPlayer;

    let humanMarker = 'X';
    let computerMarker = 'O';

    function createPlayer(name) {
        humanPlayer = '@' + name;
        return humanPlayer;
    };

    return {createPlayer, humanPlayer, computerPlayer, humanMarker,computerMarker,}
};
Players();


function Game() {
    // let board = Gameboard();

    function playRound (board,index) {
        // board.checkFreeIndexes();
        board.dropPlayerToken(index);
        board.checkWins();
        board.checkTies();
        if (board.checkFreeIndexes() == 1) {
            return;
        } else {
            board.computerMove();
            // board.checkWins();
            board.checkTies();
        }
        
    };
    
    return {playRound,}
};
Game();


//Object for DOM related stuff
function Display() {
    let gameboard = Gameboard();
    let gameD = Game();
    const container = document.querySelector('div');

   function renderBoard () {
        for (let index in gameboard.board) {
            const cell = document.createElement('div');
            cell.classList.add(`cell`);
            cell.textContent = gameboard.board[index];

            cell.addEventListener('click', () => {
                gameD.playRound(gameboard, index);
                
                container.textContent = '';
                renderBoard();
                
            });
            
            container.appendChild(cell);
        };
   };
   renderBoard();
    
    return {renderBoard,}
};
Display();