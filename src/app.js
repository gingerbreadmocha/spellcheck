const ArticleChecker = require('./articlechecker')
const fs = require("fs");

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('Input file to spellcheck: ', (fileName) => {
    const theFile = fs.readFileSync(fileName);
    const fileWords = theFile.toString().split(" ");
    const arty = new ArticleChecker();
    const misspelled = arty.fileCheck(fileWords);
    
    let str = "You have misspelled the following: "
    for (const word of misspelled){
        str += word + " ";
    }
    console.log(str);
})