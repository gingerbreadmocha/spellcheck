const fs = require("fs");

class Dictionary{

    constructor(){
        
        const dictionaryFile = fs.readFileSync("./google-10000-english-no-swears.txt");
        const dictionaryWords = dictionaryFile.toString().split("\n");
        this.dictionaryHash = {};

        for(var i = 0; i < dictionaryWords.length; i++){
            if(!this.dictionaryHash[dictionaryWords[i]]){
                this.dictionaryHash[dictionaryWords[i]] = true;
            }
        }

    }

    checkWord(word){
        //check word- returns true or false based on if spelling is correct
        if(!this.dictionaryHash[word.toLowerCase()]){
            return false;
        }
        return true;
    }

}

module.exports = Dictionary;

/*const poopy = new Dictionary();
console.log(poopy.checkWord("wubba"));
console.log(poopy.checkWord("the"));
console.log(poopy.checkWord("pooh"));
console.log(poopy.checkWord("run"));
console.log(poopy.checkWord("computer"));*/