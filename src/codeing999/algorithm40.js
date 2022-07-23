function solution(board, moves) { //크레인 인형뽑기 게임
    let bucket = [];
    for (i = 0; i<moves.length; i++){
        for( j = 0; j<board.length; j++){
            //console.log(j, moves[i]-1, board[j][moves[i]-1] );
            if(board[j][moves[i]-1] !=0){
                bucket.push(board[j][moves[i]-1]);
                board[j][moves[i]-1] = 0;
                break;
            }
        }
    }
    
    let count = 0;
    for (i = 0; i<bucket.length-1; i++){
        //console.log(bucket);
        if ( bucket[i] == bucket[i+1]){
            count+=2;
            bucket.splice(i, 2);
            i = -1; //와 for문 끝나면 +1되니까 0말고 -1로 했어야되네 이거때메 몇개만 안풀려서 막혔음.
        }
    }
    return count;
}