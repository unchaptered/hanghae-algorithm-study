function solution(participant, completion) {
    let part2 = participant.sort()
    let comp2 = completion.sort()
    for (let i = 0; i< part2.length; i++){
        if (part2[i] != comp2[i]) return part2[i];
    }
}

/*//답은 맞는데 수행시간이 길어서 통과 못한 코드
function solution(participant, completion) {    
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
}
*/