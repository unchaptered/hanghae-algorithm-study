/**
 * 2016-01-01 이 FRI 일 때, 기준일이 몇요일인지 찾으시오.
 * 
 * @param {*} m 기준월
 * @param {*} d 기준일
 * @returns 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/12901
 */
function solution(m, d) {
        
    const mon = m.toString().padStart(2, '0');
    const day = d.toString().padStart(2, '0');
    
    const standard_date = new Date('2016-01-01');
    const target_date = new Date(`2016-${mon}-${day}`);
    
    const time_gap = target_date.getTime() - standard_date.getTime();
    const day_gap = time_gap / 1000 / 60 / 60 / 24;
    
    const date = [ 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU' ];
    
    return date[day_gap % 7];
    
}