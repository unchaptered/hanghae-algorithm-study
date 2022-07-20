function solution(n) {
    for (var i = 1; i<=n; i++){
        if (i**2 == n)
            return (i+1)**2;
    }
    var answer = 0;
    return -1;
}