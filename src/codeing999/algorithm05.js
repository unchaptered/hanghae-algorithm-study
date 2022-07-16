function solution(s) {
    var arr = s.split(' ');
    for (var i = 0; i <arr.length; i++)
        for (var j = 0; j <arr[i].length; j++)
            if (j % 2 == 0){
                //arr[i][j] = arr[i][j].toUpperCase(); 이거 배열엔 안먹힌다나 암튼안됨.
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