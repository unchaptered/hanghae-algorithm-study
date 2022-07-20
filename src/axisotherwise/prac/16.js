// 두 개 뽑아서 더하기
// 모든 경우의 수 ㅡ> 중복 제거
// new Set(): 중복 제거
// Array.from(): Set 객체 ㅡ> Array
function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      answer.push(arr[i] + arr[j]);
    }
  }
  return answer.filter((e, i) => answer.indexOf(e) === i).sort((a, b) => a - b);
}

let arr = [5, 0, 2, 7];

console.log(solution(arr));