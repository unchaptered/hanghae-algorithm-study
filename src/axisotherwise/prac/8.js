function solution(n) {
  let res = n.toString().split("");
  return res.map(e => e).sort((a, b) => b - a).join("");
}

console.log(solution(118372));