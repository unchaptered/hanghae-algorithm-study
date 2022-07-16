function solution(n) {
  let arr = n.toString().split("");
  let one = parseInt(arr[0]);
  let two = parseInt(arr[1]);
  let result = one + two;
  return n % result === 0 ? true : false;
}

console.log(solution(13));