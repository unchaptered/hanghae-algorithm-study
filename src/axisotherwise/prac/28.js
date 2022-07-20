// 최대공약수와 최소공배수
function solution(n, m) {
  // 최대공약수
  let answer = [];
  let num = n > m ? n : m;
  let max = 0;
  let min = 0;

  for (let i = 1; i <= num; i++) {
    if (n % i === 0 && m % i === 0) {
      max = i;
    }
  }
  // 최소공배수
  min = n * m / max;
  return answer = [max, min];
}

console.log(solution(2, 5));