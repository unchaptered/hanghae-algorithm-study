//실패율
function solution(N, stages) {
    let temp = [];
    for (i = 0; i <= N+1; i++){
        temp[i] = 0;
    }
    for (i = 0; i < stages.length; i++){
        temp[stages[i]] +=1;
    }
    let fails = [];
    for (i = 0; i <= N; i++){
        let sum = 0;
        for (j = i; j <= N+1; j++){
            sum += temp[j];
        fails[i] = { stage : i, fail : temp[i]/sum };
        }
    }
    fails.sort( (a,b) => b.fail - a.fail );
    var answer = [];
    for (let i = 0; i <fails.length; i++){
        if(fails[i]['stage'] != 0){
            answer.push(fails[i]['stage']);
        }
    }
    return answer;
}
/*
객체랑 객체 배열 그리고 객체배열을 소팅하는 걸 다 처음 써봐서 엄청 오래 걸렸네
그래도 배운 건 많다.
배열에서 값이 큰 순서대로 그 값의 인덱스들을 받아오려고 하다보니 그냥 배열로는 안될거같아서
객체 배열해서 인덱스랑 같은 값들을 스테이지라는 속성으로 부여했다.
그리고나서 그 객체배열을 정렬한 다음에 스테이지 속성을 읽음. 
이렇게 하는게 맞으려나 다른 방법이 있으려나.
다른 답 보니까 어차피 Key가 인덱스랑 같은거니깐 걍 2중배열해도 똑같앴겠구나. 뭐 객체나 2중배열이나.


function solution(N, stages) {
    let result = [];
    for(let i=1; i<=N; i++){
        let reach = stages.filter((x) => x >= i).length;
        let curr = stages.filter((x) => x === i).length;
        result.push([i, curr/reach]);
    }
    result.sort((a,b) => b[1] - a[1]);
    return result.map((x) => x[0]);
}
근데 이답은 꽤 참고할거 많네. 필터쓰고 랭쓰 구해서 그거에 해당하는 갯수 구하는 부분도 좋고.
*/ 