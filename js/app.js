import {Game} from "./game";

document.addEventListener("DOMContentLoaded", function () {

    const again = document.querySelector('#play-again');
    again.addEventListener('click', function () {
        window.location.reload();
    });

    document.addEventListener('keydown', function (event) {
        game.turnWinnie(event);
    });

    const game = new Game();
    game.showWinnie();
    game.showHoney();
    game.startGame();
});
