// 로또의 최고 순위와 최저 순위
function solution(lottos, win_nums) {
  // 순위 
  // rank[1] ㅡ> 6등
  let rank = [6, 6, 5, 4, 3, 2, 1]; 
  let answer = [];
  
  // 0을 제외한 당첨공
  let min = lottos.filter(e => win_nums.includes(e)).length;
  // 0과 당첨공
  let max = lottos.filter(e => e === 0).length + min;  

  // 순위 반환
  answer.push(rank[max]);
  answer.push(rank[min]);
  return answer;
} 

let lottos = [0, 0, 0, 0, 0, 0]; 
let win_nums = [31, 10, 45, 1, 6, 19];

console.log(solution(lottos, win_nums));