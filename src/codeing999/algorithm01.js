function solution(a, b) {
    var daysofmonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30]; //11월까지만 필요
    var dayoftheweek = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    var days = b-1;
    for (var i =0; i<a-1; i++){
        days += daysofmonth[i];
    }
    
    
    var answer = dayoftheweek[days%7];
    return answer;
}