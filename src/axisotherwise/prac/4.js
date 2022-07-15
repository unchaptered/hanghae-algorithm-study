// 마라톤
function solution(total, choice) {
  let answer = [];
  total.sort();
  choice.sort();
  for (let i = 0; i < total.length; i++) {
    if (total[i] !== choice[i]) {
      answer.push(total[i]);
      break;
    }
  }
  return answer;
}

let total = ["marina", "josipa", "nikola", "vinko", "filipa"]
let choice = ["josipa", "filipa", "marina", "nikola"]
console.log(solution(total, choice));