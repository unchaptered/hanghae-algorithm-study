function solution(s) {
    let arr = s.split(' ');
    let answer = '';
    for (let i = 0; i <arr.length; i++){
        for (let j = 0; j <arr[i].length; j++)
            if (j % 2 == 0){
                answer+=arr[i][j].toUpperCase();
            }
            else{
                answer+=arr[i][j].toLowerCase();
            }
        if (i != arr.length -1) answer+= ' '
    }
    return answer;
}


/* 실패한 코드
function solution(s) {
    var arr = s.split(' ');
    for (var i = 0; i <arr.length; i++)
        for (var j = 0; j <arr[i].length; j++)
            if (j % 2 == 0){
                //arr[i][j] = arr[i][j].toUpperCase(); //왜 이렇게 하면 바뀐게 안들어가고 그대로 일까?
                arr[i][j] = arr[i][j] -32;  //왜 아무변화가 없지
                console.log(arr[i][j]);
            }
            else{
                arr[i][j] = arr[i][j].toLowerCase();
            }
    var s2 =''
    for (var i = 0; i <arr.length; i++)
        s2 = s2 + arr[i];
    var answer = s2;
    return answer;
}
*/