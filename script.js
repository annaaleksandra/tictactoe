const test = document.getElementById('tt');
test.innerText = "Tic Tac Toe";


const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
];



let gameboard = [];
let turn = 'X';
let win;

const squares = Array.from(document.querySelectorAll('.gameboard div'));


document.querySelector('.gameboard').addEventListener('click', handleTurn);
const messages = document.querySelector('h2');




function getWinner() {
    let winner = null;
    winningCombos.forEach(function(combo, index) {
        if (gameboard[combo[0]] && gameboard[combo[0]] === gameboard[combo[1]] &&
            gameboard[combo[0]] === gameboard[combo[2]]) 
            
            winner = gameboard[combo[0]];
            
    });

    return winner ? winner : gameboard.includes('') ? null : 'T';

};

function handleTurn() {
    let idx = squares.findIndex(function(square) {
        return square === event.target;
    });
    gameboard[idx] = turn;
    turn = turn === 'X' ? 'O' : 'X';
    win = getWinner();
    render();
};

function init() {
    gameboard = [
        '', '', '',
        '', '', '',
        '', '', '',
    ];

    render();
};

function render() {
    gameboard.forEach(function(mark, index) {
        
        squares[index].textContent = mark;
    });
    messages.textContent = win === 'T' ? `That's a tie!` : win ? 
    `${win} wins the game!` : `It's ${turn}'s turn!`;
};

init();









//messages.textContent = win === 'T' ? `That's a tie!` : win ? 
//`${win} wins the game!` : `It's ${turn}'s turn!`;



/*
const box1 = document.getElementById('box1')
box1.addEventListener('click', addX);

function addX() {
    box1.innerText = 'x';
    box1.style.fontSize = '80px';
    box1.style.textAlign = 'center';
}*/