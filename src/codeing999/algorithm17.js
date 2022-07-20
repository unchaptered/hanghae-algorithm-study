function rank(samecount, zerocount)
{   
    let ranking = samecount <=1? 6 :7-samecount;
    let maxranking = 7-(samecount+zerocount);
    if (maxranking > 6) maxranking = 6;
    else if (maxranking <1) maxranking = 1;
    return [maxranking, ranking];
}
function solution(lottos, win_nums) {
    var answer = [];
    let zerocount = lottos.reduce((ac, v) => (v==0? ac+1 : ac), 0) //reduce 써서 특정값 갯수 세기. 초기값 0도 넣어줌.
    console.log(zerocount)
    let samecount = lottos.reduce((ac, v) => (win_nums.includes(v)? ac+1 : ac), 0)
    console.log(samecount)
    return rank(samecount, zerocount);
}

/*
if문 두개 쓰면 편할 곳에서 괜히
괜히 3항연산자 써서 짧게 코딩해보려다가 꼬였었네. 3항연산자는 if문 하나인 경우라서 두개 써야할 땐 쓰지말자.
*/