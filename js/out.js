/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./js/game.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n\n    const again = document.querySelector('#play-again');\n    again.addEventListener('click', function () {\n        window.location.reload();\n    });\n\n    document.addEventListener('keydown', function (event) {\n        game.turnWinnie(event);\n    });\n\n    const game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"Game\"]();\n    game.showWinnie();\n    game.showHoney();\n    game.startGame();\n});\n\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return Game; });\n/* harmony import */ var _winnie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./winnie */ \"./js/winnie.js\");\n/* harmony import */ var _honey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./honey */ \"./js/honey.js\");\n\n\n\n\nclass Game {\n    constructor() {\n        this.board = document.querySelector('#board').querySelectorAll('div');\n        this.winnie = new _winnie__WEBPACK_IMPORTED_MODULE_0__[\"Winnie\"]();\n        this.honey = new _honey__WEBPACK_IMPORTED_MODULE_1__[\"Honey\"]();\n        this.score = 0;\n        this.scoreDisplay = document.querySelector('#score').querySelector('strong');\n        this.on = true;\n        this.speed = 400;\n    }\n\n    index(x, y) {\n        return x + (10 * y);\n    }\n\n    showWinnie() {\n        this.hideVisibleWinnie();\n        this.board[this.index(this.winnie.x, this.winnie.y)].classList.add('winnie');\n    }\n\n    hideVisibleWinnie() {\n        const visibleWinnie = document.querySelector('.winnie');\n        if (visibleWinnie) {\n            visibleWinnie.classList.remove('winnie');\n        }\n    }\n\n    showHoney() {\n        this.board[this.index(this.honey.x, this.honey.y)].classList.add('honey');\n    }\n\n    hideVisibleHoney() {\n        let hideVisibleHoney = document.querySelector('.honey');\n        hideVisibleHoney.classList.remove('honey');\n    }\n\n    turnWinnie(event) {\n        if (event.which === 37) {\n            this.winnie.direction = 'left';\n        } else if (event.which === 38) {\n            this.winnie.direction = 'up';\n        } else if (event.which === 39) {\n            this.winnie.direction = 'right';\n        } else if (event.which === 40) {\n            this.winnie.direction = 'down';\n        }\n    }\n\n    moveWinnie() {\n        if (this.winnie.direction === \"right\") {\n            this.winnie.x += 1;\n        } else if (this.winnie.direction === \"left\") {\n            this.winnie.x -= 1;\n        } else if (this.winnie.direction === \"up\") {\n            this.winnie.y -= 1;\n        } else if (this.winnie.direction === \"down\") {\n            this.winnie.y += 1;\n        }\n\n        this.gameOver();\n        if (!this.on) {\n            return;\n        }\n        this.speedUp();\n        this.checkHoneyCollision();\n        this.showWinnie();\n    }\n\n    checkHoneyCollision() {\n        if (this.winnie.x === this.honey.x && this.winnie.y === this.honey.y) {\n            const visibleHoney = document.querySelector('.honey');\n            visibleHoney.classList.remove('honey');\n            this.score++;\n            this.scoreDisplay.innerText = this.score;\n            this.honey = new _honey__WEBPACK_IMPORTED_MODULE_1__[\"Honey\"]();\n            this.showHoney();\n        }\n    }\n\n    gameOver() {\n        if (this.winnie.x < 0 || this.winnie.x > 9 || this.winnie.y < 0 || this.winnie.y > 9) {\n            this.on = false;\n            this.hideVisibleWinnie();\n            this.hideVisibleHoney();\n            clearInterval(this.idInterval);\n\n            const overScore = document.querySelector('#over-score');\n            overScore.innerText = this.score;\n\n            const over = document.querySelector('#over');\n            over.classList.remove('invisible');\n        }\n    }\n\n    speedUp() {\n        if (this.score >= 30) {\n            clearInterval(this.idInterval);\n            this.speed = 100;\n        }\n\n        if (this.score !== 0 && this.score % 5 === 0) {\n            clearInterval(this.idInterval);\n            this.speed = this.speed - 50;\n        }\n\n        this.idInterval = setInterval(() => {\n            this.moveWinnie();\n            console.log(this.speed);\n        }, this.speed);\n\n        // if (this.score === 3) {\n        //     clearInterval(this.idInterval);\n        //\n        //     this.idInterval = setInterval(() => {\n        //         this.moveWinnie();\n        //         console.log('350');\n        //     }, 350);\n        // }\n        //\n        // if (this.score === 5) {\n        //     clearInterval(this.idInterval);\n        //\n        //     this.idInterval = setInterval(() => {\n        //         this.moveWinnie();\n        //         console.log('300');\n        //     }, 300);\n        // }\n    }\n\n    startGame() {\n        this.idInterval = setInterval(() => {\n            this.moveWinnie();\n        }, this.speed);\n    }\n}\n\n\n\n//# sourceURL=webpack:///./js/game.js?");

/***/ }),

/***/ "./js/honey.js":
/*!*********************!*\
  !*** ./js/honey.js ***!
  \*********************/
/*! exports provided: Honey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Honey\", function() { return Honey; });\nclass Honey {\n    constructor() {\n        this.x = Math.floor(Math.random() * 10);\n        this.y = Math.floor(Math.random() * 10);\n    }\n}\n\n\n\n//# sourceURL=webpack:///./js/honey.js?");

/***/ }),

/***/ "./js/winnie.js":
/*!**********************!*\
  !*** ./js/winnie.js ***!
  \**********************/
/*! exports provided: Winnie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Winnie\", function() { return Winnie; });\nclass Winnie {\n    constructor() {\n        this.x = 0;\n        this.y = 0;\n        this.direction = 'right';\n    }\n}\n\n\n\n//# sourceURL=webpack:///./js/winnie.js?");

/***/ })

/******/ });