// 시저 암호 
function solution(str, n) {
  let trim = str.split(" ").join("");
  let result = trim.split("");
  let code = [];
  result.map(e => {
    code.push(e.charCodeAt(0));
  });
  console.log(code);
  let test = code.map(e => {
    return String.fromCharCode(e + n);
  });
  console.log(test);
}

let str = "a B z";

console.log(solution(str, 4));