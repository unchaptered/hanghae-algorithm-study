function solution(arr, n) {
  let compare = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        compare.push(arr[i]);
      }
    }
  }
  let answer = arr.filter(e => e !== compare[0])
    .sort((a, b) => {
      if (a[n] > b[n]) {
        return 1;
      }
      if (a[n] < b[n]) {
        return -1;
      }
      if (a[n] === b[n]) {
        if (a > b) return 1;
        if (a < b) return -1;
      } 
    });
  return answer
}

let arr = ["coke", "water", "glass", "dog", "dog", "yogurt", "vitamin"];
let n = 2;

console.log(solution(arr, n));