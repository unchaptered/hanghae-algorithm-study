const phone_map = new Map([
    [1,   [0, 0]], [2, [1, 0]], [3,   [2, 0]], 
    [4,   [0, 1]], [5, [1, 1]], [6,   [2, 1]], 
    [7,   [0, 2]], [8, [1, 2]], [9,   [2, 2]], 
    ['*', [0, 3]], [0, [1, 3]], ['#', [2, 3]], 
]);

function calc_distance(start, end) {
    return Math.abs(end[0] - start[0]) + Math.abs(end[1] - start[1]);
}

function calc_both_distance(target, left, right) {
    const left_dist = calc_distance(left, target);
    const right_dist = calc_distance(right, target);
    
    return [ left_dist, right_dist ];
}

/**
 * 키패드 누르기
 * 
 * @param {*} numbers 
 * @param {*} hand 
 * @returns 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/67256
 */
function solution(numbers, hand) {
    
    return numbers.reduce(
        ({ result, left, right }, number, index) => {
            
            const target = phone_map.get(number);
            
            if ([1, 4, 7].includes(number)) {
                result[index] = 'L';
                return { result, left: target, right: right }
            }
            
            if ([3, 6, 9].includes(number)) {
                result[index] = 'R';
                return { result, left: left, right: target }
            }
            
            const [ left_dist, right_dist ] = calc_both_distance(target, left, right);
            if (left_dist < right_dist) {
                
                result[index] = 'L';
                return { result, left: target, right }
                
            } else if (left_dist > right_dist) {
                
                result[index] = 'R';
                return { result, left, right: target }
                
            } else {
                if (hand === 'left') {
                    
                    result[index] = 'L';
                    return { result, left: target, right }
                    
                }
                else {
                    
                    result[index] = 'R';
                    return { result, left, right: target }
                    
                }
            }
            
            return { result, left, right }
        },
        {
            result: new Array(numbers.length).fill(0),
            left: phone_map.get('*'),
            right: phone_map.get('#')
        }
    ).result.join('')
    
}