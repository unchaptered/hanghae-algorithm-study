/**
 * 약수의 합
 * 
 * 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
 * 
 * @param {*} n 
 * @returns 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/12928
 */
function solution(n) {
    
    return calc_acc(divisor_gen(n))
    
}

function* divisor_gen(tar) {
    const sqrt = Math.sqrt(tar);
    
    if (Number.isInteger(sqrt)) yield sqrt;
    
    for (let n = 1; n < sqrt ; n++) {
        if (Number.isInteger(tar / n)) {
            yield tar / n;
            yield n;
        }
    }
}

function calc_acc(acc, iter) {
    if (!iter) {
        iter = acc;
        acc = 0;
    }
    for (const a of iter) acc += a;
    return acc;
}