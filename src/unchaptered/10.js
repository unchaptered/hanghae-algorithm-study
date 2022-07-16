/**
 * 제일 작은 수 제거하기
 * 
 * @param {*} arr 
 * @returns 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/12935
 */
function solution(arr) {
    
    return arr.length > 1
        ? extract_minimum(arr)
        : [-1];
    
}
function find_minimum(arr) {
    
    let minimum_index = 0;
    for (let index = 0; index < arr.length; index++) {
        
        if (arr[index] < arr[minimum_index]) minimum_index = index;
        
    }
    return {
        index: minimum_index,
        value: arr[minimum_index]
    };
    
}
function extract_minimum(arr) {
    
    const { index, value } = find_minimum(arr);
    return arr.filter(v => v !== value);
    
}