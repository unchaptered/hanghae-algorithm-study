/**
 * 정수 제곱근 판별
 * 
 * @param {*} tar 숫자
 * @returns 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/12934
 */
function solution(tar) {
    
    const sqrt = Math.sqrt(tar);
    
    return Number.isInteger(sqrt)
        ? (sqrt + 1) * (sqrt + 1)
        : -1
    
}