const switcher = {
    'S': 1,
    'D': 2,
    'T': 3
}
function calc_score(number, keyword) {
    return Math.pow(number, switcher[keyword]);
}
/**
 * [1차] 다트게임
 * 
 * @param {*} dartResult 
 * @returns 
 * @link
 */
function solution(dartResult) {
    
    const word_spliter = new RegExp(/([\d]{1,})|([SDT]{1})|([\*\#])/, 'g');
    const pattern_spliter = new RegExp(/([\d]{1,})([SDT]{1})[\*\#]?/, 'g');
    const scores = dartResult.match(pattern_spliter);
    
    return scores.reduce(
            ({ result }, current, idx) => {
                
                const keys = current.match(word_spliter);
                if (keys.length === 2) {
                    result[idx] = keys.reduce((number, keyword) => calc_score(+number, keyword));
                } else {
                    const [ star_keyword ] = keys.splice(2, 1);
                    if (star_keyword === '#') {
                        result[idx] = keys.reduce((number, keyword) => calc_score(+number, keyword)) * -1;
                    } else {
                        result[idx] = keys.reduce((number, keyword) => calc_score(+number, keyword)) * 2;
                        result[idx - 1] *= 2;
                    }
                }
                
                return { result }
            },
            {
                result: new Array(scores.length)
            }
        ).result.reduce((a, b) => a + b);
    
}