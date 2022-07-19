//var num = 3;
//var carnum = [25, 23, 11, 47, 53, 17, 33];
var num = 0;
var carnum = [12, 20, 54, 30, 87, 91, 30];
var count = 0;
for (i = 0; i<7; i++){
    if (num == carnum[i]%10)
       count++;
}
    
console.log(count)