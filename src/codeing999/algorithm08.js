function solution(n) {  //정답은 split("")이거로 하나씩 쪼갠다음 문자열인 상태로 sort()로 간단히 바로 정렬해버리네. 그다음 reverse()로 뒤집고
    arr = [];
    var i = 0;
    while (n/10 != 0){
            left = n%10;
            arr[i] = left;
            n = Math.floor(n/10);
        i++;
    }
    var sorted = arr.sort(function(a, b){  //sort함수로 숫자 내림차순 정렬
                           return b-a;
                           });
    var sum = 0;
    for (let n of sorted){  //첨에 var n in sorted 했는데 인덱스가 받아져서 물어봤는데 이렇게 하니까 됨. 첨봄. 근데 for in이나 for of 잘 안쓴다고 잘쓰는거로 배우라고함.
        sum = sum + Number(n); //sum + (+n) 이렇게 해도 n을 숫자로 바꿔준다고함.
        sum = sum*10;
    }
    
    var answer = sum/10;
    return answer;
}