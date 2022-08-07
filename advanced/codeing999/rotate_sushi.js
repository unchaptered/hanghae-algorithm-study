let fs = require('fs');
let input = fs.readFileSync('data.txt').toString().split('\n'); //'/dev/stdin'

const temp = input[0].split(' ');
const N = Number(temp[0]);  //2~3000000
const d = Number(temp[1]);  //2~3000
const k = Number(temp[2]);  //2~3000 <=N
const c = Number(temp[3]);  //1~d
let sushi =[];

for (let i = 1; i < input.length; i++) {
        sushi.push(Number(input[i]));
}
//console.log(N, d, k, c, sushi);

function maxsushi(N, d, k, c, sushi){
    
}