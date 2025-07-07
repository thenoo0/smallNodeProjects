const prompt = require('prompt-sync')();

const max = prompt('What is max number you want to check? ');



for (let i = 1; i <= max; i++) {
    let fizzBuzzWord = '';
    if (i % 3 === 0) {
        fizzBuzzWord = 'Fizz';
    }

    if (i % 5 === 0) {
        fizzBuzzWord = fizzBuzzWord + 'Buzz';
    }

    if (fizzBuzzWord) {
        console.log(i + ' ' + fizzBuzzWord);
    }

}