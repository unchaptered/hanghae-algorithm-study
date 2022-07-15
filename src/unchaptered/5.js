/**
 * `한 단어` 당 짝수 번쨰 번호는 대문자로 홀수 번째 번호는 소문자로 변환
 * 
 * @param {*} sentence 문장(대소문자가 섞이고 띄어쓰기가 있는)
 * @returns 변환이 완료된 문자열
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/12930
 */
function solution(sentence) {
    
    return sentence.split(' ')
        .map(word =>

            word.split('')
                .map((str, idx) =>
                    ((idx + 1) % 2)
                    ? str.toUpperCase()
                    : str.toLowerCase()
                ).join('') 

        ).join(' ');
}