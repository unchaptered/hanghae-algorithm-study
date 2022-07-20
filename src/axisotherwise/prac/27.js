// 예산
// arr 원소는 각 부서별 신청 금액
function solution(arr, budget) {
  let answer = 0;
  arr.sort((a, b) => a - b);
  console.log(arr);
  for (let v of arr) {
    if (budget < v) break;
    answer += 1;
    budget -= v;
  }
  return answer;
}

let arr = [1, 3, 2, 5, 4];
let budget = 9;

console.log(solution(arr, budget));