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
}