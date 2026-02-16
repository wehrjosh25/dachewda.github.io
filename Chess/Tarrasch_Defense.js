import { Chess } from "https://cdn.jsdelivr.net/npm/chess.js@1.0.0/dist/esm/chess.js";

document.addEventListener("DOMContentLoaded", () => {
    // Chess instances
    const game1 = new Chess();
    const game2 = new Chess();
    const game3 = new Chess();
    const game4 = new Chess();
    const game5 = new Chess();
    const game6 = new Chess();

    // Boards
    const board1 = Chessboard('TD_000', {
        position: 'start',
        pieceTheme: 'img/chesspieces/wikipedia/{piece}.png',
        draggable: false
    });
    const board2 = Chessboard('TD_Agincourt', {
        position: 'start',
        pieceTheme: 'img/chesspieces/wikipedia/{piece}.png',
        draggable: false
    });
    const board3 = Chessboard('TD_ML', {
        position: 'start',
        pieceTheme: 'img/chesspieces/wikipedia/{piece}.png',
        draggable: false
    });
    const board4 = Chessboard('TD_4dxc5', {
        position: 'start',
        pieceTheme: 'img/chesspieces/wikipedia/{piece}.png',
        draggable: false
    });
    const board5 = Chessboard('TD_4e3', {
        position: 'start',
        pieceTheme: 'img/chesspieces/wikipedia/{piece}.png',
        draggable: false
    });
    const board6 = Chessboard('TD_4Nf3', {
        position: 'start',
        pieceTheme: 'img/chesspieces/wikipedia/{piece}.png',
        draggable: false
    });
    
    // Automatic Resizing
    window.addEventListener('resize', () => {
    board1.resize();
    board2.resize();
    board3.resize();
    board4.resize();
    board5.resize();
    board6.resize();
    });

    // Moves
    const moves1 = ["d4", "d5", "c4", "e6", "Nc3", "c5"];
    const moves2 = ["c4", "e6", "Nc3", "d5", "d4", "c5"];
    const moves3 = ["d4", "d5", "c4", "e6", "Nc3", "c5", "cxd5", "exd5"];
    const moves4 = ["d4", "d5", "c4", "e6", "Nc3", "c5", "dxc5", "d4", "Na5", "Bd7"];
    const moves5 = ["d4", "d5", "c4", "e6", "Nc3", "c5", "e3", "Nf6"];
    const moves6 = ["d4", "d5", "c4", "e6", "Nc3", "c5", "Nf3", "cxd4", "Nxd4", "e5"];

        // Pre-Loaded Moves
        let index3 = 0, index4 = 0, index5 = 0, index6 = 0;

        // ---- PRELOAD TO MOVE 6 ----
        function preloadToMove(game, board, moves, moveNumber) {
            game.reset();
            for (let i = 0; i < moveNumber; i++) {
                game.move(moves[i]);
            }
            board.position(game.fen());
        }

        // Preload boards on page load
        preloadToMove(game3, board3, moves3, 6);
        preloadToMove(game4, board4, moves4, 6);
        preloadToMove(game5, board5, moves5, 6);
        preloadToMove(game6, board6, moves6, 6);

        index3 = 6;
        index4 = 6;
        index5 = 6;
        index6 = 6;


    // Boards 1-2
    let index1 = 0, index2 = 0;

    function playBoards_1() {
        if (index1 < moves1.length) {
            game1.move(moves1[index1]);
            board1.position(game1.fen(), true);
            index1++;
        }
        if (index2 < moves2.length) {
            game2.move(moves2[index2]);
            board2.position(game2.fen(), true);
            index2++;
        }

        // Continue if any moves remain
        if (index1 < moves1.length || index2 < moves2.length) {
            setTimeout(playBoards_1, 700);
        }
    }

        // Play Button 1
        document.getElementById("play_1").addEventListener("click", () => {
            // Reset all boards
            game1.reset(); index1 = 0; board1.start();
            game2.reset(); index2 = 0; board2.start();

            playBoards_1();
        });

        // Reset Button 1
        document.getElementById("reset_1").addEventListener("click", () => {
            game1.reset(); index1 = 0; board1.start();
            game2.reset(); index2 = 0; board2.start();

        });


    // Boards 3-4
    function playBoards_2() {
        if (index3 < moves3.length) {
            game3.move(moves3[index3]);
            board3.position(game3.fen(), true);
            index3++;
        }
        if (index4 < moves4.length) {
            game4.move(moves4[index4]);
            board4.position(game4.fen(), true);
            index4++;
        }

        // Continue if any moves remain
        if (index3 < moves3.length || index4 < moves4.length) {
            setTimeout(playBoards_2, 700);
        }
    }

        // Play button
        document.getElementById("play_2").addEventListener("click", () => {
        // Reset all boards
        game3.reset(); 
        game4.reset(); 
    
        // ---- PRELOAD FIRST 4 MOVES ----
        for (let i = 0; i < 4; i++) {
            game3.move(moves3[i]);
            game4.move(moves4[i]);
        }

        // Update boards instantly to move 4 position
        board3.position(game3.fen());
        board4.position(game4.fen());

        // Start animation from move 4
        index3 = 4;
        index4 = 4;

        playBoards_2();
    });

    // Reset button
    document.getElementById("reset_2").addEventListener("click", () => {
        preloadToMove(game3, board3, moves3, 6);
        preloadToMove(game4, board4, moves4, 6);
        index3 = 6;
        index4 = 6;
    });


    // Boards 5-6
    function playBoards_3() {
        if (index5 < moves5.length) {
            game5.move(moves5[index5]);
            board5.position(game5.fen(), true);
            index5++;
        }
        if (index6 < moves6.length) {
            game6.move(moves6[index6]);
            board6.position(game6.fen(), true);
            index6++;
        }

        // Continue if any moves remain
        if (index5 < moves5.length || index6 < moves6.length) {
            setTimeout(playBoards_3, 700);
        }
    }

    // Play button
    document.getElementById("play_3").addEventListener("click", () => {
        preloadToMove(game5, board5, moves5, 6);
        preloadToMove(game6, board6, moves6, 6);
        index5 = 6;
        index6 = 6;

        playBoards_3();
    });

    // Reset button
    document.getElementById("reset_3").addEventListener("click", () => {
        game5.reset(); index5 = 0; board5.start();
        game6.reset(); index6 = 0; board6.start();
    });

});
