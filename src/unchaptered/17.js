/**
 * 로또의 최고 순위와 최저 순위
 * 
 * @param {*} nums 
 * @param {*} targets 
 * @returns 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/77484
 */
function solution(nums, targets) {
    
    const rank = [6, 6, 5, 4, 3, 2, 1];
    
    let min = 0;
    let zero = 0;
    nums.forEach(v => {
        
        min = (targets.includes(v)) ? min + 1 : min;
        zero = (v === 0) ? zero + 1 : zero;
        
    })
    
    return [ rank[min + zero], rank[min] ];
    
}