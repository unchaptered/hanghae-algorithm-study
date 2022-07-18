/**
 * 신규 아이디 추천
 * 
 * @param {*} new_id 
 * @returns 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/72410
 */
function solution(new_id) {
    
    new_id = new_id.toLowerCase()
                    .replace(/[^a-zA-Z0-9\-\_\\.]/g, '')
                    .replace(/[\.]{2,}/g, '.')
                    .replace(/^[\.]{1,}|[\.]{1,}$/g, '')
                    .substring(0, Math.min(15, new_id.length))
                    .replace(/^[\.]{1,}|[\.]{1,}$/g,'')
                    .padEnd(3, new_id.charAt(new_id.length - 1));
    
    return new_id ? new_id : 'aaa';

}