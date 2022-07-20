function solution(arr, divisor) {
    var temp = [];  //빈 어레이
    var idx = 0;
    for (var i =0; i<arr.length; i++){
        if ( arr[i] % divisor == 0)
            {
                temp[idx] = arr[i];
                idx++;
            }
    }
    
    var answer = temp.sort(function(a, b){  //문자로 받아들여서 이렇게 해야된다고하네
                           return a-b;
                           });
    if (answer.length == 0)
        return [-1];    //이게 되네
    return answer;

/*
@ 3~10번줄 수정버전
for (let e of arr) 
        if ( e % divisor == 0) temp.push(e) 

@ 근데 이걸 더 잘 할 수 있는 함수 filter가 있다. 조건에 맞는 원소만 필터링해서 새로운 배열에 넣어줄 때 쓴다고 한다.
화살표 함수까지 써서 더욱 간단하게.
temp = arr.filter(x => x % divisor == 0)

@ sort()함수 쓴 부분도 화살표 함수 써서하면
sort((a, b) => a-b)
