// Задание 1.1
let x = 'А роза упала на лапу Азора'.replaceAll(' ', '').toLowerCase();
isPalindrome(x);

function isPalindrome(str) {
    let reverseStr = str.split('').reverse().join('');
    console.log('Задание 1.1');
    if (str == reverseStr) {
        console.log('Палиндром');
    } else {
        console.log('Не палиндром');
    }
}

// Задание 1.2
fizzBuzz();

function fizzBuzz() {
    console.log('Задание 1.2')
    for (let i = 1; i <= 100; i++){
        if ((i % 3 == 0) && (i % 5 == 0)) {
            console.log('FizzBuzz');
        } else if (i % 3 == 0){
            console.log('Fizz');
        } else if (i % 5 == 0){
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

// Задание 1.3
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
let s = 3;
chunkArray(arr, s);

function chunkArray(array, size) {
    console.log('Задание 1.3')
    const newArr = [];
    for (let i = 0; i < array.length; i += size){
        const chunk = array.slice(i, i + size);
        newArr.push(chunk);
    }
    console.log(newArr);
}