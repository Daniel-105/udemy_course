// let count = 0;

// while (count <= 10) {
//     console.log(count);
//     count++;
// }

// const password = 'aTuaTiaDe4';

// let guess = prompt('Type the secret password');

// while (guess !== password) {
//     guess = prompt('Type the secret password');
// }
// console.log('CONGRATS!!')

let maxNum = parseInt(prompt('Enter your maximum number:'));


while (!maxNum) {

    maxNum = parseInt(prompt('Enter a valid number:'));
}

const targetNum = Math.floor((Math.random() * maxNum)) + 1;

let guess = prompt('Enter your guess');
let attemps = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attemps++
    if (guess > targetNum) {
        guess = prompt('Too high. Guess again');
    } else {
        guess = prompt('Too low. Guess again');  
    }
}
if (guess === 'q') {
    console.log('OK, You quit')
} else {
    console.log(`You got it! It took you ${attemps} guesses. The number is ${targetNum}`)

}

