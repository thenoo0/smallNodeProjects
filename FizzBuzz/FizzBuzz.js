//FizzBuzz is a simple programming challenge that involves printing numbers from 1 to a specified limit (often 100),
//but replacing multiples of 3 with "Fizz", multiples of 5 with "Buzz", 
//and multiples of both 3 and 5 with "FizzBuzz".


for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + ' FizzBuzz');
    } else if (i % 3 === 0) {
        console.log(i + ' Fizz');
    } else if (i % 5 === 0) {
        console.log(i + ' Buzz');
    }
}
