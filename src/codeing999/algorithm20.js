function solution(s) {
    return s.split('').sort().reverse().join('');
}


//이건 구글링하다가 거의 답을 봐버림.
//문자열을 정렬하고플 땐 split('')으로 한글자 단위로 쪼개서 배열로 만들어야되나보네
//split함수는 그 끊은 문자열들을 가진 배열을 반환한다.
//join()도 인자 없이 그냥 쓰면 ,로 구분해서 합침. join('')이렇게 빈값 명시해줘야 그대로 합침