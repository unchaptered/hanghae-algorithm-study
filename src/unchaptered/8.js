/**
 * 정수 내림차순으로 만들기
 * 
 * @param {*} num 숫자
 * @returns https://school.programmers.co.kr/learn/courses/30/lessons/12933
 */
function solution(num) {
    
    return +[...`${num}`].sort( (a,b) => b - a).join('');
    
}