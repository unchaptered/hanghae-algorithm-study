//1번은 1~5 반복 반복주기 5
//2번은 2와 (1,3,4,5)중 하나를 번갈아 가며. 반복주기 8
//3번은 3311224455 반복. 반복주기 10
function solution(answers) {
    let first = [1,2,3,4,5]
    let second = [2,1,2,3,2,4,2,5]
    let third = [3,3,1,1,2,2,4,4,5,5]
    fgrade = answers.reduce((ac, v, i) => v == first[i%5]? ac+1: ac, 0);
    sgrade = answers.reduce((ac, v, i) => v == second[i%8]? ac+1: ac, 0);
    tgrade = answers.reduce((ac, v, i) => v == third[i%10]? ac+1: ac, 0);
    arr = [fgrade, sgrade, tgrade];
    return arr.reduce((ac, v, i) => Math.max(...arr) == v? [...ac, i+1] : ac, []);//세사람 중 최고점인 사람들의 인덱스 리턴.
}
/*
return [fgrade, sgrade, tgrade].reduce((ac, v, i) => Math.max(fgrade, sgrade, tgrade) == v? ac.push(i+1) : ac, []);
ac.push(i+1) 이부분 안되네 ac가 빈배열이라 될줄 알았는데 위의 것처럼 스프레드쓰고 직접 써주면 되긴하지만 이건 왜 안될까. 
헐 푸쉬는 실제 그 배열에 값을 넣어주는거지. 이구문 자체로 그 배열을 리턴하는 것은 아니다. 이걸 생각 못하다니.   
*/
                                    