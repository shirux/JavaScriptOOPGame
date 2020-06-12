/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startButton = document.querySelector('#btn__reset');
startButton.addEventListener('click', e => {
    game = new Game();
    game.startGame();
});

const qwerty = document.querySelector('#qwerty');
qwerty.addEventListener('click', e => {
    //console.log(e.target.type);
    if (e.target.type === 'submit' && e.target.classList.contains('key')) {
        if (game) {
            game.handleInteraction(e.target);
        }
    }
})
