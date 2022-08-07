https://school.programmers.co.kr/learn/courses/30/lessons/42885 아직 못품. 답은 맞았었는데 성능에서 실패함.
function solution(people, limit) {
    let count = 0;
    let temp = people.sort((a,b)=>(a-b));
    let end = temp.length-1;
    for ( let i = 0; i< temp.length; i++){
        if ( i == end){
            count++;
            break;
        }
        for (let j = end; j> i; j-- ){
            if ( temp[i] + temp[j] <= limit){
                end--;
                count++;
                break;
            }   
            else {
                end--;
                count++;
            }
        }
    }
    //console.log(count+temp.length);
    var answer = count;
    return answer;
}