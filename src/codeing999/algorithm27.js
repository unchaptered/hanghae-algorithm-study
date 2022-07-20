function solution(d, budget) {
    var temp = d.sort(function (a, b) {
        return a - b;
    });
    var sum = temp[0];
    var i = 1;
    while ((sum <= budget)) { //다 더해도 버젯보다 작을 땐 무한루프 돌거같았는데 왜 안돌지.
        sum += temp[i];
        i++;
    }
    var answer = i - 1;
    console.log(answer)
    return answer;
}

solution([1, 1, 2, 1],5);