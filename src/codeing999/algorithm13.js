function solution(n) { //3진법 뒤집기
    var temp = n;
    var arr = [];
    while (temp / 3 != 0) {
        arr.push(temp % 3);
        temp = Math.floor(temp / 3);
    }
    console.log(arr)
    arr = arr.reverse();
    console.log(arr)
    var i = 0;
    var answer = 0;
    for (var n of arr) {
        answer = answer + n * Math.pow(3, i);
        i++;
        console.log(answer)
    }

    return answer;
}