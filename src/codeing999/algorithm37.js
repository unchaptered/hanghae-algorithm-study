//[1차] 다트 게임
function solution(dartResult) { //정규표현식 쓰면 편할려나.
    let r = dartResult
    const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const bonuses = {S: 1, D: 2, T: 3};
    const ops = ['*', '#'];
    let scores = [];
    score = 0;
    bonus ='';
    scoreidx = -1;
    for (i = 0; i < r.length; i++){
        if ( (nums.includes(r[i])) && nums.includes(r[i+1]) ){
            score = r[i] + r[i+1];  //score는 숫자변수일텐데 문자인 숫자가 들어가서 알아서 변환이되는건가?
            i++;
        }
        else score = r[i];
        i++;
        bonus = bonuses[r[i]];
        scores.push(Math.pow(score,bonus)); //이때도 보너스 문자형일텐데 알아서 숫자로?
        scoreidx++;
        if( r[i+1] == '*' ) {
            i++;
            scores[scoreidx-1] *=2;
            scores[scoreidx] *=2;
        }
        else if ( r[i+1] == '#'){
            i++;
            scores[scoreidx] *=-1;
        }   
    }
    return scores[0]+scores[1]+scores[2];
}

