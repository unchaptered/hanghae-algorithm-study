let fs = require('fs');
let input = fs.readFileSync('data.txt').toString().split('\n'); //'/dev/stdin'

const N = Number(input[0]);
const M =  Number(input[1]);
let broken = [];
if (M != 0) {
    const temp = input[2].split(' ');
    for (let i = 0; i < temp.length; i++) {
        broken.push(Number(temp[i]));
    }
}

function click(N, M, broken) {
    let su = 100;
    let temp = [];
    let count = Math.abs(N-su);
    let small = su;
    let big = su;
    if (M == 10) return count;
    for ( i = N; i >=0; i--){
        let j = i;
        while (j/10 != 0){
            temp.unshift( j%10);
            j = Math.floor(j/10);
        }
        if(!temp.some(v => {    
            return broken.includes(v);
            }) ){  
            small = i;
            
            break;
        }
        else temp = [];
    }
    temp = [];
    for ( i = N; i <=1000000; i++){ 
        let j = i;
        while (j/10 != 0){
            temp.unshift( j%10);
            j = Math.floor(j/10);
        }
        if(!temp.some(v => broken.includes(v)) ){  
            big = i;
            break;
        }
        else temp = [];
    }
    smallcount = small.toString().length + N-small;
    bigcount = big.toString().length + Math.abs(big -N);
    console.log(small, big, count, smallcount, bigcount);
    return Math.min(count, smallcount, bigcount);
}
console.log(click(N, M, broken));