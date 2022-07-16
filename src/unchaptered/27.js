
/**
 * 두 수의 최대공약수 와 최소 공배수 계산
 * 
 * @param  {...any} nums 
 * @returns 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/12940
 */
function solution(...nums) {

    const [ large, small ] = nums.sort((a, b) => b - a);
    
    const divisor = calc_both_divisor(large, small);
    const multiple = cacl_both_multiple(large, small, divisor);
    
    return [ divisor, multiple ]

}

/**
 * 두 수의 최대 공약수를 활용한 최소 공배수 계산식
 */
function cacl_both_multiple(large, small, divisor) {
    
    let multiple = null;    
    if (divisor === 1) multiple = large * small;
    else multiple = large / divisor * small;
    
    return multiple
}

/**
 * 두 수의 최대 공약수 계산
 */
function calc_both_divisor(large, small) {
    
    const [ sqrt_large, sqrt_small ] = [ Math.sqrt(large), Math.sqrt(small) ];
    
    let divisor = null;
    for (const div_large of calc_divisor(large, sqrt_large)) {
        for (const div_small of calc_divisor(small, sqrt_small)) {
            if (div_large === div_small && divisor === null) {
                divisor = div_small
                break;
            };
        }
    }
    
    return divisor;
    
}

/**
 * 제곱근의 성질을 이용한, 특정 수의 모든 약수 계산
 *
 * @params num 대상숫자
 * @params sqrt 대상숫자의 제곱근
 * @returns 모든 약수들
 */
function* calc_divisor(num, sqrt) {
    
    let res = [];
    for (let i = 0; i < sqrt; i++) {
        if (num % i === 0) {
            yield num / i;
            res.unshift(i)
        }
    }
    
    for (const r of res) yield r;
    
}