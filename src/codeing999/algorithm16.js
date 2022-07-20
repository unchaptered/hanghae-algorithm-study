function solution(numbers) {
    var answer = [];
    
    for (let i=0; i<numbers.length-1; i++){
        for (let j= i+1; j<numbers.length; j++ ){
            (!answer.includes(numbers[i]+numbers[j])? answer.push(numbers[i]+numbers[j]) : {} );
        }  
    }
    console.log(answer)
    return answer.reduce( (ac, v) => ac.includes(v)? ac : [...ac, v], []).sort( (a, b) => a-b); //배열에서 중복제거하는 방법 중 recude쓰는 방법.
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
    //ac에 초기값 []줬는데 왜 ac.includes에서 오류나지. 원인 찾음
    //나는 3항연산자 쓸 때 전체를 ()로 묶어줘야된다 생각해서 그렇게 한건데 필요 없나보네. 그거때메 오류난거.
    //return answer.reduce((ac, v) => {return ac.includes(v)? ac : [...ac, v]}, []).sort
    //이렇게 묶을 거면 중괄호로 묶었어야하고 중괄호를 명시할거면 return도 명시했어야 한다.
    //return answer.reduce((ac, v) => ac.includes(v)? ac : [...ac, v], []).sort
    //이렇게 {}가 생략되있는건 화살표 오른쪽이 리턴값이라는 것이다.
}
*/

solution([1,2])

