/**
 * 소수만들기
 * 
 * @param {*} nums 
 * @returns 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/12977
 */
function solution(nums) {
    
    let result = 0;
    const len = nums.length;
    for (let i = 0; i < len; i++)
        for (let j = 1 + i; j < len; j++)
            for (let k = 1 + j; k <len; k++)
                if (is_prime(nums[i] + nums[j] + nums[k])) result += 1;

    return result;
    
}

function is_prime(num) {
    for (let n = 2; n <= Math.sqrt(num); n++) {
        if (num % n === 0) return false;
    }
    return num > 2;
}
