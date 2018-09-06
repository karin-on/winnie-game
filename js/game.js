import {Winnie} from "./winnie";
import {Honey} from "./honey";

function Game() {
    this.board = document.querySelector('#board').querySelectorAll('div');
    this.winnie = new Winnie();
    this.honey = new Honey();
    this.score = 0;
    this.scoreDisplay = document.querySelector('#score').querySelector('strong');
    this.on = true;

    this.index = function (x, y) {
        return x + (10 * y);
    }

    this.showWinnie = function () {
        this.hideVisibleWinnie();
        this.board[this.index(this.winnie.x, this.winnie.y)].classList.add('winnie');
    }

    this.hideVisibleWinnie = function () {
        let visibleWinnie = document.querySelector('.winnie');
        if (visibleWinnie) {
            visibleWinnie.classList.remove('winnie');
        }
    }

    this.showHoney = function () {
        this.board[this.index(this.honey.x, this.honey.y)].classList.add('honey');
    }

    this.turnWinnie = function (event) {
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

    this.moveWinnie = function () {
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

    this.checkHoneyCollision = function () {
        if (this.winnie.x === this.honey.x && this.winnie.y === this.honey.y) {
            let visibleHoney = document.querySelector('.honey');
            visibleHoney.classList.remove('honey');
            this.score += 1;
            this.scoreDisplay.innerText = this.score;
            this.honey = new Honey();
            this.showHoney();
        }
    }

    this.hideVisibleHoney = function () {
        let hideVisibleHoney = document.querySelector('.honey');
        hideVisibleHoney.classList.remove('honey');
    }

    this.gameOver = function () {
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

    this.startGame = function () {
        let self = this;

        this.idInterval = setInterval(() => {
            self.moveWinnie();
        }, 500)
    }
}

export {Game};