// 문자열 내 마음대로 정렬하기
// localCompare(): 브라우저 버전마다 상이
function solution(arr, n) {
  return arr.sort((a, b) => {
    if (a[n] > b[n]) {
      return 1;
    }
    if (a[n] < b[n]) {
      return -1;
    }
    if (a[n] === b[n]) {
      if (a > b) return 1;
      if (a < b) return -1;
    }
  });
}

let arr = ["sun", "bed", "car"];

console.log(solution(arr, 1));