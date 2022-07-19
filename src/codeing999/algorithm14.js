function solution(sizes) {
    let big =[];
    let small =[];
    for (let i = 0; i<sizes.length; i++){
        if (sizes[i][0] > sizes[i][1] ){
            big.push([sizes[i][0]]);
            small.push([sizes[i][1]]);
        }else{
            big.push([sizes[i][1]]) //지금 봤는데 JS는 세미콜론을 안해줘도 오류가 나지는 않네?
            small.push([sizes[i][0]]);
        }
    }
    var answer = Math.max(...big)*Math.max(...small);
    return answer;
}