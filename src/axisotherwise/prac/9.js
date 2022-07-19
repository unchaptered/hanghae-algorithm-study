// Number.isInteger: 정수 판별
// Math.pow: 1 값 2 제곱할 값 
function solution(n) {
  let x = Math.sqrt(n);
  console.log(x);
  const result = Number.isInteger(x) ? Math.pow(x + 1, 2) : -1;
  return result;
}

console.log(solution(3));
console.log(solution(4));

