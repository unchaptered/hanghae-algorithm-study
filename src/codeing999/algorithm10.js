function solution(arr) {
    var min = arr[0];
    var temp = 0;
    for (var i = 1; i < arr.length; i++){
        if(min > arr[i]){
            min = arr[i];
            temp = i;
        }
    }
    if (arr.length == 1) {
        return [-1];
    }
    arr.splice(temp, 1);
    return arr;
}