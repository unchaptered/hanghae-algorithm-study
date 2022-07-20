/**
 * 콜라츠 추측
 * 
 * 1. 조건
 *  1. 입력된 수가 짝수라면 2로 나눕니다. 
 *  2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다. 
 * 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다. 
 * 
 * @param {*} n 
 * @returns 
 * @link 
 */
function solution(n) {
    let count = 0;
    while (count < 500) {
        if (n === 1) return count;
        
        if (isEvenNumber(n)) n = n /2;
        else n = n * 3 + 1;
        
        count++
    }
    
    return -1;
}

// 짝수인지 묻는 함수
const isEvenNumber = n => !(n % 2);