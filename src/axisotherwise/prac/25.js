// 약수의 개수와 플러스
function solution(left, right) {
  let answer = 0;
  let total = 0;
  for (let i = left; i <= right; i++) {
    total = compare(i);
    total % 2 === 0 ? answer += i : answer -= i;
  }
  return answer;
}

function compare(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      total++;
    }
  }
  return total;
}

console.log(solution(13, 17));