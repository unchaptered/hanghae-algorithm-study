function solution(str) {
  let lower = [];
  let upper = [];
  str.split("").filter(e => {
    if (e.toLowerCase() === e) {
      lower.push(e);
    } else {
      upper.push(e);
    }
  });
  return lower.sort().reverse().concat(upper).join("");
}

console.log(solution("Zbcdefg"));