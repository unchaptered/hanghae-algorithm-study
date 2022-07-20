// 소수 만들기
function solution(arr) {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (isPrime(arr[i] + arr[j] + arr[k])) {
          answer += 1;
        }
      }
    }
  }
  return answer;
}

function isPrime(int) {
  let flag = true;
  for (let i = 2; i <= Math.sqrt(int); i++) {
    if (int % i === 0) flag = false;
  }
  return flag;
}

let arr = [1, 2, 3, 4];

console.log(solution(arr));