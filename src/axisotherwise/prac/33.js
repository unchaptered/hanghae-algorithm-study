// 체육복
function solution(n, lost, reserve) {
  let answer = 0;
  // 체육복 토탈
  let clothes = Array(n).fill(1);
  
  lost.forEach((e, i) => {
    clothes[e - 1]--;
  });
  reserve.forEach((e, i) => {
    clothes[e - 1]++;
  });
  answer = clothes.reduce((acc, cur, i) => {
    if (cur === 0) { // 체육복 없는 친구
      if (clothes[i - 1] === 2) { // 앞에 남는지
        clothes[i]++; 
        clothes[i - 1]--;
      } else if (clothes[i + 1] === 2) { // 뒤에 남는지
        clothes[i]++;
        clothes[i + 1]--;
      }
    }
    if (clothes[i] >= 1) { // 체육복 있다면
      return ++acc;
    } else {
      return acc;
    }
  }, 0);
  return answer;
}

let n = 5;
let lost = [2, 4];
let reserve = [1, 3, 5];

console.log(solution(n, lost, reserve));