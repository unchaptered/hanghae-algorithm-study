//소수찾기
function solution(n) { 
    let temp = [];
    temp[0] = 0; 
    temp[1] = 0;
    for (let i = 2; i <= n; i++){
        if (i%2 == 0) temp[i] = 0;
        else temp[i] = i;
    }
    for (let i = 3; i <= n; i+=2){
        if(temp[i] != 0){
            for (let j = i*2; j <= n; j+=i){
                temp[j] = 0;
            }
        }     
    }
    console.log(temp)
    var answer = temp.reduce((ac, v) => v!=0? ac+1:ac, 0)+1;    //2를 제외시켰었으니까 +1
    return answer;
}

/*  //이거로도 효율성 테스트 통과하긴 하는데 더 빠르게 해보려고 위에꺼로 해봄.
//소수찾기
function solution(n) { 
    let temp = [];
    temp[0] = 0; 
    temp[1] = 0;
    for (let i = 2; i <= n; i++){
        temp[i] = i;
    }
    for (let i = 2; i <= n; i++){   /i< Math.sqrt(n) 이렇게하면 반으로 줄이는구나. 
        if(temp[i] != 0){
            for (let j = i*2; j <= n; j+=i){
                temp[j] = 0;
            }
        }     
    }
    console.log(temp)
    var answer = temp.reduce((ac, v) => v!=0? ac+1:ac, 0);
    return answer;
}
*/