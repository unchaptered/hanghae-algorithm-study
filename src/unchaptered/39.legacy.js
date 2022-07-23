/**
 * 숫자의 표현
 * 
 * @param {*} n 
 * @returns 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/12924
 */
function solution(n) {
    
    let result = new Array(n.length);
    for (let i = 1; i <= n; i++) {
        
        let acc = 0;
        for (let j = i; j <= n; j++) {
            
            acc += j;
            if (acc === n) {
                result.push(acc);
                break;
            } else if (acc > n) break;
            
        }
    }
    
    return result.filter(v => v).length;
    
    
}