const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

// getSum

function getSum(a, b, c) {
    const aInt = parseInt(a);
    const bInt = parseInt(b);
    const cInt = parseInt(c);
   
    const arr = [aInt, bInt, cInt];
    arr.sort(function(a, b) {
        return b - a;
    });

    return arr[0] + arr[1];

}

// const sum = getSum(a, b, c);
// console.log(sum);

// isEven

const isEven = function(num) {
    if(typeof num !== 'number') {
        return null;
    }
    return num % 2 === 0;
}

// console.log(isEven(1), isEven(2), isEven('nanana'));

// showInfo

function showInfo(sum, even) {
    switch(even) {
        case null:
            console.log('Podany argument '+ sum + ' nie jest liczbą');
            break;
        case true:
            console.log('Podany argument '+ sum +' jest parzysty');
            break;
        case false:
            console.log('Podany argument '+ sum +' jest nieparzysty');
            break;
    }
}

const sum = getSum(a, b, c);
const even = isEven(sum);

showInfo(sum, even);


function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}