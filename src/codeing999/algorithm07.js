function solution(n) {
    var upset = [];
    var left = 0;
    i = 0;
    while (n/10 != 0){
            left = n%10;
            upset[i] = left;
            n = Math.floor(n/10);
        i++;
    }
    
    var answer = upset;
    return answer;
}