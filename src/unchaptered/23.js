/**
 * 시저 암호
 * 
 * @param {*} s 
 * @param {*} n 
 * @returns 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/12926
 */
function solution(s, n) {
    
    /**
     * a 는 유니코드로 97
     * A 는 유니코드로 65
     * 
     * 알파벳이 26 개인 특성을 이용할 것이므로 둘 다 26으로 맞추기 위해서, 각각 71/39 를 제거한다.
     */
    const switcher = {
        'lower': (unicode) => 'abcdefghijklmnopqrstuvwxyz'[(unicode - 71 + n) % 26],
        'upper': (unicode) => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[(unicode - 39 + n) % 26]
    };
    
    return [...s].map(v => {
        if (v === ' ') return v;
        
        const unicode = v.charCodeAt(0);
        return unicode >= 97
            ? switcher['lower'](unicode)
            : switcher['upper'](unicode);
    }).join('')
}