//https://school.programmers.co.kr/learn/courses/30/lessons/42861#




/*이건 실패한 방법. 각노드별로 자기랑 연결된 가장 비용 낮은 노드를 찾으면
노드갯수가 n개일 때 n개의 연결이 찾아지고 거기서 1개만 빼서 n-1개의 노드를 만들어서
다 더하면 정답이 된다는 발상이었는데. 테스트는 2개밖에 통과를 못함. 원인도 알겠고. 
이렇게도 계속 더 해보면 됐을진 모르겠지만, 일단 다른 더 좋고 간단한 방법이 떠올라서 보류시킴.
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