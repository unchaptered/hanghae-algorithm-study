/**
 * 
 * 주어진 자연수 n 만큼 `수` `박` 글자를 반복한 후 출력하시오.
 * 
 * @param {*} n 반복횟수
 * @returns 정해진 반복수만큼 `수박수....박` 패턴 반환
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/12922
 */
function solution(n) {
    
    let result = '';
    
    for (let c = 0; c < n; c++)
        if (c % 2 === 0) result += '수'
        else result += '박'
    
    return result
    
}