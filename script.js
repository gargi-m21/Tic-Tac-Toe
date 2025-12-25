const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let turnX = true;
let gameOver = false;

const cells = document.querySelectorAll('.cell');
const msg = document.querySelector('.msg');
const btn = document.querySelector('.reset');
const board = document.querySelector('.game');

const isDraw = () => {
    return [...cells].every(cell => cell.textContent !== "");
};

cells.forEach((cell) => {
    cell.addEventListener('click', () => {
        if (cell.disabled || gameOver) return;

        if (turnX) {
            cell.textContent = 'X';
            cell.style.color = "#13315cd0";
            msg.textContent = "Player 0's turn";
        } else {
            cell.textContent = '0';
            cell.style.color = "#8da9c4";
            msg.textContent = "Player X's turn";
        }

        cell.disabled = true;
        turnX = !turnX;

        if (checkWinner()) return;

        if (isDraw()) {
            msg.textContent = "It's a Draw!";
            btn.textContent = "New Game";
            cells.forEach(cell => cell.disabled = true);
            board.classList.add('game-over');
            gameOver = true;
        }
    });
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        const val1 = cells[pattern[0]].textContent;
        const val2 = cells[pattern[1]].textContent;
        const val3 = cells[pattern[2]].textContent;

        if (val1 && val1 === val2 && val2 === val3) {
            msg.textContent = `Player ${val1} wins!`;

            cells[pattern[0]].classList.add('winner');
            cells[pattern[1]].classList.add('winner');
            cells[pattern[2]].classList.add('winner');

            btn.textContent = "New Game";
            cells.forEach(cell => cell.disabled = true);
            board.classList.add('game-over');

            gameOver = true;
            return true; 
        }
    }
    return false;
};



btn.addEventListener('click', () => {
    turnX = true;
    gameOver = false;
    cells.forEach(cell => {
        cell.textContent = '';
        cell.disabled = false;
        cell.classList.remove('winner');
    });
    msg.textContent = "Player X's turn";
    btn.textContent = "Reset";
    board.classList.remove('game-over');
});