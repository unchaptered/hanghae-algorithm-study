
/**
 * 약수의 개수와 덧셈
 * 
 * @param {*} l 
 * @param {*} r 
 * @returns 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/77884
 */
function solution(l, r) {
    
    function* gen(l, r) {
        for (let i = l; i <= r; i++)
            yield i;
    }
    
    let result = 0;
    for (const number of gen(l, r))
        result += Number.isInteger(Math.sqrt(number))
            ? (-1 * number)
            : number
    
    return result;
}