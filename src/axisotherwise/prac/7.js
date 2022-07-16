function solution(n) {
  let answer = [];
  const result = n.toString().split("");
  result.map(e => {
    answer.push(parseInt(e));
  });
  return answer.reverse();
}

console.log(solution(12345));