/**
 * 회문 문자열
 * 
 * 정방향 / 역방향으로 읽어도 같은 문자.
 * (여기서는 대/소문자 구분안함)
 */
function solution(str) {

    const foward = str.toLowerCase();
    const reverse = [...str].reverse().join('');

    return foward === reverse
        ? 'YES'
        : 'No';
        
}