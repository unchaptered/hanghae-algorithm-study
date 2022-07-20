// 이상한 문자
function solution(str) {
  let answer = [];
  const result = str.split(" ").forEach(word => {
    word.split("").forEach((e, i) => {
      if (i % 2 === 0) {
        answer.push(word[i].toUpperCase());
      } else {
        answer.push(word[i].toLowerCase());
      }
    })
  });
  return answer;
}

console.log(solution("try hello world"));