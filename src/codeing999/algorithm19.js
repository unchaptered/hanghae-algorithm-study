function solution(strings, n) {
    let temp = strings.sort().map(v => v[n]+v ).sort(); //앞에 n번째 문자를 붙이고 정렬
    var answer = temp.map(v =>v.substring(1));          //다시 떼어내고 답 제출.
    return answer;
}

/*
이거 근데 strings.sort()한다음에 뒤에 함수 붙여서 조건을 두번째 글자 작은 순 뭐이렇게하면
sort()만으로 정렬되긴한가봄.
*/