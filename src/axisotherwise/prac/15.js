// 같은 수는 싫어
function solution(arr) {
  // 현재값과 다음값 비교
  return arr.filter((e, i) => e !== arr[i + 1]);
}

let arr = [1, 1, 3, 3, 0, 1];

console.log(solution(arr));
