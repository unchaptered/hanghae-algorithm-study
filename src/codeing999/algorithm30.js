function solution(n) {
    //if ( n % 2 == 1) return 2;
    //else{
        for ( let i = 2; i<n; i++){
            if (n% i == 1) return i;
        }
    //}
    var answer = 0;
    return answer;
}