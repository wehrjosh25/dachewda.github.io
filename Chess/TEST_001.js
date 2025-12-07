import { Chess } from "https://cdn.jsdelivr.net/npm/chess.js@1.0.0/dist/esm/chess.js";

document.addEventListener("DOMContentLoaded", () => {

    // Initialize chess engine
    const game = new Chess();

    // Initialize board display
    const board = Chessboard('board1', {
        position: 'start',
        pieceTheme: 'img/chesspieces/wikipedia/{piece}.png',
        draggable: false,
        moveSpeed: 500,
        snapbackSpeed: 500
    });

    // Example opening: Ruy Lopez
    const ruyLopez = [
        "e4", "e5",
        "Nf3", "Nc6",
        "Bb5"
    ];

    let moveIndex = 0;

    function playMoves() {
        if (moveIndex >= ruyLopez.length) return;

        const move = ruyLopez[moveIndex];
        game.move(move);
        board.position(game.fen(), true);

        moveIndex++;
        setTimeout(playMoves, 700);
    }

    // Reset button
    document.getElementById("reset").addEventListener("click", () => {
        game.reset();
        board.start();
        moveIndex = 0;
    });

    // Play button
    document.getElementById("play").addEventListener("click", () => {
        game.reset();
        board.start();
        moveIndex = 0;
        playMoves();
    });
});
