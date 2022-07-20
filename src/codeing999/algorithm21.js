function solution(nums) {
    var answer = -1;
    let count = 0;
    let sums = [];
    for (i = 0; i< nums.length-2; i++)
        for ( j = i+1; j<nums.length-1; j++)
            for (k = j+1; k<nums.length; k++ ){
                let sum = (nums[i]+nums[j]+nums[k])  ;  
                sums.push(sum);
            }  
    
    answer = sums.reduce((ac, v) => {
        if (v%2 != 0){
            console.log(ac)
            for(i = 2; i<=Math.sqrt(v); i++){
                if (v%i == 0) return ac;
            }
            return ac+1;
        } 
        return ac;
    }, 0)
                
            
    
    return answer;
}