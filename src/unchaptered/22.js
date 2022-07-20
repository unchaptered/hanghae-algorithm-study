/**
 * 숫자 문자열과 영단어
 * 
 * @param {*} text 
 * @returns 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/81301
 */
function solution(text) {
    
    return to_number(text);
    
}

function to_number(text) {
    
    const transform_map = new Map([
        ['zero', 0], ['one', 1],
        ['two', 2], ['three', 3],
        ['four', 4], ['five', 5],
        ['six', 6], ['seven', 7],
        ['eight', 8], ['nine', 9],
    ]);
    
    return +[...text].reduce(
        ({ result, word }, curr) => {
            if (isNumber(curr))
                return { result: result + curr, word: '' }
            else
                if (isValidWord(word + curr, transform_map))
                    return { result: result + transform_map.get(word + curr), word: ''}
                else
                    return { result: result, word: word + curr }
        },
        { result: '', word: '' }
    ).result;
    
    function isNumber(str) {
        return !isNaN(+str)
    }
    function isValidWord(str, map) {
        return map.has(str)
    }
    
}

