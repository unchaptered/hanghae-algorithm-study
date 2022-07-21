// 나머지가 1이 되는 수 찾기
function solution(n) {
  let answer = [];
  for (let i = 0; i < 1000000; i++) {
    if (n % i === 1) {
      answer.push(i);
    } 
  }
  return answer.sort((a, b) => a - b)[0];
}

console.log(solution(12));