/**
 * 
 * @param {*} starter 출발한 선수 리스트 (중복 가능)
 * @param {*} ender 도착한 선수 리스트 (중복 가능)
 * @returns 
 */
function solution(starter, ender) {
    
    const user_map = new Map();
    
    starter.forEach(val => {
        
        if (!user_map.has(val)) user_map.set(val, 1)
        else user_map.set(val, user_map.get(val) + 1);
        
    });
    
    ender.forEach(val => {
        
        if (user_map.get(val) === 1) user_map.delete(val);
        else user_map.set(val, user_map.get(val) - 1);
        
    })

    /*
     * users_map 은 `Map` 타입으로 구조 분해 할당을 실행하면 객체가 반환이 됩니다.
     *
     * 해당 배열에서 Key 값을 뽑는 것은 2가지가 존재하는데
     *  1. Map 빌트인 메서드 호출
     *  2. 구조 분해 할당과 Array 빌트인 메서드 호출을
     * 
     * 현재 문제는 1번의 방법으로 풀이했습니다.
     */
    
    return [...user_map].flat(2)[0];
    
}