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
        this.speed = 400;
    }

    index(x, y) {
        return x + (10 * y);
    }

    showWinnie() {
        this.hideVisibleWinnie();
        this.board[this.index(this.winnie.x, this.winnie.y)].classList.add('winnie');
    }

    hideVisibleWinnie() {
        const visibleWinnie = document.querySelector('.winnie');
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
        this.speedUp();
        this.checkHoneyCollision();
        this.showWinnie();
    }

    checkHoneyCollision() {
        if (this.winnie.x === this.honey.x && this.winnie.y === this.honey.y) {
            const visibleHoney = document.querySelector('.honey');
            visibleHoney.classList.remove('honey');
            this.score++;
            this.scoreDisplay.innerText = this.score;
            this.honey = new Honey();
            this.showHoney();
        }
    }

    speedUp() {
        const scoreBreakPoints = [10, 20, 30, 40, 50];
        const speeds = [350, 300, 250, 200, 150];

        scoreBreakPoints.forEach((el,i) => {
            if (this.score === el) {
                clearInterval(this.idInterval);
                this.speed = speeds[i];
                this.startGame();
            }
        });
    }

    gameOver() {
        if (this.winnie.x < 0 || this.winnie.x > 9 || this.winnie.y < 0 || this.winnie.y > 9) {
            this.on = false;
            this.hideVisibleWinnie();
            this.hideVisibleHoney();
            clearInterval(this.idInterval);

            const overScore = document.querySelector('#over-score');
            overScore.innerText = this.score;

            const over = document.querySelector('#over');
            over.classList.remove('invisible');
        }
    }

    startGame() {
        this.idInterval = setInterval(() => {
            this.moveWinnie();
        }, this.speed);
    }
}

export {Game};