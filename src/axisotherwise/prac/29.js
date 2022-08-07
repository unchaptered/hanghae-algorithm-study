// k 수
function solution(arr, result) {
  let answer = [];

  for (let i = 0; i < result.length; i++) {
    let start = result[i][0];
    let end = result[i][1];
    let k = result[i][2];
    let copied = arr.slice(start - 1, end);
    copied.sort((a, b) => a - b);
    answer.push(copied[k - 1]);    
  }

  return answer;
}

let arr = [1, 5, 2, 6, 3, 7, 4];
let result = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3]
];

console.log(solution(arr, result));