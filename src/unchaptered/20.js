/**
 * 문자열 내림차순으로 배치하기
 * 
 * @param {*} s 
 * @returns 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/12917
 */
function solution(s) {

    return [...s].sort((aft, bef) => {
        return bef.charCodeAt(0) - aft.charCodeAt(0);
    }).join('');
    
}