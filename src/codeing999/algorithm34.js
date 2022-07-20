function solution(nums) { //폰켓몬
    let temp = [...new Set(nums)];  //이거로 중복제거가 훨 빠른가보다. 
    let n = Math.floor(nums.length/2);
    return (temp.length > n ? n : temp.length) ;
}

/*
function solution(nums) { //폰켓몬
    let temp = [];
    let n = Math.floor(nums.length/2);
    temp = nums.reduce((ac,v) => ac.includes(v)? ac: [...ac, v], [])    //다른 사람들은 보통 set으로 바꿔서 중복 제거하네. 이방법써서그런지 몰라도 시간 오래걸림
    return (temp.length > n ? n : temp.length) ;
}
*/