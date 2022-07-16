/**
 * 자연수 뒤집어 배열로 만들기
 * 
 * @param {*} n 숫자
 * @returns 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/12932
 */
function solution(n) {
    
    return [...`${n}`].reverse().map(v => +v);
    
}