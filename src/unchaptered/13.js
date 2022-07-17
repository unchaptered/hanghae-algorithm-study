/**
 * 3진법 뒤집기
 * 
 * @param {*} num 
 * @returns 
 * @link https://github.com/unchaptered/code-sovle-server
 */
function solution(num) {
    
    return parseInt(
        [...num.toString(3)].reverse().join(''),
        3
    );
}