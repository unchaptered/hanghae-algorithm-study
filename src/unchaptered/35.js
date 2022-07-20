/**
 * [1차] 비밀지도
 * 
 * @param {*} n 
 * @param {*} arr1 
 * @param {*} arr2 
 * @returns 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/17681
 */
function solution(n, arr1, arr2) {
    
    return [arr1, arr2].reduce((arr1, arr2) => {
        const result = new Array(n).fill(0, 2, 4);
        for (let idx = 0; idx < n; idx ++) {
            result[idx] = (arr1[idx] | arr2[idx]).toString(2).padStart(n, '0')
        }
        return result;
    }).map(v => v.replace(/[1]/g, "#").replace(/[0]/g, " "));
    
}