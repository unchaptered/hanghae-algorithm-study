function solution(n) {
    var sum = 0;
    var half = Math.floor(n/2)  //자기자신빼면 약수는 커봤자 절반크기
    for (i = 1; i <=half; i++){
        if (n % i == 0){
            sum+=i;
            console.log(i)
        }
    }
    var answer = sum+n; //마지막으로 자기자신까지더해
    return answer;
}