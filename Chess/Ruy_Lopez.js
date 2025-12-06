// Initialize chess.js logic
const game = new Chess();

// Initialize chessboard.js
const board = Chessboard('board', {
    position: 'start',
    pieceTheme: 'https://cdnjs.cloudflare.com/ajax/libs/chessboard-js/1.0.0/img/chesspieces/wikipedia/{piece}.png',
    draggable: false,
    moveSpeed: 500,
    snapbackSpeed: 500
});

// Ruy Lopez move list
const ruyLopez = [
    "e4", "e5",
    "Nf3", "Nc6",
    "Bb5"
];

let moveIndex = 0;

// Play animation
async function playMoves() {
    if (moveIndex >= ruyLopez.length) return;

    const move = ruyLopez[moveIndex];

    // Make move legally
    game.move(move);

    // Update board visually
    board.position(game.fen(), true);

    moveIndex++;

    // Continue automatically
    setTimeout(playMoves, 700);
}

// Reset
document.getElementById("reset").addEventListener("click", () => {
    game.reset();
    board.start();
    moveIndex = 0;
});

// Play
document.getElementById("play").addEventListener("click", () => {
    moveIndex = 0;
    game.reset();
    board.start();
    playMoves();
});
