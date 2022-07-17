// 나누어 떨어지는 수
function solution(divisor, arr) {
  let answer = [];
  arr.filter(e => {
    if (e % divisor === 0) {
      answer.push(e);
    }
    if (answer.length === 0) return answer.push(-1);
  });
  return answer.sort((a, b) => a - b);
}

let arr = [3, 2, 6];

console.log(solution(10, arr));
