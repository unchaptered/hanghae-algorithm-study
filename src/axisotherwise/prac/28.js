// 최대공약수와 최소공배수
function solution(n, m) {
  // one 최대공약수
  let one = [];
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      one.push(i);
    }
  }
  for (let i = 1; i < m; i++) {
    if (m % i === 0) {
      one.push(i);
    }
  }
  let oneResult = one.filter((e, i) => one.indexOf(e) !== i);
  console.log(oneResult);
}

console.log(solution(3, 12));