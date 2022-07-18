function solution(s, n) {
    let temp = s.split('');
    for (let i = 0; i<temp.length; i++){
        //console.log('Z'>temp[i]>'A')
        if ((temp[i]<='z') && (temp[i]>='a')){
            console.log(temp[i])
            temp[i] = String.fromCharCode(temp[i].charCodeAt(0) + n); //아스키코드값으로 변환시켜서 숫자 더해주고 나서 다시 스트링으로.
            console.log(temp[i])
            if (temp[i] > 'z')
                temp[i] = String.fromCharCode(temp[i].charCodeAt(0) -26);
            console.log(temp[i])
            
        }else if((temp[i]<='Z') && (temp[i]>='A')){
            console.log(temp[i])
            temp[i] = String.fromCharCode(temp[i].charCodeAt(0) + n);
            if (temp[i] > 'Z')
                temp[i] = String.fromCharCode(temp[i].charCodeAt(0) -26);
        }
            
    }
    var answer = temp.join('');
    return answer;
}