/**
 * 체육복
 * 
 * @param {*} n 
 * @param {*} lost 
 * @param {*} reserve 
 * @returns 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/42862
 */
function solution(n, lost, reserve) {
    
    const arr = new Array(n)
        .fill(0)
        .map((v, i) => lost.includes(i + 1) ? - 1 : v)
        .map((v, i) => reserve.includes(i + 1) ? v + 1 : v);
    
    arr.forEach((v, i, arr) => {
            if (v === -1) {
                if (arr[i - 1] === 1) {
                    arr[i - 1] -= 1;
                    arr[i] = 0;
                } else if (arr[i + 1] === 1) {
                    arr[i + 1] -= 1;
                    arr[i] = 0;
                }
            }
        });
    
    return arr.filter(v => v !== -1).length;
    
}