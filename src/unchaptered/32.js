/**
 * 실패율
 * 
 * @param {*} N 
 * @param {*} stages 
 * @returns 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/42889
 */
function solution(N, stages) {

    // stages 에서 N 보다 큰 수는 최종 스테이지까지 클리어한 사람을 의미한다.

    const user_count = stages.length;

    return stages.reduce(
        (stage, curr, idx) => {
            if (curr > N) return stage;
            else {
                stage[curr - 1] ++
                return stage;
            }
        },
        new Array(N).fill(0)
    ).reduce(
        ({ result, user_acc }, curr, idx) => {
            result[idx] = {
                    // 못 간사람 / 도달한 사람
                    percent: curr / ( user_count - user_acc ),
                    index: idx + 1
            };

            return {
                result: result,
                user_acc: user_acc + curr
            };
        },
        {
            result: new Array(N).fill({ percent: 0, index: 0 }),
            user_acc: 0
        }
    ).result.sort(({ percent: aft_per, index: aft_idx}, { percent: bef_per, index: bef_idx }) => {
        if (bef_per < aft_per) return -1;
        else if (bef_per > aft_per) return 1;
        else
            if (bef_idx < aft_idx) return 1;
            else return -1;
    }).map(v => v.index);

}
