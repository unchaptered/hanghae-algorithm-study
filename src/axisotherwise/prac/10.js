function solution(...arr) {
  let answer = arr;
  if (arr.length <= 1) return -1;
  answer.pop();
  return answer;
}

console.log(solution(4, 3, 2, 1));