/**
 * [1차 문제] 크레인 인형 뽑기
 * 
 * @param {*} board 
 * @param {*} moves 
 * @returns
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/64061
 */
function solution(board, moves) {

    let result=[];
    let count=0;
    let resultLength=0;
    
    moves.forEach(column=>{
        game : for (const ROW of board) {
            if (ROW[column-1]!==0) {
                result.push(ROW[column-1]);
                resultLength=result.length-1;

                if(result[resultLength]===result[resultLength-1]) {
                    result=result.slice(0,resultLength-1);
                    count+=2;
                }
                ROW[column-1]=0;
                break game;
            }
        }
    });

    return count;
}