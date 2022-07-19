/**
 *  문자열 내 마음대로 정렬하기
 * 
 * @param {*} words 
 * @param {*} n 
 * @returns 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/12915
 */
function solution(words, n) {
    
    // const result = [1,2,3].sort((aft, bef) => {
    //     if (bef < aft ) return 1;
    //     else if (bef > aft) return -1;
    //     else return 1;
    // });
    words.sort((aft, bef) => {
        if (bef[n] < aft[n]) return 1;
        else if (bef[n] > aft[n]) return -1;
        else {
            if (bef < aft) return 1;
            else if (bef > aft) return -1;
            else return 1;
        }
    });
    
    return words;
}