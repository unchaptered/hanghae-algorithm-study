function solution(arr)
{
    var answer = [];
    answer = arr.filter((v, i) => v != arr[i+1] ) 
    return answer;
}
/*
filter함수 처음 써봤다. 문제 딱 보고 배열길이가 원본에서 줄어든 형태이면 filter 떠올리면 될듯
화살표 함수도 이제 좀 감 온다. 나중에 정리해봄.
다른 사람 풀이보니까
return arr.filter((val,index) => val != arr[index+1]);
이렇게 answer 선언이랑 거기에 값넣어주고 리턴에 넣는 이걸 줄여서 한줄로 했구나.
그리고 인자도 난 x로 썼는데 value에서 따온 v쓰는게 더 직관적인 듯.
*/