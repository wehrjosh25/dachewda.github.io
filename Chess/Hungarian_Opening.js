import { Chess } from "https://cdn.jsdelivr.net/npm/chess.js@1.0.0/dist/esm/chess.js";

document.addEventListener("DOMContentLoaded", () => {
    // Chess instances
    const game1 = new Chess();
    const game2 = new Chess();
    const game3 = new Chess();
    const game4 = new Chess();
    const game5 = new Chess();
    const game6 = new Chess();
    const game7 = new Chess();
    const game8 = new Chess();

    // Boards
    const board1 = Chessboard('e4-d5_000', {
        position: 'start',
        pieceTheme: 'img/chesspieces/wikipedia/{piece}.png',
        draggable: false
    });
    const board2 = Chessboard('d4-e5_000', {
        position: 'start',
        pieceTheme: 'img/chesspieces/wikipedia/{piece}.png',
        draggable: false
    });
    const board3 = Chessboard('c4-d5_000', {
        position: 'start',
        pieceTheme: 'img/chesspieces/wikipedia/{piece}.png',
        draggable: false
    });
    const board4 = Chessboard('Nf3-e5_000', {
        position: 'start',
        pieceTheme: 'img/chesspieces/wikipedia/{piece}.png',
        draggable: false
    });
    const board5 = Chessboard('c5_000', {
        position: 'start',
        pieceTheme: 'img/chesspieces/wikipedia/{piece}.png',
        draggable: false
    });
    const board6 = Chessboard('d5_000', {
        position: 'start',
        pieceTheme: 'img/chesspieces/wikipedia/{piece}.png',
        draggable: false
    });
    const board7 = Chessboard('e5_000', {
        position: 'start',
        pieceTheme: 'img/chesspieces/wikipedia/{piece}.png',
        draggable: false
    });
    const board8 = Chessboard('f5_000', {
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
    board7.resize();
    board8.resize();
    });

    // Moves
    const moves1 = ["e4", "d5", "exd5"];
    const moves2 = ["d4", "e5", "dxe5"];
    const moves3 = ["c4", "d5", "cxd5"];
    const moves4 = ["Nf3", "e5", "Nxe5"];
    const moves5 = ["g3", "c5", "Bg2", "Nc6", "c4", "g6", "Nc3", "Bg7", "Nf3", "d6", "O-O"];
    const moves6 = ["g3", "d5", "Nf3", "Nf6", "Bg2", "c6", "O-O"];
    const moves7 = ["g3", "e5", "c4", "Nf6", "Bg2", "d5", "cxd5", "Nxd5", "Nc3", "Nb6", "Nf3", "Nc6", "O-O"];
    const moves8 = ["g3", "f5", "Bg2", "Nf6", "c4", "g6", "d4", "Bg7", "Nf3", "O-O", "O-O"];


    // Boards 1-4
    let index1 = 0, index2 = 0, index3 = 0, index4 = 0;

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
        if (index1 < moves1.length || index2 < moves2.length || index3 < moves3.length || index4 < moves4.length) {
            setTimeout(playBoards_1, 700);
        }
    }

    // Play button
    document.getElementById("play_1").addEventListener("click", () => {
        // Reset all boards
        game1.reset(); index1 = 0; board1.start();
        game2.reset(); index2 = 0; board2.start();
        game3.reset(); index3 = 0; board3.start();
        game4.reset(); index4 = 0; board4.start();

        playBoards_1();
    });

    // Reset button
    document.getElementById("reset_1").addEventListener("click", () => {
        game1.reset(); index1 = 0; board1.start();
        game2.reset(); index2 = 0; board2.start();
        game3.reset(); index3 = 0; board3.start();
        game4.reset(); index4 = 0; board4.start();
    });


    // Boards 5-8
    let index5 = 0, index6 = 0, index7 = 0, index8 = 0;

    function playBoards_2() {
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
        if (index7 < moves7.length) {
            game7.move(moves7[index7]);
            board7.position(game7.fen(), true);
            index7++;
        }
        if (index8 < moves8.length) {
            game8.move(moves8[index8]);
            board8.position(game8.fen(), true);
            index8++;
        }

        // Continue if any moves remain
        if (index5 < moves5.length || index6 < moves6.length || index7 < moves7.length || index8 < moves8.length) {
            setTimeout(playBoards_2, 700);
        }
    }

    // Play button
    document.getElementById("play_2").addEventListener("click", () => {
        // Reset all boards
        game5.reset(); index5 = 0; board5.start();
        game6.reset(); index6 = 0; board6.start();
        game7.reset(); index7 = 0; board7.start();
        game8.reset(); index8 = 0; board8.start();

        playBoards_2();
    });

    // Reset button
    document.getElementById("reset_2").addEventListener("click", () => {
        game5.reset(); index5 = 0; board5.start();
        game6.reset(); index6 = 0; board6.start();
        game7.reset(); index7 = 0; board7.start();
        game8.reset(); index8 = 0; board8.start();
    });

});
