//최댓값과 최솟값
function solution(s) {
    let temp = s.split(' ').sort( (a,b)=>a-b); //배열에 있는 '3' 이런 문자로된 숫자도 숫자로 받아들이네. 모르고 걍 한건데. 다른 답보면 Math.max도 문자인 숫자에 그대로 써짐.
    console.log(temp);
    var answer = '';
    return answer+temp[0] +' '+ temp[temp.length-1];
}