// 수 문자열과 영단어
// function solution(s) {
//   let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
//   var answer = s;

//   for(let i=0; i< numbers.length; i++) {
//       let arr = answer.split(numbers[i]);
//       answer = arr.join(i);
//   }

//   return Number(answer);
// }
function solution(str) {
  let answer = 0;

  str = str.replace(/zero/g, 0);
  console.log(str);
  str = str.replace(/one/g, 1);
  console.log(str);
  str = str.replace(/two/g, 2);
  console.log(str);
  str = str.replace(/three/g, 3);
  console.log(str);
  str = str.replace(/four/g, 4);
  console.log(str);
  str = str.replace(/five/g, 5);
  console.log(str);
  str = str.replace(/six/g, 6);
  console.log(str);
  str = str.replace(/seven/g, 7);
  console.log(str);
  str = str.replace(/eight/g, 8);
  console.log(str);
  str = str.replace(/nine/g, 9);

  answer = parseInt(str);
  return answer;
}

let str = "one4seveneight";

console.log(solution(str));