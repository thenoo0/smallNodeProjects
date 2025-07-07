//FizzBuzz is a simple programming challenge that involves printing numbers from 1 to a specified limit (often 100),
//but replacing multiples of 3 with "Fizz", multiples of 5 with "Buzz", 
//and multiples of both 3 and 5 with "FizzBuzz".

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