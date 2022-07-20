// 문자열 내림차순으로 배치하기
function solution(str) {
  // sort(): 대문자 > 소문자
  return str.split("").sort().reverse().join("");
}

let str = "Zbcdefg";

console.log(solution(str));