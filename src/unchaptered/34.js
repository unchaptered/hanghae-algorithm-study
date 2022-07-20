/**
 * 포켓몬
 * 
 * @param {*} nums 
 * @returns 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/1845
 */
function solution(nums) {
    
    return Math.min(new Set(nums).size, nums.length / 2)
    
}