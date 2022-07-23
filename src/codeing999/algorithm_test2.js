function solution(arr, n){
    let temp = arr.filter( (v) => {
      let count = 0;
      for (let i = 0; i<arr.length; i++){
        if (arr[i] == v) count++;
      }  
      return count == 1? true : false
    })
    temp.sort();
    for (let i = 0; i < temp.length; i++){
      temp[i] = temp[i][n] + temp[i];
    }
    temp.sort();
    for (let i in temp){
      temp[i] = temp[i].substring(1);
    }
      return answer = temp;
  }
  let arr=["coke", "water", "glass", "dog", "dog", "yogurt", "vitamin"];
  let n=2;
  console.log(solution(arr, n))