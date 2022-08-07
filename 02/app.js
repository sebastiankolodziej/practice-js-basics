
/* rozwiązanie z pętlą for */
const x = Number(prompt('Podaj cyfrę z przedziału od 0 do 10!'));
if(x >= 1 && x <=9) {
    for(let i = 1; i <= 9; i++) {
        const result = x * i;
        console.log(i + ' * ' + x + ' = ' + result);
    }
} else {2
    console.log('Podałeś niewłaściwe dane!');
}

/* rozwiązanie z pętlą while  */

// const a = Number(prompt('Podaj "a" z przedziału od 0 do 10!'));
// const n = Number(prompt('Podaj "n" z przedziału od 0 do 10!'));

if(a >= 0 && a <=10 && n >= 0 && n <=10 ) {

let i = 0;
let result = 1;
let info = '';
while(i < n) {
    result = result * a;
    
    if(i > 0) {
        info = info + ' * ';
    }
    info = info + a;
    i++;
    }

    info = info + ' = ' + result;

    console.log(result);
    console.log(info);
} else {
    console.log('Podałeś niewłaściwe dane!');
}
