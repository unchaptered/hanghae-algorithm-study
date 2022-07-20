function solution(s) {
    let eng = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let temp =s;
    for(i = 0; i<eng.length; i++){
        for (j = 0; j<s.length; j++)    //같은 숫자 여러개 있을 수도 있네.
            temp = temp.replace(eng[i], i);
    }
    return Number(temp);
}