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
     * 
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
     * 
     * @param {*} letter 
     */
    checkLetter(letter) {
        for (let i = 0; i < this.phrase.length; i ++) {
            if (this.phrase.charAt(i) === letter) return true;
        }
        return false;
    }

    /**
     * 
     * @param {*} letter 
     */
    showMatchedLetter(letter){
        let printing = `.${letter}`;
        console.log(printing);
        const matches = document.querySelectorAll(`.${letter}`);
        matches.forEach(match => {
            match.classList.remove('hide');
            match.classList.add('show');
        })
    }


 }