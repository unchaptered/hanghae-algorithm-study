function solution(arr1, arr2){
	let answer=[];
  for (i = 0; i <arr1.length; i++){
    if (arr2[i] <29){
      answer[i] = arr2[i] - arr1[i];
    }
    else{
      answer[i] = 21 - arr1[i];
    }
  }
	return answer.reduce((ac, v)=>ac+v, 0);
}
let arr1=[9, 9, 9, 9, 7, 9, 8];
let arr2=[23, 23, 30, 28, 30, 23, 23];
console.log(solution(arr1, arr2))

/*
시험 문제 
*/
