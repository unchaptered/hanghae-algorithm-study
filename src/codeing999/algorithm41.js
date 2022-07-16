function solution(left, right) { //약수갯수가 홀수이려면 1이거나 자연수의 제곱일 때뿐이라 그렇게 풀긴함. 
    var half;
    var sum = 0
    var square = 0;
    for (var i = left; i<=right; i++){
        half = Math.floor(i/2)
        if( i == 1)
            sum-=1;
        else{
            square = 0;
            for (j = 1; j<=32; j++){    //제약사항에 가장 큰수가 1000이길래 제곱해서 1000안넘는 최대수인 32까지만 돌림.
                if (i == j**2){ //제곱
                   square = 1;
                    break
                }
            }
            console.log(sum)
            if (square == 1)
                sum-=i;
            else
                sum+=i;
        }
                
        
    }
    var answer = sum;
    return answer;
}