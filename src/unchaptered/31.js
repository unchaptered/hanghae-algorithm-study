/**
 * 소수찾기
 * 
 * @param {*} max 
 * @returns 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/12921
 */
function solution(max) {
    
    const length = max;
    const boundary = Math.sqrt(max);
    
    const arr = new Array(max + 1).fill(1);
    arr[0] = 0;
    arr[1] = 0;
    
    for (let i = 2; i <= boundary; i++)
        for (let j = i * 2; j <= length; j += i)
            arr[j] = 0;
    
    return arr.filter(v => v).length;

}