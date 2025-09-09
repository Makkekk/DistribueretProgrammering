const board = document.getElementById('board');
const info = document.getElementById('info');
const resetBtn = document.getElementById('reset');

let cells = Array(9).fill('');
let currentPlayer = 'X';
let gameActive = true;

const winningCombinations = [
    [0,1,2], [3,4,5], [6,7,8], // rows
    [0,3,6], [1,4,7], [2,5,8], // columns
    [0,4,8], [2,4,6]           // diagonals
];

function handleCellClick(e) {
    const index = e.target.dataset.index;

    if (cells[index] !== '' || !gameActive) return;

    cells[index] = currentPlayer;
    e.target.textContent = currentPlayer;

    if (checkWin()) {
        info.textContent = `Player ${currentPlayer} wins!`;
        gameActive = false;
        return;
    }

    if (cells.every(cell => cell !== '')) {
        info.textContent = "It's a tie!";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    info.textContent = `Player ${currentPlayer}'s turn`;
}

function checkWin() {
    return winningCombinations.some(combination => {
        return combination.every(index => cells[index] === currentPlayer);
    });
}

function resetGame() {
    cells.fill('');
    document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
    gameActive = true;
    info.textContent = `Player ${currentPlayer}'s turn`;
}

// Event listeners
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
resetBtn.addEventListener('click', resetGame);
