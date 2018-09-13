import {Winnie} from "./winnie";
import {Honey} from "./honey";


class Game {
    constructor() {
        this.board = document.querySelector('#board').querySelectorAll('div');
        this.winnie = new Winnie();
        this.honey = new Honey();
        this.score = 0;
        this.scoreDisplay = document.querySelector('#score').querySelector('strong');
        this.on = true;
    }

    index(x, y) {
        return x + (10 * y);
    }

    showWinnie() {
        this.hideVisibleWinnie();
        this.board[this.index(this.winnie.x, this.winnie.y)].classList.add('winnie');
    }

    hideVisibleWinnie() {
        let visibleWinnie = document.querySelector('.winnie');
        if (visibleWinnie) {
            visibleWinnie.classList.remove('winnie');
        }
    }

    showHoney() {
        this.board[this.index(this.honey.x, this.honey.y)].classList.add('honey');
    }

    hideVisibleHoney() {
        let hideVisibleHoney = document.querySelector('.honey');
        hideVisibleHoney.classList.remove('honey');
    }

    turnWinnie(event) {
        if (event.which === 37) {
            this.winnie.direction = 'left';
        } else if (event.which === 38) {
            this.winnie.direction = 'up';
        } else if (event.which === 39) {
            this.winnie.direction = 'right';
        } else if (event.which === 40) {
            this.winnie.direction = 'down';
        }
    }

    moveWinnie() {
        if (this.winnie.direction === "right") {
            this.winnie.x += 1;
        } else if (this.winnie.direction === "left") {
            this.winnie.x -= 1;
        } else if (this.winnie.direction === "up") {
            this.winnie.y -= 1;
        } else if (this.winnie.direction === "down") {
            this.winnie.y += 1;
        }

        this.gameOver();
        if (!this.on) {
            return;
        }
        this.checkHoneyCollision();
        this.showWinnie();
    }

    checkHoneyCollision() {
        if (this.winnie.x === this.honey.x && this.winnie.y === this.honey.y) {
            let visibleHoney = document.querySelector('.honey');
            visibleHoney.classList.remove('honey');
            this.score += 1;
            this.scoreDisplay.innerText = this.score;
            this.honey = new Honey();
            this.showHoney();
        }
    }

    gameOver() {
        if (this.winnie.x < 0 || this.winnie.x > 9 || this.winnie.y < 0 || this.winnie.y > 9) {
            this.on = false;
            this.hideVisibleWinnie();
            this.hideVisibleHoney();
            clearInterval(this.idInterval);

            let overScore = document.querySelector('#over-score');
            overScore.innerText = this.score;

            let over = document.querySelector('#over');
            over.classList.remove('invisible');
        }
    }

    startGame() {
        let self = this;

        this.idInterval = setInterval(() => {
            self.moveWinnie();
        }, 400)
    }
}

export {Game};