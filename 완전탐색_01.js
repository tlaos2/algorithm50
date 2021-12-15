function solution(answers) {
  var answer = [];

  let p1 = [1, 2, 3, 4, 5]; //5
  let p2 = [2, 1, 2, 3, 2, 4, 2, 5]; //8
  let p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; //10

  let pa1 = 0,
    pa2 = 0,
    pa3 = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answer[i] === p1[i % 5]) {
      pa1++;
    }
    if (answer[i] === p2[i % 8]) {
      pa2++;
    }
    if (answer[i] === p3[i % 10]) {
      pa3++;
    }
  }

  let max = Math.max(pa1, pa2, pa3);

  if (pa1 === max) {
    answer.push(1);
  }

  if (pa2 === max) {
    answer.push(2);
  }

  if (pa3 === max) {
    answer.push(3);
  }

  console.log(pa1, pa2, pa3);

  return answer;
}

solution([1, 2, 3, 4, 5]);
