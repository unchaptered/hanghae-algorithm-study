function solution(n)
{
    let sum = 0;
    while (n/10 != 0){
        let l = n%10;
        n = Math.floor(n/10)
        sum += l;
    }
    let answer = sum;

    return answer;
    
}