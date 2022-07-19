function solution(x) {
    var sum = 0;
    var temp = x;
    while (temp/10 != 0){
        var l = temp%10;
        sum += l;
        temp = Math.floor(temp/10) 
        
    }
    console.log(x, sum)
    var answer = true;
    return (x%sum==0 ? true : false);
}