function solution(n) {
  let answer = 0;
  const result = n.toString().split("");
  result.forEach(e => {
    answer += parseInt(e);
  });
  return answer;
}

console.log(solution(123));