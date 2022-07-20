function solution(array, commands) {
    let temp = [];
    var answer = [];
    for (let i = 0; i<commands.length; i++){
        temp[i] = array.slice(commands[i][0]-1, commands[i][1]) //이번 문제에선 i번째라고하면 인덱스i가 아니라 실제 순서로 i번째라 -1붙임.
                    .sort((a,b)=>a-b)[commands[i][2]-1]; //slice의 끝범위는 미포함이네.
        
    }
    return temp;
   /* console.log(temp)
    for (let i = 0; i<commands.length; i++)
        answer[i] = temp[i][commands[i][2]-1];

    return answer;*/
}

/*
아 이번문제 또 sort()그냥 쓰다가 겁나 해맸네.
하필 테스트케이스 중에서 한 경우만 어레이 값이 두자리수인 경우가 있어서 그 한 케이스만 실패 계속했던 거구나.
다시한번 조심하자 배열안의 값이 숫자여도 숫자로써 정렬하고 싶을 땐 (a,b)=>a-b) 써주기.
*/
globalThis
