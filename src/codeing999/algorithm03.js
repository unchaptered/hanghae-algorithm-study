function solution(n) {
    var answer = '';    //빈문자열 ""도 가능
    for (i = 1; i<=n; i++){
        if (i%2 == 1)
            answer+='수';
        else
            answer+='박';
    }
    return answer;
}