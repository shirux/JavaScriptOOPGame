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
            new Phrase('Honey I am busy'),
            new Phrase('Do not worry be happy'),
            new Phrase('I love javascript'),
            new Phrase('That is one small step for man one giant leap for mankind'),
            new Phrase('SpaceX has launched javascript to outer space'), 
        ];
        this.activePhrase = null;
    }

    /**
     * Starts a game by hiding the overlay, selecting a random phrase and displaying it.
     */
    startGame() {
        const overlay = document.querySelector('#overlay');
        // Remove all previous game results classes
        overlay.classList.remove('win');
        overlay.classList.remove('lose');
        overlay.style.display = 'none';

        this.activePhrase = this.getRandomPhrase();
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

    /**
     * Handle the interaction with a pressed key. 
     * Checks if exist on phrase and display correct or wrong choices
     * @param {*} pressedKey Pressed Key
     */
    handleInteraction(pressedKey) {
        pressedKey.disabled = true;
        if (this.activePhrase.checkLetter(pressedKey.textContent)) {
            pressedKey.classList.add('chosen');
            this.activePhrase.showMatchedLetter(pressedKey.textContent);
            if (this.checkForWin()) {
                this.gameOver(true)
            }
        } else {
            pressedKey.classList.add('wrong');
            this.removeLife();
        }
    }

    /**
     * Replaces a live Heart with a lost Heart if player still have lifes.
     * Otherwise it will end game.
     */
    removeLife() {
        this.missed++;
        if(this.missed === 5) {
            this.gameOver(false);
        } else {
            let tries = document.querySelectorAll('.tries');
            let img = tries[this.missed - 1].firstChild;
            img.src = './images/lostHeart.png';
        }
    }

    /**
     * Check if phrase is already shown. 
     */
    checkForWin() {
        let hiddenOptions = document.querySelectorAll('li.hide');
        if (hiddenOptions.length === 0) {
            return true;
        }
        return false;
    }

    /**
     * Displays a game over message when player has no more lifes or wins the game.
     * Clear the boards
     * @param {*} state 
     */
    gameOver(state) {
        // Grabs overlay to put new message depending on state
        const overlay = document.querySelector('#overlay');
        let overlayH1 = overlay.querySelector('h1');
        if (state) {
            overlay.classList.add('win');
            overlayH1.textContent = 'Congratulations. You won!'
        } else {
            overlay.classList.add('lose');
            overlayH1.textContent = 'You lost. Better luck next time!'
        }
        overlay.style.display = 'inherit';
        this.clearBoard();

    }

    /**
     * Clears the board after a won or lost game
     */
    clearBoard() {
        // Removes phrase
        this.activePhrase = null;

        // Clears all hearts
        const hearts = document.querySelectorAll('.tries');
        hearts.forEach(heart => {
            let img = heart.firstChild;
            img.src = './images/liveHeart.png';
        });

        // Clears the phrase
        const ulPhrase = document.querySelector('#phrase ul');
        ulPhrase.innerHTML = '';

        // Resets all buttons
        const keyboard = document.querySelectorAll('#qwerty button');
        keyboard.forEach(key => {
            key.disabled = false;
            key.classList.remove('wrong');
            key.classList.remove('chosen');
        });
    }

 }