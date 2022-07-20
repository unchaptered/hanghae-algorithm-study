function solution(str) {
  let answer = "";
  let result = str.split(" ").map(e => parseInt(e));
  let compare = result.sort((a, b) => a - b);
  let min = compare[0];
  let max = compare[compare.length - 1];
  return answer = `${min} ${max}`;
}

let str = "-1 -2 -3 -4";

console.log(solution(str));