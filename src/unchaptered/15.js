/**
 * 같은 숫자는 싫어
 * 
 * @param {*} arr 
 * @returns 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/12906
 */
function solution(arr) {
    
    return arr.filter((v, i) => v !== arr[i+1]);
    
}