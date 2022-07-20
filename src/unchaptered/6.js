/**
 * 
 * @param {*} n 숫자
 * @returns 자릿수의 합(숫자)
 */
function solution(n) {
    
    return [...n.toString()].reduce((bef, crr) => (+bef) + (+crr), 0);
    
}