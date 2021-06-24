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

const maxNum = 4;

let guess = prompt('Welcome! Enter your max number:');

let times = guess

while (true) {
    if (guess > maxNum) {
        guess = prompt('Too high. Guess again');
        times++
    } else if (guess < maxNum) {
        guess = prompt('Too low. Guess again');
        times++
    } else if (guess === maxNum){
        console.log(`Great! the number is ${maxNum} You tried ${times} times`)
        times++
    } else if (guess === 'q'){
        console.log(`You have quit`)
        break;
    }
    
}



