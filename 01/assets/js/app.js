const a = '4.2';
const b = 9;

console.log(a, b);

console.log(typeof a, typeof b);

const result1 = Number(a) + b;
const result2 = (a) - b;
const result3 = (a) * b;
const result4 = (a) / b;

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

if (result1 > 20) {
    console.log(result1 + ' jest większy od 20');
} else {
    console.log(result1 + ' jest mniejsze lub równe 20!');
}

if (result2 > 20) {
    console.log(result2 + ' jest większy od 20');
} else {
    console.log(result2 + ' jest mniejsze lub równe 20!');
}

if (result3 > 20) {
    console.log(result3 + ' jest większy od 20');
} else {
    console.log(result3 + ' jest mniejsze lub równe 20!');
}

if (result4 > 20) {
    console.log(result4 + ' jest większy od 20');
} else {
    console.log(result4 + ' jest mniejsze lub równe 20!');
}

// const resultAll = [result1, result2, result3, result4];

// resultAll.forEach(function(res) {
//     if(res > 20) {
//         console.log(res + ' jest większy od 20');
//     } else {
//         console.log(res + 'jest mniejsze lub równe 20!');
//     }
// })