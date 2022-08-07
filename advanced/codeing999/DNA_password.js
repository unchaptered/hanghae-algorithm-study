//https://www.acmicpc.net/problem/12891
let fs = require('fs');
let input = fs.readFileSync('data.txt').toString().split('\n'); //'/dev/stdin'
let temp = input[0].split(' ');
const S = Number(temp[0]);
const P =  Number(temp[1]);
const str = input[1];
let nums = [];
temp = input[2].split(' ');
for (let i = 0; i < temp.length; i++) {
    nums.push(Number(temp[i]));
}
//console.log(S, P, str);
//console.log(S, P, str, nums); 이렇게 하면 왜 nums만 출력되지 위에껀 잘 출력됨.

function passwords(S, P, str, nums){
    let count = [0, 0, 0, 0];
    for (i = 0; i< str.length; i++){
        if (str[i] == 'A')
            count[0]++;
        else if (str[i] == 'C')
            count[1]++;
        else if (str[i] == 'G')
            count[2]++;
        else if (str[i] == 'T')
            count[3]++;
    }
    for (i = 0; i< count.length; i++){
        if (count[i] < nums[i])
            return 0;
        else{
            
        }
    }
    
    


}

console.log(passwords(S, P, str, nums));