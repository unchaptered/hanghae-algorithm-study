// 에라토스테네스의 체
function solution(nums) {
    
    // 모든 경우의 수 계산
    const set = new Set;
    const len = nums.length;
    for (let i = 0; i < len; i++)
        for (let j = 1 + i; j < len; j++)
            for (let k = 1 + j; k <len; k++)
                set.add(nums[i] + nums[j] + nums[k]);
    
    // 에라토스테네스의 체 계산
    const filter_ground = new Array(3001).fill(0);
    [...set].forEach(val => filter_ground[val] = 1);

    // 에라토스테네스를 이용한 카운트
    const max = Math.max(...set);
    const sqrt = Math.sqrt(max);
    for (let i = 2; i <= sqrt; i++)
        for (let j = i; j <= max; j += i)
            filter_ground[j] = 0;
    
    return filter_ground.filter(v => v).length;
    
}

