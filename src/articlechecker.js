const Dictionary = require('./dictionary');


class ArticleChecker{
    
    constructor(){
        this.dictionary = new Dictionary();
    }

    fileCheck(fileWords){

        const misspelledWords = [];

        for(let i = 0; i < fileWords.length; i++){
            const currentWord = fileWords[i].replace(/\W/g, '').toLowerCase();
            const check = this.dictionary.checkWord(currentWord);
            if(!check){
                misspelledWords.push(currentWord);
            } 
        }
        return misspelledWords;
    }
}

module.exports = ArticleChecker;
