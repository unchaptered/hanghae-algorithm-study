/**
 * 예산
 * 
 * @param {*} d 
 * @param {*} budget 
 * @returns 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/12982
 */
function solution(d, budget) {

    return d.sort((a, b) => a - b)
        .reduce(({ idx, budget }, num) => {
            return {
                idx: budget < num ? idx : ++idx,
                budget: budget < num ? budget : budget - num
                
            }
        
        }, {
            idx: 0,
            budget: budget
        }).idx
    
}