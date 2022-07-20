// 모의고사
function solution(arr) {
  let answer = [];
  // 수포자 생성
  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  // 정답 결과 저장
  let result = [0, 0, 0];

  // 수포자 경우의 수 비교 후 정답 결과 저장
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === one[i % one.length]) result[0]++;
    if (arr[i] === two[i % two.length]) result[1]++;
    if (arr[i] === three[i % three.length]) result[2]++;
  }

  let max = Math.max.apply(null, result);

  // 수포자 구분 + 1
  for (let i = 0; i < 3; i++) {
    if (result[i] === max) {
      answer.push(i + 1);
    }
  }

  return answer;
}

let arr = [1, 2, 3, 4, 5];

console.log(solution(arr));