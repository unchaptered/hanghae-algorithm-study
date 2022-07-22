/* 숫자의 표현
1 에서 1씩 더해진 수
1+2 에서 2씩 더해진 수
1+2+3 에서 3씩 더해진 수
1+2+3+4 에서 4씩 더해진 수
...
*/
function solution(n) {
    count = 0;
    for (let i = 1; (i*(i+1))/2<=n; i++){        
        if ( (n - (i*(i+1))/2) % i  == 0) {
            count++;
        }
    }    
    return count;
}