function solution(participant, completion) {    //답은 맞는데 수행시간이 길어서 통과 못한 코드임 현재
    var participant2 = participant
    var completion2 = completion
    for (var i = 0; i< participant2.length; i++){
        for (var j = 0; j<completion2.length; j++){
            if (participant2[i] == completion2[j]){
                delete participant2[i]; //삭제가 아닌 빈값으로 변경
                delete completion2[j]; 
                break;
            } 
            
        }

    }
    for (var i = 0; i< participant2.length; i++){
        if (participant2[i] != null)
            return participant2[i]
    }
    /* 이게 왜 안되냐
    for (var part in participant){
        for (var comp in completion){
            if (part == comp){
                a = 1;
            }   
        }
        if (a == 0)
            {
                return part;
            }
        a = 0;
    }*/
}