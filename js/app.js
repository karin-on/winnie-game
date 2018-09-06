import {Game} from "./game";

document.addEventListener("DOMContentLoaded", function () {

    let again = document.querySelector('#play-again');
    again.addEventListener('click', function () {
        window.location.reload();
    });

    document.addEventListener('keydown', function (event) {
        game.turnWinnie(event);
    });

    let game = new Game();
    game.showWinnie();
    game.showHoney();
    game.startGame();

});
