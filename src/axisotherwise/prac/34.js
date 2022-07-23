// 폰켓몬
function solution(arr) {
  let answer = 0;
  // 가져갈 수 있는 수
  let max = Math.floor(arr.length / 2);
  // 중복 제거
  let removeDuplicate = arr.filter((e, i) => arr.indexOf(e) === i).length;
  return answer = max < removeDuplicate ? max : removeDuplicate;
}

let arr = [3, 1, 2, 3];

console.log(solution(arr));