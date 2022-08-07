//https://school.programmers.co.kr/learn/courses/30/lessons/43238#
function calc(n, times, maxtime){
    
}

function solution(n, times) {
    let time = 0;
    let maxtime = Math.ceil(times.sort( (a, b) => b- a)[0] * n / times.length);
    console.log(maxtime);
    calc(n, times, maxtime);
    
    var answer = 0;
    return answer;
}