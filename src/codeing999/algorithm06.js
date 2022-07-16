function solution(n)
{
    var sum = 0;
    while (n/10 != 0){
        var l = n%10;
        n = Math.floor(n/10) //소수점 버리기
        sum += l;
    }
    var answer = sum;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log(sum)

    return answer;
}