/**
 * 신규 아이디 추천
 * 
 * @param {*} new_id 
 * @returns 
 * @link
 */
function solution(new_id) {
    let result = new_id;
    result = result.toLowerCase();
    result = result.replace(/[^\w\d-.]/g,"")
                .replace(/[.]{2,}/g,".")
                .replace(/^[.]/,"")
                .replace(/[.]$/,"");
    
    result = (result === "") ? "a" : result;
    result = result.substring(0,15)
        .replace(/[.]$/g,"");
    
    while (result.length <= 2) {
        result += result[result.length-1];
    }
    
    return result;
}