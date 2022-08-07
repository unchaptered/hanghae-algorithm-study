// 크레인
function solution(board, moves) {
  let answer = 0;
  let task = [];
  // 크레인
  moves.forEach(e => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][e - 1] !== 0) { // 인형 발견
        let temp = board[i][e - 1];
        board[i][e - 1] = 0;
        if (temp === task[task.length - 1]) { // 뽑은 인형과 뽑혔던 인형이 같다면
          task.pop();
          answer += 2;
        } else {
          task.push(temp);
        }
        break;
      }
    }
  });
  return answer;
}

let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1]
];
let moves = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(board, moves));