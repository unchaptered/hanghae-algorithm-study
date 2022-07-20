//[카카오 인턴] 키패드 누르기. 이건 다른 답들 봐도 짧은 코드가 하나도 없네. 
function distance(a, b)    //칸 이동 수 구하는 함수.
    return Math.abs(a[0]-b[0]) + Math.abs(a[1]-b[1]);

function solution(numbers, hand) {
    let pri = (hand == "left"? 'L' : 'R');
    var coo = [[1,0],       //해당 번호의 좌표값.
               [0, 3], [1, 3], [2, 3],
               [0, 2], [1, 2], [2, 2],
               [0, 1], [1, 1], [2, 1],
              ];
    var lc = [0,0];
    let rc = [2, 0];
    var answer = '';
    for ( v of numbers){    //첨에 걍 for문 쓰다가 numbers[i] 계속 써야되서 바꿈.
        if ([2, 5, 8, 0].includes(v)){
            //console.log(numbers[i], lc, distance(lc, coo[numbers[i]]), rc, distance(rc, coo[numbers[i]]));
            if ( distance(lc, coo[v]) < distance(rc, coo[v]) ){
                answer+='L';
                lc = coo[v];
            }
            else if (distance(lc, coo[v]) > distance(rc, coo[v])){
                answer+='R';
                rc= coo[v];
            }
            else {
                answer+=pri;
                if (hand == "left") lc = coo[v];
                else rc = coo[v];
         }
            
        } 
        else if ([1, 4, 7].includes(v)){
            answer+='L';
            lc = coo[v];
        }
        else{
            answer+='R';
            rc= coo[v];
            
        }
    }
    
    return answer;
}

/*
function solution(numbers, hand) {
    let pri = (hand == "left"? 'L' : 'R');
    var coo = [[1,0],       //해당 번호의 좌표값.
               [0, 3], [1, 3], [2, 3],
               [0, 2], [1, 2], [2, 2],
               [0, 1], [1, 1], [2, 1],
              ];
    var lc = [0,0];
    let rc = [2, 0];
    var answer = '';
    for ( i = 0; i < numbers.length; i++){
        if ([2, 5, 8, 0].includes(numbers[i])){
            //console.log(numbers[i], lc, distance(lc, coo[numbers[i]]), rc, distance(rc, coo[numbers[i]]));
            if ( distance(lc, coo[numbers[i]]) < distance(rc, coo[numbers[i]]) ){
                answer+='L';
                lc = coo[numbers[i]];
            }
            else if (distance(lc, coo[numbers[i]]) > distance(rc, coo[numbers[i]])){
                answer+='R';
                rc= coo[numbers[i]];
            }
            else {
                answer+=pri;
                if (hand == "left") lc = coo[numbers[i]];
                else rc = coo[numbers[i]];
         }
        } 
        else if ([1, 4, 7].includes(numbers[i])){
            answer+='L';
            lc = coo[numbers[i]];
        }
        else{
            answer+='R';
            rc= coo[numbers[i]];
        }
    }
    return answer;
}
*/