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


const X_CLASS = 'x';
const O_CLASS = 'o';
const boxElements = document.querySelectorAll('.box');
const winningMessageTextElement = document.querySelector('h2');
const winningMessageElement = document.getElementById('winningMessage');
const restartButton = document.getElementById('restartButton');
let circleTurn;

startGame();

restartButton.addEventListener('click', startGame);

function startGame() {
    circleTurn = false;
    boxElements.forEach(box => {
        box.classList.remove(X_CLASS);
        box.classList.remove(O_CLASS);
        winningMessageElement.classList.remove('show');
        box.addEventListener('click', handleClick, {once: true});
    });
}

function handleClick(e) {
    const box = e.target;
    const currentClass = circleTurn ? O_CLASS : X_CLASS;
    placeMark(box, currentClass);
    if (checkWin(currentClass)) {
        endGame(false)
    } else if (isDraw()) {
        endGame(true)
    } else {
        switchTurn()
    }

}

function endGame(draw) {
    if (draw) {
        winningMessageTextElement.innerText = 'Draw!'
    } else {
        winningMessageTextElement.innerText = `${circleTurn ? "O" : "X"} wins!`;
    }
    winningMessageElement.classList.add('show');
}

function isDraw() {
    return [...boxElements].every(box => { //doesn't have naturally every method so ... is needed to create an array
        return box.classList.contains(X_CLASS) || box.classList.contains(O_CLASS);
    })
}

function placeMark(box, currentClass) {
    box.classList.add(currentClass);
}

function switchTurn() {
    circleTurn = !circleTurn
};

function checkWin(currentClass) {
   return winningCombos.some(combination => {
       return combination.every(index => {
           return boxElements[index].classList.contains(currentClass)
       });
   });
}