function solution(...arr) {
  let answer = [];
  arr.forEach((e, i) => {
    if (e !== arr[i + 1]) {
      answer.push(e);
    }
  });
  return answer;
}

console.log(solution(4, 4, 4, 3, 3));