/**
 * 유효한 팰린드롬
 * 
 * 정방향 / 역방향으로 읽어도 같은 문자.
 * (여기서는 대/소문자 구분안함)
 * (단 영문 이외의 글자는 제외)
 */
function solution(str) {

    const foward = str.replace(/[^a-zA-Z]/g, '');
    const reverse = [...foward].join('');
    
    return foward === reverse
        ? 'YES'
        : 'NO'

}

const result = solution('found7, time: study; Yduts; emit, 7Dnouf');
console.log(result);