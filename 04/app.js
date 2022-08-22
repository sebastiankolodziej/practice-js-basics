
function createArray(min, max) {
    const arr = [];
    for(let i=0; i<20; i++){
        const num = Math.round((Math.random() * (max - min)) + min);
        arr.push(num);
    }

    return arr;
}


function getLargest(arr) {
    arr.sort(function(a, b){
        return b - a;
    });
    
    return arr.slice(0, 10);
}


function getAvg(arr) {
    if(arr.length === 0) {
        return 0;
    }

    const sumWithInitial = arr.reduce(function(previousValue, currentValue) {
        return previousValue + currentValue;
    }, 0);

    return sumWithInitial / arr.length;
}


const arr = createArray(10, 200);
const largest = getLargest(arr);
const avg = getAvg(largest);

console.log(arr, largest, avg);