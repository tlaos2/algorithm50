function solution(n, lost, reserve) {
  var answer = 0;

  // console.log(n, lost, reserve)
  let students = Array.from({ length: n + 1 }, () => 1);

  //lost
  for (let l of lost) {
    students[l]--;
  }

  //reserve
  for (let r of reserve) {
    students[r]++;
  }

  //move reserve
  //   for (let l of lost) {
  //     if (l === 1 && students[2] === 2) {
  //       students[2]--;
  //       students[l]++;
  //     } else if (l === n && students[n - 1] === 2) {
  //       students[n - 1]--;
  //       students[n]++;
  //     } else if (l > 1 && students[l - 1] === 2) {
  //       students[l - 1]--;
  //       students[l]++;
  //     } else if (l < n && students[l + 1] === 2) {
  //       students[l + 1]--;
  //       students[l]++;
  //     }
  //   }

  for (let i = 1; i < students.length; i++) {
    if (students[i] === 0) {
    }
  }

  //0번째 주소 삭제
  students[0] = 0;

  //0보다 큰 학생 수
  let cnt = students.filter(v => {
    if (v > 0) return v;
  });

  answer = cnt.length;

  return answer;
}

console.log(solution(3, [1, 2], [2, 3]));
