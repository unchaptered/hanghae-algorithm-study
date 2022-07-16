function solution(n) {
  let answer = 0;
  while (answer < 501) {
    if (n === 1) return answer;
    n = n % 2 === 0 ? n / 2 : (n * 3) + 1;
    answer += 1;
  }
  return -1;
}

console.log(solution(626331));