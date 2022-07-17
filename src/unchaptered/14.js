/**
 * 최소 직사각형
 * 
 * @param {*} sizes 
 * @returns 
 * @links https://school.programmers.co.kr/learn/courses/30/lessons/86491
 */
function solution(sizes) {
    
    return sizes
        .map(v => v.sort((a, b) => b - a))
        .reduce(
            ([bef_l, bef_r], [curr_l, curr_r], ..._) => 
            [Math.max(bef_l, curr_l), Math.max(bef_r, curr_r)],
            [0, 0]
        ).reduce(
            (left, right) => left * right
        );
    
}