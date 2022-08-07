//https://school.programmers.co.kr/learn/courses/30/lessons/43163
function solution(begin, target, words) {
    let temp = words;
    let b = [...begin];
    
    if ( words.includes(target) === false) return 0;
    //while (true){
        for ( let i =0; i < temp.length; i++){
            let include = 0;
            for ( let j = 0; j < begin.length; j++){
                console.log([...temp[i]], b);
                if ([...temp[i]].includes(b[j])===true) {
                    include = 1;
                    break;
                }      
            }
            if (include === 0) {
                    temp.splice(i, 1); console.log(temp);
                    i--;
            }  
            
            
        }
    
        
    //}
    var answer = 0;
    return answer;
}