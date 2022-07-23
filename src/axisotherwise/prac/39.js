// 수의 표현
function solution(n) {
  // 자연수의 약수 중 홀수인 수의 개수
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && i % 2 === 1) {
      answer += 1;
    }
  }
  return answer;
}

console.log(solution(15));