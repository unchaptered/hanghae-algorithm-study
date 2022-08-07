// 소수 찾기
function solution(n) {
  let answer = 0;
  for (let i = 2; i <= n; i++) {
    if (prime(i)) answer++;
  }
  return answer;
}

function prime(int) {
  for (let i = 2; i <= Math.sqrt(int); i++) {
    if (int % i === 0) return false;
  }
  return true;
}

console.log(solution(10));