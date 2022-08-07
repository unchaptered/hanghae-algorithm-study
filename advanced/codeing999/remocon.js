//https://www.acmicpc.net/problem/1107
function click(N, M, broken){
    let su = 100;
    let temp = [];
    let count = Math.abs(N-su);
    let small = 0;
    let big = 0;
    if (M == 10) return count; //이거 넣었더니 15%에서 틀린건 통과함. 근데 이제 45%쯤?에서 실패함.

    for ( i = N; i >=0; i--){
        let j = i;
        while (j/10 != 0){
            temp.unshift( j%10);
            j = Math.floor(j/10);
        }
        if(!temp.some(v => {     //some: 배열의 여러 요소중 하나라도 포함되면 참인 구문을 !붙임.  
            return broken.includes(v);
            }) ){  
            small = i;
            
            break;
        }
        else temp = [];
    }
    temp = [];
    for ( i = N; i <=1000000; i++){ //채널자체는 무한이고 수빈이가 보고싶어하는 채널범위가 50만이었구나. 
        let j = i;
        while (j/10 != 0){
            temp.unshift( j%10);
            j = Math.floor(j/10);
        }
        if(!temp.some(v => broken.includes(v)) ){  
            big = i;
            break;
        }
        else temp = [];
        if (i == 1000000) big = i; //아래 저 6번 경우 때문에 이거 넣어줘야겠다.
    }
    smallcount = small.toString().length + N-small;
    bigcount = big.toString().length + Math.abs(big -N); //입력 6번같은 경우 big값도 N보다 작아질 수가 있구나. N봐 큰숫자들을 모두 입력할 수가 없어서 big을 못찾은 경우 선언할 때 넣은 0이 되버리네. 
    console.log(small, big, count, smallcount, bigcount);
    return Math.min(count, smallcount, bigcount);

}
const N = 5457;
const M = 3;
const broken  = [6, 7, 8];
console.log(click(N, M, broken));



/*

const N = 80000;
const M = 2;
const broken  = [8, 9];
*/