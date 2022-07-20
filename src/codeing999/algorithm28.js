function solution(n, m) { //최대공약수는 두개의 약수들을 구하고 공집합을 만들고 그중 젤 큰거로 구하려고 함.
    // 최소공배수는 최대공약수 구한 다음 그걸로 두 수를 나눈 몫을 곱한다?
    var answer = [];
    var narr = [];
    var marr = [];
    var bigger = (n > m ? n : m)
    for (i = 1; i <= bigger; i++) {
        if (n % i == 0) {
            narr.push(i);
        }
        if (m % i == 0) {
            marr.push(i);
        }
    }
    var same = narr.filter(x => marr.includes(x)); //교집합 filter랑 화살표 써봄. 
    console.log(same)
    answer.push(Math.max(...same)); //최소공배수 여기 ...이 스프레드라는 건데 배열을 펼쳐서 일일이 다 인자로 넣어주는 느낌인 듯. 이거 해주니까 잘됨.
    answer.push(answer[0] * (n / answer[0] * (m / answer[0])))
    return answer;
}