/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startButton = document.querySelector('#btn__reset');
startButton.addEventListener('click', e => {
    game = new Game();
    game.startGame();
});

/**
 * Event listener on parent node for every keyButton on click event
 */
const qwerty = document.querySelector('#qwerty');
qwerty.addEventListener('click', e => {
    //console.log(e.target.type);
    if (e.target.type === 'submit' && e.target.classList.contains('key')) {
        if (game) {
            game.handleInteraction(e.target);
        }
    }
});


/**
 * Event listener on keyboard with keydown event
 */
const keyboard = document.querySelectorAll('button.key');
document.body.addEventListener('keydown', e => {
    if(game && game.activePhrase) {
        for (let i = 0; i < keyboard.length; i++) {
            if (keyboard[i].textContent === e.key) {
                game.handleInteraction(keyboard[i]);
                break;
            }
        }
    }   
});


