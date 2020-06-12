/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/**
 * 
 */
 class Game {
    /**
     * 
     */
    constructor() {
        this.missed = 0;
        this.phrases = [
            'Honey I am busy',
            'Do not worry be happy',
            'I love javascript',
            'That is one small step for man one giant leap for mankind',
            'SpaceX has launched javascript to outer space'
        ];
        this.activePhrase = null;
    }

    /**
     * Starts a game by hiding the overlay, selecting a random phrase and displaying it.
     */
    startGame() {
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'none';

        this.activePhrase = new Phrase(this.getRandomPhrase());
        this.activePhrase.addPhraseToDisplay();
    }

    /**
     * Return a random phrase from the phrases array
     * @return {string} Random phrase
     */
    getRandomPhrase() {
        let random = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[random];
    }

    handleInteraction(pressedKey) {
        pressedKey.disabled = true;
        if (this.activePhrase.checkLetter(pressedKey.textContent)) {
            pressedKey.classList.add('chosen');
            this.activePhrase.showMatchedLetter(pressedKey.textContent);
            this.checkForWin();
        } else {
            pressedKey.classList.add('wrong');
            this.removeLife();
        }
    }

    removeLife() {
        //TODO
    }

    checkForWin() {
        //TODO
    }

    gameOver() {

    }

 }