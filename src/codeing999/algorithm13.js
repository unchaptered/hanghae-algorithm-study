function solution(n) { //3진법 뒤집기
    var temp = n;
    var arr = [];
    while (temp / 3 != 0) {
        arr.push(temp % 3);
        temp = Math.floor(temp / 3);
    }
    arr = arr.reverse();
    for (var i in arr){
        answer= answer + arr[i]*Math.pow(3, i);

    }
    return answer;
}

/*
@push 대신에 ushift를 처음부터 썼으면 앞에 들어가기 때문에 리버스를 안할 수 있었다.
이거 전엔 이렇게 했었다. i를 따로 만들기보단 for in으로 바꿔서 위와같이 하는게 낫겠다.
 var i = 0;
    var answer = 0;
    for (var n of arr) {
        answer = answer + n * Math.pow(3, i);
        i++;
    }

*/