// https://school.programmers.co.kr/learn/courses/30/lessons/12909
function solution(s){
    var answer = true;
    count = 0; 
    for (i = 0; i < s.length; i++){
        if (s[i] === '(') count++;
        else if (s[i] === ')') {
            count--;
        }
        if (count <0) return false;
    }
    return count? false : true;
}