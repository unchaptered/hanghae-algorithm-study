function solution(numbers) {
    var answer = [];
    
    for (let i=0; i<numbers.length-1; i++){
        for (let j= i+1; j<numbers.length; j++ ){
            (!answer.includes(numbers[i]+numbers[j])? answer.push(numbers[i]+numbers[j]) : {} );
        }  
    }
    console.log(answer)
    return answer.reduce( (ac, v) => ac.includes(v)? ac : [...ac, v], []).sort( (a, b) => a-b);
}

/*
https://jsikim1.tistory.com/227

이건 성공한 코드.
function solution(numbers) {
    var answer = [];
    for (let i=0; i<numbers.length-1; i++){
        for (let j= i+1; j<numbers.length; j++ ){
            (!answer.includes(numbers[i]+numbers[j])? answer.push(numbers[i]+numbers[j]) : {} );
        }  
    }
    return answer.sort((a,b)=>(a-b));
    //return answer.reduce((ac, v) => (ac.includes(v)? ac : [...ac, v], []));
    //ac에 초기값 []줬는데 왜 ac.includes에서 오류나지.
}
*/

solution([1,2])

