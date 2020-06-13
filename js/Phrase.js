/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 /**
  * Phrase class
  */
 class Phrase {
     /**
      * 
      * @param {*} phrase 
      */
    constructor(text) {
        this.phrase = text.toLowerCase();
    }

    /**
     * Renders the hidden spaces for the phrase
     */
    addPhraseToDisplay() {
        const ulPhrase = document.querySelector('#phrase ul');
        ulPhrase.innerHTML = '';

        [...this.phrase].forEach(letter => {
            const li = document.createElement('li');
            li.textContent = letter;
            if (letter === ' ') {
                li.classList.add('space');
            } else {
                li.classList.add('hide');
                li.classList.add('letter');
                li.classList.add(letter);
            }
            ulPhrase.appendChild(li);
        });
    }

    /**
     * Checks if a character exists on the phrase
     * @param {char} char Character to check on phrase
     * @returns {boolean} Indicator whether the character exist on phrase or not
     */
    checkLetter(char) {
        for (let i = 0; i < this.phrase.length; i ++) {
            if (this.phrase.charAt(i) === char) return true;
        }
        return false;
    }

    /**
     * Displays all hidden options that contains that character
     * @param {char} char Character to show
     */
    showMatchedLetter(char){
        let printing = `.${char}`;
        console.log(printing);
        const matches = document.querySelectorAll(`.${char}`);
        matches.forEach(match => {
            match.classList.remove('hide');
            match.classList.add('show');
        });
    }
 }