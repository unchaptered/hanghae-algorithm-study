function solution(n, arr1, arr2) { //[1차] 비밀지도
    //let temp = [][]; //이런 2차원배열 선언은 불가능하다고 한다.
    let dec  = 0;
    let temp1 = [];
    let temp2 = [];
    let temp = new Array(n);
    for ( let i = 0; i<n; i++){
        temp[i] = [];
        dec = arr1[i].toString(2);
        temp1 = dec.split('');
        while (temp1.length < n) {  //값이 작을 땐 5자리가 안되서 앞에 0 채워주기.
            temp1.unshift('0');
        }
        dec = arr2[i].toString(2);
        temp2 = dec.split('');
        while (temp2.length < n) {
            temp2.unshift('0');
        }
        //console.log(temp1, temp2);
        for (let j = 0; j<n; j++){
            if ( (temp1[j] !='0')|| (temp2[j] !='0')){  //둘다 벽인 경우.
                temp[i][j] = '#';    
            }
            else temp[i][j] = ' ';
            //console.log(temp1[j] , temp2[j], temp[i]);
        }
        //console.log(temp[i])
        temp[i] = temp[i].join('');
    }
    return temp;

}