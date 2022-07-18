// 3진법 뒤집기
function solution(int) {
  return parseInt(int.toString(3).split("").reverse().join(""), 3);
}

console.log(solution(125));