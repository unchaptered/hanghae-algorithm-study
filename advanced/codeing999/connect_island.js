//https://school.programmers.co.kr/learn/courses/30/lessons/42861#

function solution(n, costs) {
    
    let sorted = costs.sort( (a, b) => a[2] - b[2]);
    console.log(sorted);
    let visited = [];
    let count = 0;
    var answer = 0;
    for (i = 0; i < sorted.length; i++){
        if (!(visited.includes(sorted[i][0]) && visited.includes(sorted[i][1])) ){
            visited.push(sorted[i][0]);
            visited.push(sorted[i][1]);
            console.log(visited);
            answer+=sorted[i][2];
            count++;
            if (count === n-1) break;
        }
    }
    
    
    return answer;
}


/*이게 첫번째 시도한 방법
*/
//costs는 x * 3 배열
// function solution(n, costs) {
//     let min = [];
//     let visited = [];
//     for ( let j = 0; j < n; j++) {
//         let cost = [undefined, -1]; //비용, 상대노드
//         for ( let i = 0; i < costs.length; i++) {            
//             if ( costs[i][0] === j){
//                 if (cost[0] === undefined) {
//                     cost[0] = costs[i][2];
//                     cost[1] = costs[i][1]; 
//                 }
//                 else if (costs[i][2] < cost) {
//                     cost[0] = costs[i][2];
//                     cost[1] = costs[i][1];
//                 }
//             } else if ( costs[i][1] === j){
//                 if (cost[0] === undefined) {
//                     cost[0] = costs[i][2];
//                     cost[1] = costs[i][0]; 
//                 }
//                 else if (costs[i][2] < cost) {
//                     cost[0] = costs[i][2];
//                     cost[1] = costs[i][0]; 
//                 }
//             }

//         }
//         min[j] = cost;
//         if ( j < cost[1]) visited.push([j, cost[1], cost[0], ]);
//         else visited.push([cost[1], j, cost[0] ]);
        
//     }
//     console.log(visited)
//     const newvisited = visited.reduce((acc, v) => {
//     return acc.find(x => (x[0] === v[0])&&(x[1] === v[1])) ? acc : [...acc, v];
// }, []);
//     console.log(newvisited)
//     var answer = newvisited.reduce( (ac, v) => {
//         console.log(v, v[2]);
//         return ac +v[2]}
//                                    , 0);
       
//     return answer;
// }