// 최소직사각형
function solution(arr) {
  let answer = 0;
  // 가로보다 세로가 더 길다면 눕혀서 가로와 세로를 교체
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] < arr[i][1]) {
      [arr[i][0], arr[i][1]] = [arr[i][1], arr[i][0]];
    }
  }
  let width = Math.max(...arr.map(e => e[0]));
  let height = Math.max(...arr.map(e => e[1]));
  return answer = width * height;
}

let arr = [[60, 50], [30, 70], [60, 30], [80, 40]];

console.log(solution(arr));