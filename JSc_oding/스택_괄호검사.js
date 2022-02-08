function solution(str) {
  let answer = 'YES';

  let stack = [];

  for (let x of str) {
    if (x === '(') {
      stack.push(x);
    } else if (x === ')') {
      if (stack.length === 0) {
        answer = 'NO';
        break;
      } else {
        stack.pop();
      }
    }
  }

  if (stack.length > 0) answer = 'NO';

  return answer;
}

let st = '((())(()))';
console.log(solution(st));
