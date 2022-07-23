/**
 * 최솟값과 최댓값
 * 
 * @param {*} s 
 * @returns 
 * @link
 */
function solution(s) {
    
    const arr = s.split(' ');
    
    return `${Math.min(...arr)} ${Math.max(...arr)}`;
    
}