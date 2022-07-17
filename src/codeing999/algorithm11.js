function solution(num) {
    temp = num;
    count = 0;
    while(temp != 1){
        if (temp %2 == 0){
            temp = temp /2
            }
        else{
            temp = (temp*3)+1;
        }
        count++;
    }
    var answer = count;
    return (count>500 ? -1 : answer);   //3항 조건연산자 첨 써봄.
}