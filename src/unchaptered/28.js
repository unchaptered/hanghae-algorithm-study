/**
 * K번째 수
 * 
 * @param {*} array 임의의 숫자가 담긴 문자열
 * @param {*} commands 절개 명령 배열
 * @returns 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/42748
 */
function solution(array, commands) {
    
    return commands.map(([start, end, idx]) =>
                        array.slice(start - 1, end)
                            .sort((a, b) => a - b )[idx - 1]);
    
}