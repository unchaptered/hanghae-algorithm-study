function solution(n, lost, reserve) { //체육복
    let temp = [];
    for (let i = 0; i <n; i++){ //일단 1로 채우기
        temp[i] = 1;
    }
    for (let i = 0; i <n; i++){ //없으 애는 0으로 여분있는애는 2로.
        if (lost[i]) temp[lost[i]-1] -=1;
        if (reserve[i]) temp[reserve[i]-1] +=1;
    }
    //console.log(temp)  
    for (let i = 0; i <n; i++){
        if (temp[i] == 0){
            if (temp[i-1] == 2){
                temp[i-1] = 1;
                temp[i] = 1;
            }
            else if(temp[i+1] == 2){
                temp[i+1] = 1;
                temp[i] = 1;  
            }
        }
    }
    //console.log(temp)        
    
    return temp.reduce((ac, v)=> (v!=0? ac+1 : ac), 0);
}