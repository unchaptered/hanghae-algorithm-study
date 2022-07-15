/**
 * 
 * @param {*} arr 숫자 배열
 * @param {*} div 나누기 값 (나눠 떨어지는 값 찾는 것)
 * @returns 찾지 못할 경우 -1 리턴
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/12910?language=javascript
 */
function solution(arr, div) {
    
    const tar = arr.filter(v => v % div === 0)
                    .sort((a, b) => a - b);
    
    return tar.length === 0
        ? [ -1 ]
        : tar;
    
}