// 마라톤
function solution(total, choice) {
  let answer = [];
  total.sort();
  choice.sort();

  for (let i = 0; i < total.length; i++) {
    if (total[i] !== choice[i]) {
      return total[i];
    }
  }
  console.log(total[total.length - 1]);
}

let total = ["mislav", "stanko", "mislav", "ana"];
let choice = ["stanko", "ana", "mislav"];

console.log(solution(total, choice));