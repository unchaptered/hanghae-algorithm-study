function solution(str) {
  let answer = "";
  let result = str.split(" ").map(e => parseInt(e)).sort((a, b) => a - b);
  let min = result[0];
  let max = result[result.length - 1];
  return answer = `${min} ${max}`;
}

let str = "-1 -1";

console.log(solution(str));