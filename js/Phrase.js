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
        this.phrase = text;
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
        let result = [];
        [...this.phrase].forEach((char, index) => {
            if (char === letter) result.push(index);
        });
        return result;
    }

    /**
     * 
     * @param {*} letter 
     */
    showMatchedLetter(letter){
        const matches = document.querySelectorAll(`.${letter}`);
        matches.forEach(match => {
            match.classList.remove('hide');
            match.classList.add('show');
        })
    }


 }