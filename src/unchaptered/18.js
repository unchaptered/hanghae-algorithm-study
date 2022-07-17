/**
 * 모의고사
 * 
 * @param {*} answers 
 * @returns 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/42840
 */
function solution(answers) {
    
    const a_sel = [ 1, 2, 3, 4, 5 ];
    const b_sel = [ 2, 1, 2, 3, 2, 4, 2, 5 ];
    const c_sel = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5 ];
    
    const a_len = a_sel.length;
    const b_len = b_sel.length;
    const c_len = c_sel.length;
    
    const scores = answers.reduce(
        ([ a, b, c ], ans, idx) => {
            return [
                a_sel[idx % a_len] === ans ? a + 1 : a,
                b_sel[idx % b_len] === ans ? b + 1 : b,
                c_sel[idx % c_len] === ans ? c + 1 : c
            ]
        },
        [0, 0, 0]
    )
    
    const max_score = Math.max(...scores);
    return scores.map((v, i) => v === max_score ? i + 1 : undefined)
        .filter(v => v);
    
}