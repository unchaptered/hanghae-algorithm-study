/**
 * 두개 뽑아서 더하기
 * 
 * @param {*} nums 
 * @returns 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/68644
 */
function solution(nums) {
    
    return get_cases(nums).sort((a, b) => a - b);
    
}

function get_cases(nums) {
    
    const set = new Set();
    const len = nums.length;
    for (let i = 0; i < len; i++)
        for (let j = 1 + i; j < len; j++)
            set.add(nums[i] + nums[j]);
    
    return [ ...set ];
    
}